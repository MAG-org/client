import { Link, useNavigate } from "react-router-dom";
import SideBar from "./sideBar";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-gray-200 " style={{ backgroundColor: "#3436B7" }}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.freeiconspng.com/uploads/ambulance-cross-hospital-icon-11.png"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HospiCare
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => {
                localStorage.clear("accessToken");
                navigate("/login");
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <SideBar />
    </>
  );
}
