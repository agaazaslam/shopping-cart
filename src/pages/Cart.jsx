import Card from "../components/Card";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
function Cart() {
  const { cart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div class="flex-grow max-w-5xl max-lg:max-w-2xl mx-auto p-4">
        <h1 class="text-xl font-semibold text-slate-900">Shopping Cart</h1>

        <div class="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
          <div class="lg:col-span-2 space-y-6">
            {cart.length > 0 ? (
              cart.map((cartItem) => <CartCard cartItem={cartItem} />)
            ) : (
              <p>your cart is empty </p>
            )}
          </div>
          <Checkout />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
