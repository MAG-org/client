import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/doctor");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialize.toLowerCase().includes(searchTerm.toLowerCase())
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
                className="bg-black hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <table className="table margin-auto">
          {/* head */}
          <thead>
            <tr>
              <th style={{ fontSize: "20px" }}>ID</th>
              <th style={{ fontSize: "20px" }}>Name</th>
              <th style={{ fontSize: "20px" }}>Specialist</th>
              <th style={{ fontSize: "20px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data Pasien */}
            {filteredDoctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor._id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialize}</td>
                <td>
                  <Link to={`/doctors/${doctor._id}`}>
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
