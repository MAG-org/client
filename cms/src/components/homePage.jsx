import React, { useState } from "react";

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
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
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
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.specialist}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
