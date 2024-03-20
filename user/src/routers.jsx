import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DoctorPage from "./pages/doctor";
import AppointPage from "./pages/appoint";
import DoctorDetail from "./pages/doctorDetail";

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
      {
        path: "/doctors",
        element: <DoctorPage/>,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetail/>,
      },
      {
        path: "/appointments",
        element: <AppointPage/>,
      },
    ],
  },
]);

export default router;
