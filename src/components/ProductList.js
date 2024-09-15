import React from "react";
import Product from "./Product";

const ProductList = ({ title, products }) => (
  <div className="home__twoSectionsItem">
    <h2>{title}</h2>
    <div className="home__row">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
