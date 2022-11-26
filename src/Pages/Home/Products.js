import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Drill from "../../images/card-img/drill.jpg";

import Cutter from "../../images/card-img/cutter.jpg";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center mt-6 text-blue-500 font-bold mb-4 text-3xl">
          Here is The Best Electric Tools For You
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
