import React from 'react'
import { Link } from 'react-router-dom';

const NewArrivals = () => {

    async function fetchdata() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();   
            
            console.log(data);
            setProducts(data.products);
        }
        useEffect(() => {
            fetchdata();
        }, []);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">New Arrivals</h2>
      <div>
        {products.map((product) => {
            return (
                <Link to={`/product/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.rating}</p>
                    <p>{product.price}</p>
                </Link>
            );
        })}
      </div>
    </div>
  )
}

export default NewArrivals;
