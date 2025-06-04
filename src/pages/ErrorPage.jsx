import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  flex flex-col ">
      <Navbar />
      <div className="text-5xl text-red-900 font-bold flex flex-grow justify-center items-center  ">
        ErrorPage
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
