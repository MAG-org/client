import React, { useState } from "react";

export default function Appointment() {
  const [searchTerm, setSearchTerm] = useState("");

  const appointmentData = [
    {
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      date: "2024-03-10",
      time: "10:00 AM",
      status: "Paid",
    },
    {
      patientName: "Jane Doe",
      doctorName: "Dr. Johnson",
      date: "2024-03-15",
      time: "02:30 PM",
      status: "Pending",
    },
    {
      patientName: "Alice Smith",
      doctorName: "Dr. Brown",
      date: "2024-03-20",
      time: "11:15 AM",
      status: "Pending",
    },
  ];

  const filteredAppointmentData = appointmentData.filter(
    (appointment) =>
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDayFromDate = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="flex-1" style={{ textAlign: "end", paddingTop: "50px", paddingLeft: "250px" }}>
      <div style={{ textAlign: "center" }}>
        <form className="max-w-lg mx-auto">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="bg-black hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <table className="table margin-auto">
        <thead>
          <tr>
            <th style={{ fontSize: "20px" }}>Patient Name</th>
            <th style={{ fontSize: "20px" }}>Doctor Name</th>
            <th style={{ fontSize: "20px" }}>Date</th>
            <th style={{ fontSize: "20px" }}>Time</th>
            <th style={{ fontSize: "20px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointmentData.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{getDayFromDate(appointment.date)}</td>
              <td>{appointment.time}</td>
              <td className={appointment.status === "Paid" ? "text-green-500 font-semibold" : appointment.status === "Pending" ? "text-red-500 font-semibold" : ""}>
                {appointment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
