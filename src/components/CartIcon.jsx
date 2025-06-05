import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const { handleGetTotal } = useCart();

  const totalQuantity = handleGetTotal();

  return (
    <div className="relative w-fit">
      <ShoppingCart className="text-2xl" />

      {totalQuantity > 0 && (
        <span className="absolute -top-2.5 -right-0.5 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {totalQuantity}
        </span>
      )}
    </div>
  );
}
