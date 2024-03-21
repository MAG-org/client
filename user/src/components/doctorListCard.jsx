import { Link } from "react-router-dom"

export default function DoctorListCard(props) {
    const {item, loading} = props

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={item.imgUrl} alt="Movie" className="h-48 w-36 object-fit"/></figure>
                <div className="card-body">
                    <Link to={'/doctors/' + item._id} className="card-title text-2xl font-bold hover:text-blue-900">{item.name}</Link>
                    <p>{item.specialize}</p>
                    <div className="card-actions">
                    <Link to={'/booking/' + item._id} className="btn btn-primary">Book Appointment</Link>
                    </div>
                </div>
            </div>
        </>
    )
}