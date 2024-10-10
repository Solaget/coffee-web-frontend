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
    <div>
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

      <style jsx>{`
        .nav-sheet {
          position: fixed;
          top: 0;
          right: -250px;
          width: 250px;
          height: 100%;
          background-color: #fff;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease-in-out;
          z-index: 1000;
        }
        .nav-sheet.open {
          right: 0;
        }
        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #4a2c2a;
        }
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #333;
        }
        .nav-sheet ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .nav-sheet ul li {
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }
        .nav-sheet ul li a {
          color: #333;
          text-decoration: none;
          font-size: 18px;
          display: block;
        }
        .nav-sheet ul li a:hover {
          color: #4a2c2a;
        }
      `}</style>
    </div>
  );
}
