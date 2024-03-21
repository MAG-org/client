import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import ScheduleRow from "../components/scheduleRow";
import Swal from "sweetalert2";

export default function Booking() {
    const { id } = useParams()
    const [doctors, setDoctors] = useState({schedule: []})
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('')
    const [selectedDay, setSelectedDay] = useState(null)
    const [vaNumber, setVaNumber] = useState(null)

    useEffect(() => {
        setSelectedDay(getDayFromDate(startDate))
    }, [startDate])

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

    const generateSchedule = () => {
        // 
        const result = doctors.schedule.find(item => item.day === selectedDay)
        const schedules = []
        console.log(result, "<<<<<");

        if(!result){
            return schedules
        }

        const {start, end} = result

        for(let i=start; i<end; i++){
            schedules.push(i)
        }

        return schedules
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/doctor/'+ id, {
                headers: {
                'Access-Control-Allow-Origin': '*'
                }
            })

            setDoctors(response.data)
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleBooking = async (e) => {
        e.preventDefault()

        try {
            const requestBody = {
                doctorId: id,
                date: startDate,
                time: time
            }

            console.log(requestBody);

            const response = await axios.post('https://f374-139-228-111-126.ngrok-free.app/api/appointment/addappointment', requestBody, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            const {data} = response

            const {data: midtransData} = await axios.post('https://f374-139-228-111-126.ngrok-free.app/api/appointment/payment-charge/' + data._id, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            console.log(midtransData);

            const permataNumber = midtransData["permata_va_number"]

            setVaNumber(permataNumber)
            // Swal.fire({
            //     icon: "success",
            //     title: "Success...",
            //     text: "Booking Success",
            // });

            console.log(response);

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="mt-16 px-28 py-12 min-h-screen">
            <h1 className="text-3xl font-bold">Schedule Booking</h1>
            <p className="text-xl font-light">Arrange your appointment schedule with dr. John Doe</p>
            {
                vaNumber ? <h1 className="text-xl">Silahkan bayar ke no ini: {vaNumber}</h1> : <div className="grid grid-cols-2 gap-x-12 mt-5">
                <div>
                <div className="divider divider-primary">Select Schedule</div>
                    
                    <DatePicker
                        selected={startDate}
                        value={startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        // filterDate={isWeekday}
                        placeholderText="Jum'at 12 Februari 2023"
                        className="input w-[600px] border-gray-500 text-center font-bold cursor-pointer"
                    />

                    <h1 className="mt-4">Available Schedule</h1>
                    <form action="" onSubmit={handleBooking}>
                        <div className="flex flex-wrap gap-8 my-4">
                            {
                                generateSchedule().map(item => {
                                    return (
                                        <div className="p-2 border-blue-500 border w-fit rounded-md">
                                            <input
                                                type="radio"
                                                id="hour"
                                                name="timeSchedule"
                                                value={item}
                                                onChange={(e) => setTime(e.target.value)}
                                            />
                                            <label htmlFor="hour">{item}.00</label>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <input type="submit" className="btn btn-primary "/>
                    </form>
                </div> 

                <div className="border border-1 bg-base-100 p-8 rounded-lg">
                    <div className="flex mb-4 gap-x-4">

                        <img src={doctors?.imgUrl} alt="" className="h-36 w-36 object-fit rounded-sm"/>

                        <div>
                            <h1 className="font-bold text-2xl">{doctors?.name}</h1>
                            <p className="text-lg">Specialize: {doctors?.specialize}</p>
                        </div>
                    </div>

                    <table className="table table-xs border">
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-600 rounded-md">
                                <th colSpan={3}>
                                    <div className=" flex items-center justify-between">
                                        <h1 className="text-lg text-white">Schedule</h1>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                doctors?.schedule.map((item, index) => {
                                    return(
                                        <ScheduleRow key={index} item={item}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            }
           
        </section>
    );
}