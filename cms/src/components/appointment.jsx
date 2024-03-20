import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Appointment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [appointmentData, setAppointmentData] = useState([]);
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/appointment"
        );
        const appointments = response.data.map((appointment) => ({
          ...appointment,
          patientId: appointment.patientId,
        }));
        setAppointmentData(appointments);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };

    const fetchPatientData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/patient");
        setPatientData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientData();
    fetchAppointmentData();
  }, []);

  console.log(appointmentData);

  const getPatientName = (patientId) => {
    const patient = patientData.find((patient) => patient.id === patientId);
    return patient ? patient.name : "Unknown";
  };

  const filteredAppointmentData = appointmentData.filter((appointment) =>
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDayFromDate = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div
      className="flex-1"
      style={{ textAlign: "end", paddingTop: "50px", paddingLeft: "250px" }}>
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
              <td>{getPatientName(appointment.patientId)}</td>
              <td>{appointment.doctor}</td>
              <td>
                {getDayFromDate(appointment.date)}, {appointment.date}
              </td>
              <td>{appointment.time}</td>
              <td
                className={
                  appointment.status === "Paid"
                    ? "text-green-500 font-semibold"
                    : appointment.status === "Pending"
                    ? "text-red-500 font-semibold"
                    : ""
                }>
                {appointment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
