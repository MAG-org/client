import * as React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';


export const router = createBrowserRouter([
    {
      path: "/",
      loader: () => redirect("/login"),  
    }
])