import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

function Products() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const product1 = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail1: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  };

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
    fetchProducts();
  }, []);

  if (loading) return <p>Loading... </p>;
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
