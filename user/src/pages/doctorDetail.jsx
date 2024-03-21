import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScheduleRow from "../components/scheduleRow";

export default function DoctorDetail() {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/doctor/'+ id, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      setData(response.data)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <section className="mt-16 py-20 px-56 min-h-screen">
      <div className="flex gap-8 ">
        <div>
          <img src={data.imgUrl} alt="" className="w-64 h-64 object-fit rounded-lg shadow-lg" />
        </div>

        <div className=" w-3/6">
          <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
          <h2 className="text-2xl font-semibold">Specialist:</h2>
          <p className="text-xl">{data.specialize}</p>
          
          <h2 className="text-2xl font-semibold mt-4">About:</h2>
          <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum hic explicabo necessitatibus, nam debitis harum porro accusamus doloribus repudiandae non, adipisci cum! Corporis, praesentium tenetur possimus repellat laudantium facere?</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-12 border rounded-t-lg">
        <table className="table table-lg table-zebra">
          <thead>
            <tr className="bg-blue-600 rounded-md">
              <th colSpan={3}>
                <div className=" flex items-center justify-between">
                  <h1 className="text-xl text-white">Schedule</h1>
                  <Link to={'/booking/'+ data._id} className="btn btn-primary">Book Now</Link>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {
              data.schedule.map((item, index) => {
                return(
                  <ScheduleRow key={index} item={item}/>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </section>
  );
}
