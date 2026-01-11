import React from "react";
import Header from './../components/Common/Header';
import Footer from "../components/Common/Footer";
import Home from "../components/Layout/Home";
import { Outlet } from "react-router-dom";


const UserLayout = () => {
  return (
    <>
      {/*Header */}
      <Header />
      {/*Main content */}
      <main>
        <Outlet />
        {/*<Home/> */}
      </main>
      {/*Footer */}
      <Footer />
    </>
  );
};

export default UserLayout;


/*displayed from the route from App.jsx */