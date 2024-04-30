import React from "react";
import "./Style.css";
import {
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiLogoTiktok , BiLogoFacebook} from "react-icons/bi";
import { openSearchModal } from "../../../Store/slices/uiSlices";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleOpenSearchModal = () =>{
    dispatch(openSearchModal())
  }
  return (

    <div id="main-header">
      <div className="header-layout">
        <div className="info-wrapper">
          <h3>FREE SHIPPING ON ORDERS OF $35+</h3>
        </div>

        <div className="right">
          <ul className="links-wrapper">
            <li>
              <BiLogoFacebook />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <BiLogoTiktok />
            </li>
            <div className="search-modal-link" onClick={handleOpenSearchModal}>
              <span>
                <AiOutlineSearch />
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
