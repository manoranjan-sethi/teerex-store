import React from "react";
import "./Navbar.css";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const {
    state: { cart },
  } = CartState();
  return (
    <nav className="navbar">
      <div>
        <h1>Mano-TeeRex Store</h1>
      </div>
      <div className="nav-prod-flex">
        <Link to="/">
          <h2 className="prod">Products</h2>
        </Link>
        <Link to="/cart">
          <div className="nav-cart-flex">
            <img
              className="cart-icon"
              src="https://th.bing.com/th/id/OIP.bCF5V06G_WRqoVs2CYeICwAAAA?pid=ImgDet&rs=1"
              alt="cart"
            />
            <p>{cart.length}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
