import React, { useState } from "react";
import DoctorCard from "./doctorCard";

export default function ListDoctor() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="text-center pt-10">
      <h1 className="text-3xl font-bold mb-5">List Doctor</h1>
      <input
        type="text"
        placeholder="Search Doctor"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 px-4 py-2 rounded-md mb-5"
      />
      <DoctorCard searchTerm={searchTerm} />
    </div>
  );
}
