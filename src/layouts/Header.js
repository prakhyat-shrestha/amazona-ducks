import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { itemTotal } from "../utils/cartHelpers";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <Link to="/">
          <img
            src="../images/logo-camerapasal.svg"
            className="w-44"
            alt="logo"
          />
        </Link>
        {/* search bar */}
        <SearchBar />
        {/* icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="far fa-heart" />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </Link>
          <Link
            to="/cart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fas fa-shopping-bag" />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {itemTotal()}
            </span>
          </Link>
          <Link
            to="/"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="far fa-user" />
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
