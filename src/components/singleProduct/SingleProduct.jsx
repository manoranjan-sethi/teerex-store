import React from "react";
import { CartState } from "../context/Context";
import "./SingleProduct.css";

function SingleProduct({ ele }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart);

  return (
    <div className="product">
      <div className="img-div">
        <img src={ele.imageURL} alt={ele.name} />
      </div>
      <div className="p-div">
        <p>{ele.name}</p>
        <p>Rs. {ele.price}</p>
      </div>
      <div className="btn-div">
        {cart.some((el) => el.id === ele.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: ele,
              });
            }}
            className="remove-from-cart"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: ele,
              });
            }}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
