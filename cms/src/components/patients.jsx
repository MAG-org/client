import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Patients() {
  // Data pasien
  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Smith" },
    { id: 4, name: "Bob Johnson" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                className="bg-white-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <table className="table" style={{ textAlign: "center", paddingTop: "50px"}}>
        {/* head */}
        <thead>
          <tr>
            <th style={{ fontSize: "20px" }}>No.</th>
            <th style={{ fontSize: "20px" }}>Name</th>
            <th style={{ fontSize: "20px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Data Pasien */}
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>
              <Link to={`/patients/${patient.id}`}>
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View</button>
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
