import React, { createContext, useEffect, useReducer, useContext } from "react";
import { cartReducer, productReducer } from "./Reducer";

const initialState = {
  getData: [],
  cart: [],
};

const Cart = createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const [productState, productDispatch] = useReducer(productReducer, {
    byColour: false,
    byGender: false,
    byPrice: false,
    byType: false,
    search: "",
  });

  const allData = () =>
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({
          type: "SET_DATA",
          payload: {
            getData: data,
          },
        });
      })
      .catch((err) => console.error(err));

  useEffect(() => {
    allData();
  }, []);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
