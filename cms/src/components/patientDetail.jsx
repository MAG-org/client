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
    // Add more sample medical history entries as needed
  ]);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <div className="flex justify-center items-center">
        <div className="w-3/4 shadow-xl rounded-2xl p-10 border ml-60">
          <div className="flex justify-around gap-11 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cHJvZmlsZXxlbnwwfDB8fHwxNzA2NzQ5NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
                className="rounded-2xl h-40 w-40"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
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
            <div>
              <h1 className="text-2xl font-bold">Medical History</h1>
            </div>
            <table className="border-collapse border border-gray-800 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-800 px-4 py-2">Date</th>
                  <th className="border border-gray-800 px-4 py-2">Time</th>
                  <th className="border border-gray-800 px-4 py-2">
                    Doctor's Name
                  </th>
                  <th className="border border-gray-800 px-4 py-2">
                    Diagnosis
                  </th>
                  <th className="border border-gray-800 px-4 py-2">
                    Prescription
                  </th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map((entry) => (
                  <tr key={entry.id}>
                    <td className="border border-gray-800 px-4 py-2">
                      {entry.date}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {entry.time}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {entry.doctorName}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {entry.diagnosis}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {entry.prescription}
                    </td>
                  </tr>
                ))}
                {medicalHistory.length === 0 && (
                  <tr>
                    <td
                      className="border border-gray-800 px-4 py-2"
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
