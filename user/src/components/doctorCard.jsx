import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function DoctorCard() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token"); // Retrieve access token

    const fetchData = async () => {
      try {
        const response = await axios.get("URL_ENDPOINT_DOKTER", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        setLoading(false); // Set loading to false in case of error
      }
    };

    if (accessToken) {
      fetchData();
    } else {
      setLoading(false); // Set loading to false if no access token available
    }
  }, []); // Depend on an empty array to run only once when component mounts

  // If no access token, limit cards to 5
  const limitedDoctors = doctors.slice(0, 5);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {limitedDoctors.length > 0 ? (
        limitedDoctors.map((doctor, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/doctor/${doctor.id}`}>
              <img
                className="rounded-t-lg"
                src={doctor.image}
                alt={doctor.name}
              />
            </Link>
            <div className="p-5">
              <Link to={`/doctor/${doctor.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {doctor.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {doctor.specialization}
              </p>
              <Link
                to={`/doctor/${doctor.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
}
