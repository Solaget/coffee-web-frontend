import React, { useEffect, useRef } from "react";
import "./Style.css";
import { AiOutlineInstagram, AiOutlineSearch } from "react-icons/ai";
import { BiLogoTiktok, BiLogoFacebook } from "react-icons/bi";
import { useSelector } from "react-redux";
import pic from "../../../../public/Images/footer-img.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { logo } = useSelector((state) => state.api);
  const animationRef = useRef(null);
  const { LocationData } = useSelector((state) => state.api);
  const mainAddress = LocationData.map((item) => item.address.mainAddress);
  const navigate = useNavigate();
  const handleLocationClick = (locationName) => {
    const getClickedId = LocationData.find((item) => {
      return item.address.mainAddress === locationName;
    }).id;

    navigate(`locations/${getClickedId}`);
  };
  return (
    <footer id="main-footer">
      {/* <div className="footer-animation-pic" ref={animationRef}>
        <img src={pic} alt="" />
      </div> */}
      <div className="footer-layout">
        <div className="footer-links">
          <ul>
            <li>
              <h4>About</h4>
              <ul>
                <li>The company</li>
                <li>Faq</li>
                <li>Privacy and policy</li>
              </ul>
            </li>

            <li>
              <h4>Location</h4>
              <ul>
                {mainAddress.map((item, idx) => {
                  return (
                    <li onClick={() => handleLocationClick(item)} key={idx}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <h4>Follow us</h4>
              <div className="social-links">
                <span>
                  <BiLogoFacebook />
                </span>
                <span>
                  <AiOutlineInstagram />
                </span>
                <span>
                  <BiLogoTiktok />
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-bottom-info">
          <div className="left">
            <p>© 2023 MR,COFFEE. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="middle">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="right">
            <p>Because we love coffee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
