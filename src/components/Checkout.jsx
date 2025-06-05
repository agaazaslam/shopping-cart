import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <div class="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
      <ul class="text-slate-500 font-medium space-y-4">
        <li class="flex flex-wrap gap-4 text-sm">
          Subtotal{" "}
          <span class="ml-auto font-semibold text-slate-900">$200.00</span>
        </li>
        <li class="flex flex-wrap gap-4 text-sm">
          Shipping{" "}
          <span class="ml-auto font-semibold text-slate-900">$2.00</span>
        </li>
        <li class="flex flex-wrap gap-4 text-sm">
          Tax <span class="ml-auto font-semibold text-slate-900">$4.00</span>
        </li>
        <hr class="border-slate-300" />
        <li class="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
          Total <span class="ml-auto">$206.00</span>
        </li>
      </ul>
      <div class="mt-8 space-y-4">
        <button
          type="button"
          class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md cursor-pointer"
        >
          Buy Now
        </button>
        <Link to="/products">
          <button
            type="button"
            class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
      <div class="mt-5 flex flex-wrap justify-center gap-4">
        <img
          src="https://readymadeui.com/images/master.webp"
          alt="card1"
          class="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/visa.webp"
          alt="card2"
          class="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/american-express.webp"
          alt="card3"
          class="w-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Checkout;
