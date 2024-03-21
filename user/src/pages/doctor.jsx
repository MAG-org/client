import { useEffect, useState } from "react";
import axios from "axios";
import DoctorListCard from "../components/doctorListCard.jsx";

export default function Doctor() {
  const [doctors, setDoctors] = useState([])
  const [search, setSearch] = useState({
    name: "",
    schedule: "",
    specialize: ""
  })
  
  const [loading, setLoading] = useState(true)

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      fetchData()
      
    } catch (error) {
      console.log(error);
    }

  }


  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/doctor/search?name=${search.name}&schedule=${search.schedule}&specialize=${search.specialize}`)

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
    <section className="mt-16 px-28 p-12">
      <form className="bg-white p-8 shadow-2xl rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
        <p className="text-lg mb-2">Discover doctor schedules, make appointments, or schedule consultations with experienced specialists or general practitioners</p>
        <p className="text-sm font-light">*The doctor's schedule may change at any time. For further information, please contact the Call Center at 150442 or make an online reservation</p>

        <div className="mt-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Doctor's Name</span>
            </div>
            <input type="text" name="name" value={search.name} onChange={handleChangeInput} placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500 focus:ring-none" />
          </label>
        </div>
{/* 
        value={loginInput.password}
              onChange={handleChangeInput} */}

        <div className="grid grid-cols-3 gap-4 items-end">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Schedule Days</span>
              </div>
              <input type="text" name="schedule" value={search.schedule} onChange={handleChangeInput} placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500" />
            </label>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Specialist</span>
              </div>
              <input type="text" name="specialize" value={search.specialize} onChange={handleChangeInput} placeholder="Type here" className="input input-sm input-bordered w-full focus:border-blue-500" />
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-sm btn-primary w-full">Search</button>
          </div>
        </div>
      </form>

      {
        loading ? <h1 className="text-2xl text-center mt-4"><span className="loading loading-dots loading-lg"></span></h1> : <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8">
        {
          doctors.map((item, index) => {
            return <DoctorListCard key={index} item={item} loading={loading}/>
          })
        }
      </div>
      }
      
    </section>
  );
}
