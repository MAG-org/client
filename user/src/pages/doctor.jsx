import { useEffect, useState } from "react";
import axios from "axios";
import DoctorListCard from "../components/doctorListCard.jsx";

export default function Doctor() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/doctor')

      console.log(response.data);
      setDoctors(response.data)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <section className="mt-16 px-28 border border-red-500 min-h-screen p-12">
      <div className="bg-white p-8 shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
        <p className="text-lg mb-2">Discover doctor schedules, make appointments, or schedule consultations with experienced specialists or general practitioners</p>
        <p className="text-sm font-light">*The doctor's schedule may change at any time. For further information, please contact the Call Center at 150442 or make an online reservation</p>

        <div className="mt-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Doctor's Name</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500 focus:ring-none" />
          </label>
        </div>

        <div className="grid grid-cols-3 gap-4 items-end">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Schedule Days</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500" />
            </label>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Specialize</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500" />
            </label>
          </div>

          <div>
            <button className="btn btn-sm btn-primary w-full">Search</button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8">
        {
          doctors.map((item, index) => {
            return <DoctorListCard key={index} item={item} loading={loading}/>
          })
        }
      </div>
    </section>
  );
}
