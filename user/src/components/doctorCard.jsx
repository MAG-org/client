import { Link } from "react-router-dom";

export default function DoctorCard(props) {
  const {item} = props

  return (
    <>
      <div className="border border-1 rounded-lg overflow-hidden">
        <img
          className="w-80 h-80  object-fit"
          src={item.imgUrl}
          alt=""
        />
        <div className="p-4 ml-2 text-black">
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <p className="text-lg">{item.specialize}</p>

          <Link
            to={`/doctors/${item._id}`}
            className="btn btn-sm btn-primary mt-2 text-white bg-blue-500 border-none"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
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
    </>
  );
}
