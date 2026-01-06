import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded-lg shadow-2xl overflow-hidden bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="py-4 px-3 text-center">
        <h2 className="text-xl font-semibold mb-2">
          {product.title.slice(0, 25)}
        </h2>
        <p className="text-gray-600 text-sm mb-3">
          {product.description.slice(0, 40)}
        </p>
        <p className="text-gray-500 text-xs mb-3">{product.category}</p>
        <h4 className="text-2xl font-bold text-green-600 mb-4">
          ${product.price}
        </h4>
        <button onClick={()=>navigate(`/products/${product.id}`)}
         className="mx-auto block bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
