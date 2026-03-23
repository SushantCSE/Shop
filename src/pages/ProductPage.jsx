import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams();

  async function getProduct() {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();   
            console.log(data);
  }

  useEffect(() => {
    getProduct();
  }, []);
  
  return (
    <div>
        ProductPage and product id is {id}
    </div>
  )
}

export default ProductPage;
