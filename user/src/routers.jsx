import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
    loader: () => !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/doctors",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
