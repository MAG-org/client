import React, { useState } from "react";

export default function DoctorDetail() {
  // Sample data for demonstration
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2024-03-21", time: "10:00 AM", patientName: "John Doe" },
    { id: 2, date: "2024-03-21", time: "11:00 AM", patientName: "Jane Doe" },
    // Add more sample appointments as needed
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
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-3xl">Name:</h1>
              <h1 className="font-semibold text-xl">Specialist:</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
            <div>
              <h1 className="font-extrabold text-2xl">Schedule</h1>
            </div>
            <table className="border-collapse border border-gray-800 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-800 px-4 py-2">Date</th>
                  <th className="border border-gray-800 px-4 py-2">Time</th>
                  <th className="border border-gray-800 px-4 py-2">
                    Patient Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="border border-gray-800 px-4 py-2">
                      {appointment.date}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {appointment.time}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {appointment.patientName}
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td
                      className="border border-gray-800 px-4 py-2"
                      colSpan="3">
                      No appointments scheduled
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
