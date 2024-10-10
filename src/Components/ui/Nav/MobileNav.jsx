import React, { useState, useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mobile-nav">
      <div className="nav-toggle" onClick={toggleNav}>
        <CiMenuFries />
      </div>
      <nav className={`nav-sheet ${isOpen ? "open" : ""}`} ref={navRef}>
        <div className="nav-header">
          <div className="logo">Mr. Coffee</div>
          <button
            className="close-btn"
            onClick={closeNav}
            aria-label="Close navigation"
          >
            X
          </button>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={"/wholesale"}>WHOLESALE</NavLink>
          </li>
          <li>
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to={"/locations"}>LOCATIONS</NavLink>
          </li>
        </ul>
      </nav>

    </div>
  );
}
