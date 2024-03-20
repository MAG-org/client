import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PatientDetail() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsResponse = await axios.get(
          `http://localhost:3000/api/appointment`
        );
        const appointment = appointmentsResponse.data.find(
          appointment => appointment.PatientDetails[0]._id === params.id
        );
        if (appointment) {
          const medicalRecordResponse = await axios.get(
            `http://localhost:3000/api/medical-record/${appointment._id}/`
          );
          setMedicalHistory(medicalRecordResponse.data);
        } else {
          setMedicalHistory([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMedicalHistory([]);
      }
    };
    fetchData();
  }, [params.id]);

  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <div className="flex justify-center items-center">
        <div className="w-3/4 shadow-xl rounded-2xl p-10 border ml-60">
          <div className="flex items-center">
            <div className="gap-2 text-left">
              <h1 className="font-extrabold text-3xl">
                Name: {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].name}
              </h1>
              <h1 className="font-semibold text-xl">
                Email: {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].email}
              </h1>
              <h1 className="font-semibold text-xl">
                Phone: {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].phoneNumber}
              </h1>
              <h1 className="font-semibold text-xl">
                Address: {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].address}
              </h1>
              <h1 className="font-semibold text-xl">
                Age: {calculateAge(medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].birthDate)}
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
            <div style={{ paddingBottom: "50px" }}>
              <h1 className="text-2xl font-bold">Medical History</h1>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Doctor's Name</th>
                  <th className=" py-2">Diagnosis</th>
                  <th className="px-4 py-2">Prescription</th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-4 py-2">{entry.date}</td>
                    <td className="px-4 py-2">{entry.time}</td>
                    <td className="px-4 py-2">{entry.DoctorDetail[0].name}</td>
                    <td className="px-4 py-2">
                      {entry.DoctorDetail[0].disease_name}
                    </td>
                    <td className="px-4 py-2">
                      {entry.DoctorDetail[0].docter_note}
                    </td>
                  </tr>
                ))}
                {medicalHistory.length === 0 && (
                  <tr>
                    <td className="px-4 py-2" colSpan="6">
                      No medical history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
