import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Menu from "./components/Menu";
import 'flowbite';
import Levels from "./pages/levels/Levels";



import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import GigCards from "./components/GigCards";

function App() {

  const Layout = () => {
    return (
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'gig/:id',
          element: <Gig />
        },
        {
          path: 'gig/4',
          element: <GigCards />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: 'message/:id',
          element: <Message />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/levels',
          element: <Levels />
        },
        {
          path: '*',
          element: <Navigate to='/' />
        }
      ]
      
    },
  ]);


  return (
      <RouterProvider router={router} />

  )
}

export default App
