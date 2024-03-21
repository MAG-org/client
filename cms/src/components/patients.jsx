import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/patient");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPatients([]);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name &&
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div
      className="flex-1 overflow-x-auto"
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
      <table
        className="table margin-auto"
        style={{ textAlign: "center", paddingTop: "50px" }}>
        {/* head */}
        <thead>
          <tr>
            <th style={{ fontSize: "20px" }}>Name</th>
            <th style={{ fontSize: "20px" }}>Email</th>
            <th style={{ fontSize: "20px" }}>Age</th>
            <th style={{ fontSize: "20px" }}>Phone Number</th>
            <th style={{ fontSize: "20px" }}>Gender</th>
            <th style={{ fontSize: "20px" }}>Address</th>
            <th style={{ fontSize: "20px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Data Pasien */}
          {filteredPatients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{calculateAge(patient.birthDate)}</td>
              <td>{patient.phoneNumber}</td>
              <td>{patient.gender}</td>
              <td>{patient.address}</td>
              <td>
                <Link to={`/patients/${patient._id}`}>
                  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
