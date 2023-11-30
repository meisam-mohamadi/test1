import React from "react";

const ProductCard = (props) => {
  console.log(product);
  return (
    <div onClick={alert("hohohohoho")}>
      <h1 className="product_name">{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  );
};

export default ProductCard;
