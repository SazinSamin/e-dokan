import React from "react";

const ProductComponent = ({ product }) => {
  console.log(product);

  return (
    <div className="flex flex-col flex-wrap">
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      
      <img className="w-32 h-32" src={product.image} alt={product.title} />
      <p>{product.rating.rate}</p>
    </div>
  );
};

export default ProductComponent;
