import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

const CartCard = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div class="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
      <div class="flex gap-6 sm:gap-4 max-sm:flex-col">
        <div class="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
          <img src={cartItem.images[1]} class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-sm sm:text-base font-semibold text-slate-900">
              {cartItem.title}
            </h3>
          </div>
          <div class="mt-auto">
            <h3 class="text-sm font-semibold text-slate-900">
              {cartItem.price}
            </h3>
          </div>
        </div>
      </div>

      <div class="ml-auto flex flex-col">
        <div class="flex items-start gap-4 justify-end">
          <Trash2 className="text-slate-400 hover:text-red-600" />
        </div>

        <div class="flex items-center gap-3 mt-auto">
          <button
            type="button"
            class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full"
          >
            {/* MINUS SVG  */}
            <Minus className="w-2 text-white" />
          </button>

          {/* Increase Decrease Item  */}
          <span class="font-semibold text-base leading-[18px]">
            {cartItem.quantity}
          </span>

          <button
            type="button"
            class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full"
          >
            <Plus className="w-2 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
