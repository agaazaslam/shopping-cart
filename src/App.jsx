import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar></Navbar>
        <main className="flex-grow bg-black"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
