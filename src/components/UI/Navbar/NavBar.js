import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Heart from "../icons/Heart";
import ShoppingCart from "../icons/ShoppingCart";
import SearchButton from "./SearchButton";
const NavBar = () => {
  return (
    <nav
      className="nav  font-bold flex flex-wrap items-center border-b-2
    justify-between px-4"
    >
      <div className="flex flex-no-shrink w-1/6 items-center mr-6 py-3 text-grey-darkest">
        <img alt="logo" src="/logo.png" />
      </div>
      <div className="inline-flex flex-no-wrap m-0 w-1/2">
        <SearchButton />
      </div>
      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset
       m-0 pt-4 w-full md:w-auto">
        <li className="border-t md:border-none">
          <Link to="/login">
            <span className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              ورود / ثبت نام
            </span>
          </Link>
        </li>

        <li className="border-t md:border-none">
          <Link to="/favorite">
            <span className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              <Heart />
            </span>
          </Link>
        </li>
        <li className="border-t md:border-none">
          <Link to="/shopping">
            <span className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              <ShoppingCart />
            </span>
          </Link>
        </li>
        <li className="border-t md:border-none">
          <Link to="/">
            <span className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              محصولات
            </span>
          </Link>
        </li>

      
      </ul>
    </nav>
  );
};

export default NavBar;
