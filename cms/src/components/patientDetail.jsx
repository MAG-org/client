import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PatientDetail() {
  const [patientData, setPatientData] = useState({});
  const [medicalHistory, setMedicalHistory] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [patientResponse, medicalHistoryResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/patient/${params.id}`),
          axios.get(`http://localhost:3000/api/medical-record/${params.id}/`),
        ]);
        setPatientData(patientResponse.data);
        setMedicalHistory(medicalHistoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPatientData([]);
        setMedicalHistory([]);
      }
    };
    fetchData();
  }, [params.id]);

  console.log(patientData);

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
                Name: {patientData.name}
              </h1>
              <h1 className="font-semibold text-xl">
                Email: {patientData.email}
              </h1>
              <h1 className="font-semibold text-xl">
                Phone: {patientData.phoneNumber}
              </h1>
              <h1 className="font-semibold text-xl">
                Address: {patientData.address}
              </h1>
              <h1 className="font-semibold text-xl">
                Age: {calculateAge(patientData.birthDate)}
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
                    <td className="px-4 py-2">{entry.DoctorDetail.name}</td>
                    <td className="px-4 py-2">{entry.disease_name}</td>
                    <td className="px-4 py-2">{entry.docter_note}</td>
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
