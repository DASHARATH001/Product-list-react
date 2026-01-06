import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const getProducts = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h2 className="text-center text-xl mt-20">Loading...</h2>;
  }

  return (
    <div className="flex flex-wrap mx-4">
      {products.map((item) => (
        <div key={item.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
