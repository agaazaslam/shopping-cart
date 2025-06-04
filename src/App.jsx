import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar></Navbar>
        <main className="flex-grow flex items-center justify-center ">
          <h1 className="text-5xl font-bold">
            {" "}
            Home Screen Of The Fake Store App{" "}
          </h1>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
