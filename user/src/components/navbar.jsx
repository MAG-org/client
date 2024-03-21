import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cek apakah access_token ada di local storage
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Hapus access_token dari local storage dan ubah state isLoggedIn menjadi false
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-16">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
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
          {isLoggedIn ? (


            <button
              onClick={handleLogout}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 rounded ${
                  location.pathname === "/" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                } md:bg-transparent md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                className={`block py-2 px-3 md:p-0 rounded ${
                  location.pathname === "/doctors" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                } md:bg-transparent md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Find Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/appointments"
                className={`block py-2 px-3 md:p-0 rounded ${
                  location.pathname === "/appointments" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                } md:bg-transparent md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                My Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="navbar bg-gray-900 fixed top-0 left-0 right-0 z-50">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //       </div>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
    //         <li><a className="text-blue-700">Item 1</a></li>
    //         <li>
    //           <a className="text-blue-700">Parent</a>
    //           <ul className="p-2">
    //             <li><a className="text-blue-700">Submenu 1</a></li>
    //             <li><a>Submenu 2</a></li>
    //           </ul>
    //         </li>
    //         <li><a>Item 3</a></li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li><a>Item 1</a></li>
    //       <li>
    //         <details>
    //           <summary>Parent</summary>
    //           <ul className="p-2">
    //             <li><a>Submenu 1</a></li>
    //             <li><a>Submenu 2</a></li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li><a>Item 3</a></li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    // </div>
  );
}
