import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow justify-center items-center ">
        <div className="p-6 bg-sky-400 text-center">
          <h1 className="text-2xl">Cart Page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
