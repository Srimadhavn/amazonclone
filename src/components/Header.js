import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    if (user) {
      dispatch({
        type: "SIGN_OUT_USER", 
      });
    }
  };

  return (
    <div className="header">
      <Link to="/" aria-label="Go to Home">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          aria-label="Search"
        />
        <SearchIcon className="header__searchIcon" aria-label="Search Icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/signin"} className="header__link" onClick={handleSignOut}>
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.name : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/prime" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon aria-label="Shopping Basket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
