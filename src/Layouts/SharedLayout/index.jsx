import React, { useEffect } from "react";
import "./Style.css";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../Components/ui/Nav";
import Header from "../../Components/ui/Header";
import Footer from "../../Components/ui/Footer";
const SharedLayout = () => {
  // NavBar Animation

  // ### End ###
  return (
    <div id="SharedLayout">
      <Header />
      <Nav />
      <div className="page-layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
