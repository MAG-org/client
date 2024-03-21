import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/doctorCard";

export default function Home() {
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
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="mt-16">
      <div className="grid grid-cols-2 justify-between items-center gap-12 px-20 w-full bg-blue-200">
        <div className="text-justify text-black">
          <h1 className="text-6xl font-bold">Providing Exceptional Care and Excellence in Healthcare</h1>
          <p className="text-xl my-5">Welcome to Hospicare, where we prioritize your health and well-being with a dedicated team of medical professionals and state-of-the-art facilities. we are commited to delivering the highest standard of care.</p>
          <button className="btn btn-outline btn-lg btn-primary">Learn More</button>
        </div>

        <div className="">
          <img className="" src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856940m4nhi.png" alt="" />
        </div>
      </div>

      <div className="px-20 mt-12">
        <h1 className="text-4xl text-center font-bold text-black">Discover Our Comperhensive <br /> Range of Health Service</h1>

        <div className="grid grid-cols-3 gap-x-8 justify-center place-items-center mt-12">
          <div className="">
            <img className="w-full h-80 object-cover" src="https://i.pinimg.com/564x/0f/75/62/0f756233118f3c85f314282675b20d18.jpg" alt="" />
            <h1 className="text-center text-lg my-2 font-semibold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus!</p>
          </div>

          <div>
            <img className="w-full h-80 object-cover" src="https://i.pinimg.com/564x/94/28/b4/9428b45607fe613d62c6f61b2d118e2e.jpg" alt="" />
            <h1 className="text-center text-lg my-2 font-semibold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus!</p>
          </div>

          <div>
            <img className="w-full h-80 object-cover" src="https://i.pinimg.com/564x/64/1c/ac/641cac9f98694e52723708948353b2f9.jpg" alt="" />
            <h1 className="text-center text-lg my-2 font-semibold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus!</p>
          </div>
        </div>

        <section>
          <h1 className="text-4xl font-bold text-center mt-12 text-bold">Meet Our Team</h1>
          <p className="text-lg text-center mb-12 mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt cumque quasi in alias ad molestias quos, nemo magnam ipsam quam.</p>

          <div className="grid grid-cols-4 place-items-center gap-4">
            {
              doctors.map((item, index) => {
                return <DoctorCard key={index} item={item}/>
              })
            }
            <div className="border border-1 rounded-lg overflow-hidden">
              <img className="w-80 h-80  object-fit" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9zcGl0YWx8fHx8fHwxNzEwODM5ODkw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
              <div className="p-4 ml-2 text-black">
                <h1 className="text-2xl font-semibold">dr. John Doe</h1>
                <p className="text-lg">Dokter Umum</p>

                <Link to={`/doctors/`} className="btn btn-sm btn-primary mt-2 text-white bg-blue-500 border-none">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-12">
            <Link to={'/doctors'} className="btn btn-primary px-10">See More</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
