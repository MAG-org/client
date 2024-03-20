import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DoctorCard from "./doctorCard";
import Slider from "./slider";
import Swal from "sweetalert2";
import axios from "axios";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/doctor", {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

      setDoctors(response.data);
      setLoading(false);

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data.message,
      });
      setLoading(false); // Set loading to false in case of error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Slider/>

      <div className="py-12 w-full border border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why Us?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              aperiam voluptates iure sit fugiat excepturi cumque, harum ut!
              Laborum, adipisci.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Why Us Cards */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Quality Care
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We provide top-notch medical care to our patients.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Experienced Staff
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Our staff members are highly experienced and skilled.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    State-of-the-art Facilities
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We have modern facilities equipped with the latest
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Meet Our Doctor</h1>
        </div>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center">
          {
            doctors.map((item, index) => {
              return <DoctorCard key={index} item={item} loading={loading}/>
            })
          }
        </div>
      </div>
    </div>
  );
}
