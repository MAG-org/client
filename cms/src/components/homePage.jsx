import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const patients = [
    { id: 1, name: "John Doe", specialist: "Cardiologist" },
    { id: 2, name: "Jane Doe", specialist: "Dermatologist" },
    { id: 3, name: "Alice Smith", specialist: "Neurologist" },
    { id: 4, name: "Bob Johnson", specialist: "Gastroenterologist" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.specialist.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                className="bg-white-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th style={{ fontSize: "20px" }}>No.</th>
              <th style={{ fontSize: "20px" }}>Name</th>
              <th style={{ fontSize: "20px" }}>Specialist</th>
              <th style={{ fontSize: "20px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data Pasien */}
            {filteredPatients.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialist}</td>
                <td>
                  <Link to={`/doctors/${doctor.id}`}>
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
    </div>
  );
}
