import React, { useRef } from "react";
import "./Style.css";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { openSearchModal } from "../../../Store/slices/uiSlices";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const { logo } = useSelector((state) => state.api);
  const navRef = useRef(null);
  const cartSize = useSelector((state) => state.cart.cartSize);

  const handleOpenSearchModal = () => {
    dispatch(openSearchModal());
  };
  return (
    <nav id="main-nav" ref={navRef}>
      <div className="nav-contents">
        <div className="nav-layout">
          <div className="nav-toggle">
            <CiMenuFries />
          </div>
          <div className="nav-left">
            <ul className="left-nav-links">
              <li className="link">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="link">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="link">
                <NavLink to={"/wholesale"}>Wholesale</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-middle">
            <Link to={'/'}  className="logo-wrapper">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="nav-right">
            <ul className="right-nav-links">
              <li className="link">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="link">
                <NavLink to={"/cart"}>Cart({cartSize})</NavLink>
              </li>
              <li className="link">
                <NavLink to={"/locations"}>Locations</NavLink>
              </li>
            </ul>
          </div>

          <div className="right-menu-for-mobile">
            <span className="cart-btn">
              <button>
                <PiHandbagThin />
              </button>
              <span className="cart-counter">{cartSize}</span>
            </span>
            <span className="search-btn">
              <button onClick={handleOpenSearchModal}>
                <CiSearch />
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
