import React from "react";
import "./Home.css";
import { CartState } from "../../components/context/Context";
import Filter from "./../../components/filter/Filter";
import SingleProduct from "./../../components/singleProduct/SingleProduct";
import Search from "./../../components/search/Search";

function Home() {
  const {
    state: { getData },
    productState: { byColour, byGender, byPrice, byType, search },
  } = CartState();

  const productsForm = () => {
    let products = getData;

    if (byColour === "colourRed") {
      products = products.filter((ele) => ele.color === "Red");
    }
    if (byColour === "colourBlue") {
      products = products.filter((ele) => ele.color === "Blue");
    }
    if (byColour === "colourGreen") {
      products = products.filter((ele) => ele.color === "Green");
    }

    if (byGender === "genderMen") {
      products = products.filter((ele) => ele.gender === "Men");
    }
    if (byGender === "genderWomen") {
      products = products.filter((ele) => ele.gender === "Women");
    }

    if (byType === "typePolo") {
      products = products.filter((ele) => ele.type === "Polo");
    }
    if (byType === "typeHoodie") {
      products = products.filter((ele) => ele.type === "Hoodie");
    }
    if (byType === "typeBasic") {
      products = products.filter((ele) => ele.type === "Basic");
    }

    if (byPrice === "price250") {
      products = products.filter((ele) => ele.price <= 250);
    }
    if (byPrice === "priceTill250PriceTo450") {
      products = products.filter((ele) => ele.price > 250 && ele.price < 450);
    }
    if (byPrice === "price450") {
      products = products.filter((ele) => ele.price >= 450);
    }

    if (search) {
      products = products.filter((ele) =>
        ele.name.toLowerCase().includes(search)
      );
    }
    return products;
  };

  return (
    <div>
      <div className="search-bar">
        <Search />
      </div>
      <div className="home">
        <Filter />
        <div className="products-container">
          {productsForm().map((ele) => {
            return <SingleProduct ele={ele} key={ele.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
