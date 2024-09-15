import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },  
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${id}-${i}`}>⭐</p>  
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
