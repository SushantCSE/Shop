import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function NewArrivals() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=4");
    const data = await res.json();
    // let slicedArr = data.products.slice(0, 4);
    setProducts(data.products);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-center font-black text-4xl">New Arrivals</h2>
      <div className="flex justify-center gap-4 px-24 my-8">
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border border-gray-200 rounded-xl p-2"
            >
              <img src={product.thumbnail} alt={product.title} />
              <p className="font-bold">{product.title}</p>
              <p>Rating : {product.rating} / 5</p>
              <p className="font-bold text-green-600">$ {product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default NewArrivals;