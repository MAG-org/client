import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DoctorPage from "./pages/doctor";
import AppointPage from "./pages/appoint";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Layout />,
    loader: () => !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        path: "/doctors",
        element: <DoctorPage />,
      },
      {
        path: "/appointments",
        element: <AppointPage />,
      },
    ],
  },
]);

export default router;
