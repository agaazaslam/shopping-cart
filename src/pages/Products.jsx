import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow justify-center items-center bg-slate-400">
        <div className="bg-green-300 rounded-2xl p-6 ">
          <h1>Products</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
