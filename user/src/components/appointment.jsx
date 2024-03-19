import React, { useState } from "react";

export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Simpan informasi pengguna yang login

  // Fungsi untuk menambahkan janji temu baru
  const handleAddAppointment = () => {
    if (!currentUser) {
      // Jika tidak ada pengguna yang login, tampilkan pesan kesalahan atau arahkan ke halaman login
      alert("Please login to make an appointment");
      return;
    }

    const newAppointment = {
      doctor_name: "Dr. John Doe",
      patient_detail: `Name: ${currentUser.name}, Age: ${currentUser.age}`, // Isi patient_detail berdasarkan informasi pengguna yang login
      date: new Date().toLocaleString()
    };

    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Appointment</h1>
      {currentUser ? (
        // Tampilkan tombol untuk menambah janji temu jika pengguna sudah login
        <button onClick={handleAddAppointment}>Add Appointment</button>
      ) : (
        // Tampilkan pesan untuk login jika pengguna belum login
        <p>Please login to make an appointment</p>
      )}
      <div style={{ marginTop: "20px" }}>
        {appointments.map((appointment, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3>Appointment {index + 1}</h3>
            <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
            <p><strong>Patient:</strong> {appointment.patient_detail}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
