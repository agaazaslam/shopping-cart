import { ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // use Cart Context
  const { handleTotalPrice } = useCart();

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">Fake Store </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            className="px-3 rounded-2xl hover:text-gray-300 hover:bg-blue-300"
            to="/"
          >
            Home
          </Link>

          <Link
            className="px-3 rounded-2xl hover:text-gray-300 hover:bg-blue-300"
            to="/products"
          >
            Products
          </Link>

          <Link
            className="px-3 rounded-2xl hover:text-gray-300 hover:bg-blue-300"
            to="/cart"
          >
            <CartIcon />
          </Link>
          <div className="px-2">{`$ ${handleTotalPrice()}`}</div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <a href="#" className="block hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block hover:text-gray-300">
            Products
          </a>
          <a href="#" className="block hover:text-gray-300">
            Cart
          </a>
          <a href="#" className="block hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
