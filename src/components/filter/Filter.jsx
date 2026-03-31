import React from "react";
import { CartState } from "../context/Context";
import "./Filter.css";

function Filter() {
  const {
    productState: { byColour, byGender, byPrice, byType },
    productDispatch,
  } = CartState();
  console.log(byColour, byGender, byPrice, byType);

  return (
    <div className="filter">
      <span className="checkbox-btn">
        <p>Colour</p>
        <input
          type="checkbox"
          name="colour"
          value="Red"
          onChange={() =>
            productDispatch({
              type: "FILTER_COLOUR",
              payload: "colourRed",
            })
          }
          checked={byColour === "colourRed"}
        />
        <label>Red</label>
        <br />
        <input
          type="checkbox"
          name="colour"
          value="Blue"
          onChange={() =>
            productDispatch({
              type: "FILTER_COLOUR",
              payload: "colourBlue",
            })
          }
          checked={byColour === "colourBlue"}
        />
        <label>Blue</label>
        <br />
        <input
          type="checkbox"
          name="colour"
          value="Green"
          onChange={() =>
            productDispatch({
              type: "FILTER_COLOUR",
              payload: "colourGreen",
            })
          }
          checked={byColour === "colourGreen"}
        />
        <label>Green</label>
      </span>
      <span className="checkbox-btn">
        <p>Gender</p>
        <input
          type="checkbox"
          name="gender"
          value="Men"
          onChange={() =>
            productDispatch({
              type: "FILTER_GENDER",
              payload: "genderMen",
            })
          }
          checked={byGender === "genderMen" ? true : false}
        />
        <label>Men</label>
        <br />
        <input
          type="checkbox"
          name="gender"
          value="Women"
          onChange={() =>
            productDispatch({
              type: "FILTER_GENDER",
              payload: "genderWomen",
            })
          }
          checked={byGender === "genderWomen" ? true : false}
        />
        <label>Women</label>
      </span>
      <span className="checkbox-btn">
        <p>Price</p>
        <input
          type="checkbox"
          name="price"
          value="HTML"
          onChange={() =>
            productDispatch({
              type: "FILTER_PRICE",
              payload: "price250",
            })
          }
          checked={byPrice === "price250" ? true : false}
        />
        <label>0 - Rs250</label>
        <br />
        <input
          type="checkbox"
          name="price"
          value="CSS"
          onChange={() =>
            productDispatch({
              type: "FILTER_PRICE",
              payload: "priceTill250PriceTo450",
            })
          }
          checked={byPrice === "priceTill250PriceTo450" ? true : false}
        />
        <label>Rs250 - 450</label>
        <br />
        <input
          type="checkbox"
          name="price"
          value="JavaScript"
          onChange={() =>
            productDispatch({
              type: "FILTER_PRICE",
              payload: "price450",
            })
          }
          checked={byPrice === "price450" ? true : false}
        />
        <label>Rs450</label>
      </span>
      <span className="checkbox-btn">
        <p>Type</p>
        <input
          type="checkbox"
          name="type"
          value="Polo"
          onChange={() =>
            productDispatch({
              type: "FILTER_TYPE",
              payload: "typePolo",
            })
          }
          checked={byType === "typePolo" ? true : false}
        />
        <label>Polo</label>
        <br />
        <input
          type="checkbox"
          name="type"
          value="Hoodie"
          onChange={() =>
            productDispatch({
              type: "FILTER_TYPE",
              payload: "typeHoodie",
            })
          }
          checked={byType === "typeHoodie" ? true : false}
        />
        <label>Hoodie</label>
        <br />
        <input
          type="checkbox"
          name="type"
          value="Basic"
          onChange={() =>
            productDispatch({
              type: "FILTER_TYPE",
              payload: "typeBasic",
            })
          }
          checked={byType === "typeBasic" ? true : false}
        />
        <label>Basic</label>
      </span>
      <button
        className="clr-btn"
        onClick={() => {
          productDispatch({
            type: "CLEAR_FILTER",
          });
        }}
      >
        Clear Filter
      </button>
    </div>
  );
}

export default Filter;
