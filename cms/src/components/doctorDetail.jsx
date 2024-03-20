import React, { useState } from "react";

export default function DoctorDetail() {
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2024-03-21", time: "10:00 AM" },
    { id: 2, date: "2024-03-22", time: "11:00 AM" },
  ]);

  const getDayFromDate = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <div className="flex justify-center items-center">
        <div className="w-3/4 shadow-xl rounded-2xl p-10 border ml-60">
          <div className="flex items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cHJvZmlsZXxlbnwwfDB8fHwxNzA2NzQ5NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
                className="rounded-2xl h-40 w-40"
              />
            </div>
            <div className="flex flex-col gap-2 text-left ml-20">
              <h1 className="font-extrabold text-3xl">Name:</h1>
              <h1 className="font-semibold text-xl">Specialist:</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
            <div style={{ paddingBottom: "50px" }}>
              <h1 className="font-extrabold text-2xl">Schedule</h1>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-4 py-2">
                      {getDayFromDate(appointment.date)}
                    </td>
                    <td className="px-4 py-2">
                      {appointment.time}
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td
                      className="px-4 py-2"
                      colSpan="2">
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
