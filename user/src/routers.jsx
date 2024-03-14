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
        loader: () => localStorage.getItem("access_token") && redirect("/"),
    },
    {
        loader: () => !localStorage.getItem("access_token") && redirect("/login"),
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                ]
            }
        ]
    }
])

export default router