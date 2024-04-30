import React, { useEffect, useState } from "react";
import "./Style.css";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../../Components/ui/Card";
import usePageTitle from "../../Hooks/usePageTitle";
const Shop = () => {
  const { products } = useSelector((state) => state.api);
  const [titleChangerFn, mainTitle] = usePageTitle("Shop");
  useEffect(() => {
    titleChangerFn();
    return () => (document.title = mainTitle);
  }, []);

  const [filterdData, setFilterdData] = useState(products);
  const sortTypeList = [
    { sortName: "Default sort", sortType: "default" },
    { sortName: "Sort by lastest", sortType: "date" },
    { sortName: "Sort by Alphabet: A - Z", sortType: "A_Z" },
    { sortName: "Sort by Alphabet: Z - A", sortType: "Z_A" },
    // { sortName: "Sort by price: Low to High", sortType: "price_low_high" },
    // { sortName: "Sort by price: High to Low", sortType: "price_high-low" },
  ];
  const [searchParam, setSearchParam] = useSearchParams();
  const sortParam =
    searchParam.get("orderBy") == null || searchParam.get("orederBy") == false
      ? ""
      : searchParam.get("orderBy");

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    if (sortType === "default") {
      setSearchParam((prev) => {
        prev.delete("orderBy");
        return prev;
      });
    } else {
      setSearchParam((prev) => {
        prev.set("orderBy", sortType);
        return prev;
      });
    }
  };

  return (
    <div id="shop-page" className="page-container">
      <div className="shop-page-layout">
        <div className="shop-page-content">
          <div className="shop-page-header">
            <h2>SHop</h2>
          </div>

          <div className="main-content">
            <div className="product-list-header">
              <div className="category-list-wrapper">Coffee</div>
              <div className="sort-filter-wrapper">
                <select
                  onChange={handleSortChange}
                  value={searchParam.get("orderBy")}
                >
                  {sortTypeList.map(({ sortName, sortType }, idx) => {
                    return (
                      <option value={sortType} key={idx * Math.random() * 7900}>
                        {sortName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="product-wrapper">
              <ul className="product-list">
                {filterdData
                  .toSorted((a, b) => {
                    if (sortParam === "") {
                      return 0;
                    } else if (sortParam == "A_Z") {
                      return a.title > b.title ? 1 : -1;
                    } else if (sortParam == "Z_A") {
                      return a.title > b.title ? -1 : 1;
                    } 
                    
                  })
                  .map((product, idx) => (
                    <Card product={product} idx={idx} key={product.id} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
