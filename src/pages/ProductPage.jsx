import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({}); // null or {}
  async function getProduct() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    console.log(data); // {}
    setProduct(data);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="px-24 my-10">
      <div className="flex justify-between gap-8">
        <div className="w-1/3 bg-gray-100 rounded-2xl flex items-center justify-center">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="w-2/3 space-y-4">
          <p className="text-4xl font-bold ">{product.title}</p>
          <p>Rating : {product.rating} / 5</p>
          <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold ">${product.price}</p>
            <p className="bg-red-200 rounded-2xl p-1 text-red-500">
              {product.discountPercentage}%
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
