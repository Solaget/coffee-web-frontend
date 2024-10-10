import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav-toggle" onClick={toggleNav}>
        <CiMenuFries />
      </div>
      <nav className={`nav-sheet ${isOpen ? "open" : ""}`}>
        <div className="logo">Mr. Coffee</div>
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
          z-index: 1;
        }
        .nav-sheet.open {
          right: 0;
        }
        .nav-sheet ul {
          list-style-type: none;
          padding: 0;
          margin-top: 60px;
        }
        .nav-sheet ul li {
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }
        .nav-sheet ul li a {
          color: #333;
          text-decoration: none;
          font-size: 18px;
        }
        .logo {
          text-align: center;
          padding: 20px 0;
          font-size: 24px;
          font-weight: bold;
          color: #4a2c2a;
        }
      `}</style>
    </div>
  );
}
