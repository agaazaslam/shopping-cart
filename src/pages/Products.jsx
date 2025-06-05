import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { LoaderCircle } from "lucide-react";
function Products() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // using Context

  // Sample data to test Card Component

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        const url =
          "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20";

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`There was an error ${response.status}`);
        }

        const data = await response.json();
        const finalData = data.data.data;
        console.log(data);
        setData(finalData);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    const delay = setTimeout(fetchProducts, 2000);
    return () => clearTimeout(delay);
  }, []);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className=" text-red-400 w-24 h-24 " />
      </div>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mx-auto p-4 lg:max-w-7xl md:max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 p-4">
          {data.map((product) => (
            <Card product={product}></Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
