import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

/*
Default (mobile / <640px)
w-3/4 → 75% */
/*w-[30rem] => w-120 */
const CartDrawer = ({ drawerOpen, toogleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform
  transition-transform duration-300 flex flex-col z-50 ${
    drawerOpen ? "translate-x-0" : "translate-x-full"
  }`}
    >
      {/*Close Button */}
      <div className=" flex justify-end p-4">
        <button onClick={toogleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-black-500" />
        </button>
      </div>
      {/*Cart contents with scrollable area */}
      <div className="grow p-4  overflow-y-auto bg-pink-100">
        <h2 className="text-xl font-semibold mb-4 ">Your Cart</h2>
        {/*Component for Cart Contents */}
        <CartContents />
      </div>
      {/*Checkout */}
      <div className="p-4 bg-white sticky border-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping,taxes and discount codes caculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
/*drawerOpen and toogleCartDrawer is from the parent Navbar */
/*Only changes made through a parent’s state updater function (passed as a prop) are reflected in the parent component. */
/*Here the function is toogleCartDrawer */

/*flex-grow: 1 means take up the full space (grow) */
/*overflow-y: auto  Show a vertical scrollbar only when the content is taller than the container.*/

/*Inserting this in Navbar */
