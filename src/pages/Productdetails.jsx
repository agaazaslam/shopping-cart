import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useOutletContext } from "react-router-dom";

export default function Productdetails() {
  const context = useOutletContext();
  console.log(context);
  return (
    <div className="flex grow-3 justify-center items-center ">
      <div className="p-6 bg-sky-400 text-center">
        <h1 className="text-2xl">Product {context.id} details </h1>
      </div>
    </div>
  );
}
