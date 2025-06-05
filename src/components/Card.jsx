import { useState } from "react";
import { useCart } from "../context/CartContext";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Add context for cart
  const { cart, handleAddToCart } = useCart();

  const handleAdd = () => {
    const item = { ...product, quantity: quantity };
    handleAddToCart(item);
  };

  return (
    <div className=" rounded-2xl border-5 border-black flex flex-col text-black shadow-2xl ">
      <img
        className="border-b-4 border-black p-2 aspect-square object-contain bg-white rounded-t-2xl"
        src={product.thumbnail1}
        alt={product.title}
      />

      <div className="p-4 space-y-2">
        <h1 className="text-xl line-clamp-1 font-bold">{product.title}</h1>
        <div className="flex justify-between align-center">
          <h2 className="text-lg font-medium text-gray-800">
            ${product.price}
          </h2>
          <div className="flex items-center text-black">
            <button
              onClick={() => setQuantity((prev) => prev - 1)}
              className="p-1 px-2 bg-black text-white rounded-l-xl border border-black text-sm sm:text-base"
            >
              -
            </button>
            <input
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              type="number"
              value={quantity}
              className="w-6 sm:w-10 p-1  border-y border-black focus:outline-none text-sm sm:text-base text-center"
              min="1"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-1 px-2 bg-black text-white rounded-r-xl border border-black text-sm sm:text-base"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
