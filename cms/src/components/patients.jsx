import React from "react";

export default function Patients() {
  // Data pasien
  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Smith" },
    { id: 4, name: "Bob Johnson" },
  ];

  return (
    <div
      className="flex-1 overflow-x-auto"
      style={{ textAlign: "end", paddingTop: "50px", paddingLeft: "250px" }}
    >
      <table className="table">
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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>
                <button className="btn btn-ghost btn-xs">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
