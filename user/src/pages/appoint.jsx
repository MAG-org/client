import axios from "axios";
import { useEffect, useState } from "react";

export default function Appoint() {
  const [appointment, setAppointment] = useState([])

  const fetchData = async () => {
    try {

      const response = await axios.get('http://localhost:3000/api/appointment/patient', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        } 
      })

      console.log(response.data);
      setAppointment(response.data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <section className="mt-16 px-20 p-12 min-h-screen">
      <h1 className="text-3xl font-bold">My Appointment History</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra mt-8">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg text-black">Doctor Name</th>
              <th className="text-lg text-black">Date</th>
              <th className="text-lg text-black">Time</th>
              <th className="text-lg text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              appointment.map((item, index) => {
                return (<tr>
                  <th>{index+1}</th>
                  <td>{item.DoctorDetail[0].name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}:00</td>
                  <td>{item.status}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}
