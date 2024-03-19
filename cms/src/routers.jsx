import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Home from "./pages/home";
import PatientPage from "./pages/patient";
import Appointment from "./pages/appointment";
import DoctorDetail from "./pages/doctorDetail";
import PatientDetail from "./pages/patientDetail";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/doctors"),
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => localStorage.getItem("access_token") && redirect("/doctors"),
  },
  {
    loader: ()=>!localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/doctors",
            element: <Home />,
          },
          {
            path: "/doctors/:id",
            element: <DoctorDetail />,
          },
          {
            path: "/patients",
            element: <PatientPage />,
          },
          {
            path: "/patients/:id",
            element: <PatientDetail />,
          },
          {
            path: "/appointments",
            element: <Appointment />,
          },
        ]
      }
    ]
  }
]);

export default router