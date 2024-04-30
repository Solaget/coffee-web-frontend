import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import { AiOutlineClose } from "react-icons/ai";
import { closeSearchModal } from "../../../Store/slices/uiSlices";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
const SearchModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('query')
  const HandleCloseSearchModal = () => {
    dispatch(closeSearchModal());
  };
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    // Remove the event listener when the compnoent are unmount || close 👇🏼
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  const HandleSearchInputChange = (event) => {
    // const inputValue = event.target.value;
    // setQuery(inputValue);
  };
  const handleKeyPress = ({ key }) => {
    const searchValue = searchInputRef.current.value;
    const query = searchValue;
    if (key == "Enter") {
      if (query.length <= 2) {
        alert("please write over 2 letters");
      } else {
        navigate(`/search/?query=${query}`);
        dispatch(closeSearchModal());
      }
    }
  };
  return (
    <div id="search-modal">
      <div className="close-search-modal" onClick={HandleCloseSearchModal}>
        <span>
          <AiOutlineClose />
        </span>
      </div>
      <div className="content-wrapper">
        <div className="search-bar">
            <input
              ref={searchInputRef}
              type="search"
              autoComplete="true"
              autoFocus
              placeholder="Search Here"
              onChange={HandleSearchInputChange}
              // value={queryParam}
              name="sch"
            />
        </div>
        <div className="help-text">
          <h3>Type and press Enter.</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
