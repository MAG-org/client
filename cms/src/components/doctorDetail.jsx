import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DoctorDetail() {
  const [doctorData, setDoctorData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/doctor/" + params.id
        );
        setDoctorData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctorData();
  }, [params.id]);

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
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <div className="flex justify-center items-center">
        <div className="w-3/4 shadow-xl rounded-2xl p-10 border ml-60">
          <div className="flex items-center">
            <div>
              <img
                src={doctorData.imgUrl}
                alt=""
                className="rounded-2xl h-40 w-40"
              />
            </div>
            <div className="flex flex-col gap-2 text-left ml-20">
              <h1 className="font-extrabold text-3xl">
                Name: {doctorData.name}
              </h1>
              <h1 className="font-semibold text-xl">
                Specialist: {doctorData.specialize}
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
            <div style={{ paddingBottom: "50px" }}>
              <h1 className="font-extrabold text-2xl">Schedule</h1>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {doctorData.schedule &&
                  doctorData.schedule.map((data, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{data.day}</td>
                      <td className="px-4 py-2">
                        {`${data.start}:00 - ${data.end}:00`}
                      </td>
                    </tr>
                  ))}
                {doctorData.schedule && doctorData.schedule.length === 0 && (
                  <tr>
                    <td className="px-4 py-2" colSpan="2">
                      No appointments scheduled
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
