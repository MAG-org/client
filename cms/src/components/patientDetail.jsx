import React, { useState } from "react";

export default function PatientDetail() {
  const [patientData, setPatientData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    age: 30,
  });

  const [medicalHistory, setMedicalHistory] = useState([
    {
      id: 1,
      date: "2024-03-21",
      time: "10:00 AM",
      doctorName: "Dr. Smith",
      diagnosis: "Fever",
      prescription: "Paracetamol",
    },
    {
      id: 2,
      date: "2024-03-21",
      time: "11:00 AM",
      doctorName: "Dr. Johnson",
      diagnosis: "Sore Throat",
      prescription: "Antibiotics",
    },
  ]);

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
                Phone: {patientData.phone}
              </h1>
              <h1 className="font-semibold text-xl">
                Address: {patientData.address}
              </h1>
              <h1 className="font-semibold text-xl">Age: {patientData.age}</h1>
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
                  <th className="px-4 py-2">
                    Doctor's Name
                  </th>
                  <th className=" py-2">
                    Diagnosis
                  </th>
                  <th className="px-4 py-2">
                    Prescription
                  </th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-4 py-2">
                      {entry.date}
                    </td>
                    <td className="px-4 py-2">
                      {entry.time}
                    </td>
                    <td className="px-4 py-2">
                      {entry.doctorName}
                    </td>
                    <td className="px-4 py-2">
                      {entry.diagnosis}
                    </td>
                    <td className="px-4 py-2">
                      {entry.prescription}
                    </td>
                  </tr>
                ))}
                {medicalHistory.length === 0 && (
                  <tr>
                    <td
                      className="px-4 py-2"
                      colSpan="6">
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
