import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./pages/UserLayout";
import Home from "./components/Layout/Home";
import { Toaster } from "sonner";
const App = () => {
  const router = createBrowserRouter([
    {
      /*User Layout */
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      /*Admin Layout */
      path: "",
      element: "",
    },
  ]);
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

/*Enabling client-side routing  createBrowserRouter */
