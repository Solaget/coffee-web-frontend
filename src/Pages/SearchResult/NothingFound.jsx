import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NothingFound = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const handleSearchSubmit = () => {
    const searchInputValue = searchInputRef.current.value;

    if (searchInputValue.length > 2) {
      navigate(`/search?query=${searchInputValue}`);
    } else {
      alert("Please write more than 2 letter");
    }
  };
  return (
    <div className="unavailable-search-result-layout">
      <div className="unavailble-content">
        <h3 className="title">Noting found</h3>
        <p className="label-text">
          Sorry, but nothing matched your search terms. Please try again with
          some different keywords.
        </p>

        <div className="search-bar">
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              name="query"
              id=""
              ref={searchInputRef}
              placeholder="Search here"
              maxLength={15}
            />
            <button onClick={handleSearchSubmit}>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NothingFound;
