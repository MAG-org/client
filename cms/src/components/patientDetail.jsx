import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PatientDetail() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const params = useParams();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const appointmentsResponse = await axios.get(
    //       `http://localhost:3000/api/appointment`
    //     );
    //     const appointment = appointmentsResponse.data.find(
    //       appointment => appointment.PatientDetails[0]._id === params.id
    //     );
    //     if (appointment) {
    //       const medicalRecordResponse = await axios.get(
    //         `http://localhost:3000/api/medical-record/${appointment._id}/`
    //       );
    //       setMedicalHistory(medicalRecordResponse.data);
    //     } else {
    //       setMedicalHistory([]);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     setMedicalHistory([]);
    //   }
    // };
    // fetchData();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/patient/${params.id}`
        );
        setMedicalHistory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  console.log(medicalHistory);

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
            <div className="gap-3 text-left">
              <h1 className="flex font-bold text-2xl">
                Name:
                <div className="flex font-semibold text-xl pt-2 pl-5">
                  {medicalHistory.name}
                  {/* {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].name} */}
                </div>
              </h1>
              <h1 className="flex font-bold text-2xl">
                Email:
                <div className="flex font-semibold text-xl pt-2 pl-5">
                  {medicalHistory.email}
                  {/* {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].email} */}
                </div>
              </h1>
              <h1 className="flex font-bold text-2xl">
                Phone:
                <div className="flex font-semibold text-xl pt-2 pl-5">
                  {medicalHistory.phoneNumber}
                  {/* {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].phoneNumber} */}
                </div>
              </h1>
              <h1 className="flex font-bold text-2xl">
                Address:
                <div className="flex font-semibold text-xl pt-2 pl-5">
                  {medicalHistory.address}
                  {/* {medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].address} */}
                </div>
              </h1>
              <h1 className="flex font-bold text-2xl">
                Age:
                <div className="flex font-semibold text-xl pt-2 pl-5">
                  {calculateAge(medicalHistory.birthDate)}
                  {/* {calculateAge(medicalHistory.PatientDetails && medicalHistory.PatientDetails[0].birthDate)} */}
                </div>
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
                {/* {medicalHistory.map((entry) => (
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
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
