import React, { useEffect, useState } from "react";
import { CartState } from "../../components/context/Context";
import "./Cart.css";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((a, b) => a + Number(b.price) * b.qty, 0));
  }, [cart]);

  return (
    <div>
      <h1>Cart Summary</h1>
      <div className="cart">
        <div className="summary">
          {cart.map((ele) => {
            return (
              <div className="cart-map" key={ele.id}>
                <div className="content">
                  <div className="cart-img">
                    <img src={ele.imageURL} alt={ele.name} />
                  </div>
                  <div className="metrics">
                    <div>
                      <p>{ele.name}</p>
                      <p>{ele.price}</p>
                    </div>
                    <div>
                      <select
                        className="quantity"
                        onChange={(e) =>
                          dispatch({
                            type: "QUANTITY_CHANGE",
                            payload: {
                              id: ele.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(ele.quantity).keys()].map((x) => (
                          <option value={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: ele,
                      });
                    }}
                    className="remove-from-cart-btn"
                  >
                    <b>Remove from Cart</b>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <p>Number Of Items : {cart.length}</p>
          <p>Total Price: Rs. {total}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
