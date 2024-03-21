import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DoctorPage from "./pages/doctor";
import AppointPage from "./pages/appoint";
import DoctorDetail from "./pages/doctorDetail";
import Booking from "./pages/booking";
import Appoint from "./pages/appoint";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    loader: () => localStorage.getItem("accessToken") && redirect("/")
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => localStorage.getItem("accessToken") && redirect("/"),
  },
  {
    element: <Layout/>,
    path: '',
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
  {
    element: <Layout />,
    loader: () => !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        path: "/doctors",
        element: <DoctorPage/>,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetail/>,
      },
      {
        path: '/booking/:id',
        element: <Booking/>,
        loader: async () => {
          if(!localStorage.getItem('accessToken')){
            throw redirect("/login")
          }

          return null
        }
      },
      {
        path: "/appointments",
        element: <Appoint/>,
        loader: async () => {
          if(!localStorage.getItem('accessToken')){
            throw redirect("/login")
          }

          return null
        }
      },
    ],
  },
]);

export default router;
