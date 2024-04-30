import React from "react";
import "./Style.css";
import errorImg from "/Images/Collection/errorpageimg.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/ui/Nav";
// import Header from "../../Components/ui/Header";
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      {/* <Header /> */}
      <div id="error-page">
      <Nav />
        <div className="error-page-layout">
          <div className="top">
            <div className="top-content">
              <div className="left-content error-page-content-text">
                <h2>4</h2>
              </div>
              <div className="middle-content">
                <img src={errorImg} alt="" />
              </div>
              <div className="right-content error-page-content-text">
                <h2>4</h2>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-content">
              <h2>Page not found!</h2>
              <p>
                You don't break the internet but we can't found what you're
                looking for.
              </p>
              <button
                className="error-page-navigate-to-home-btn"
                onClick={handleBack}
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
