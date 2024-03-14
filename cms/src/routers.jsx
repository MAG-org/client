import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login"),
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
          // {
          //   path: "/patients",
          //   element: <Patients />,
          // },
          // {
          //   path: "/add-patients",
          //   element: <Add-Patient />,
          // },
        ]
      }
    ]
  }
]);

export default router