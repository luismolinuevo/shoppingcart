import { useState } from 'react'
import './App.css'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx"
import Layout from './componets/Layout';
import Cart from './pages/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <LandingPage/>
        },
        {
          path: "/cart",
          element: <Cart/>
        }

      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
