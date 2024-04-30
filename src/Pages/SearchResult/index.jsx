import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Style.css";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NothingFound from "./NothingFound";
import Card from "../../Components/ui/Card";
import usePageTitle from "../../Hooks/usePageTitle";
const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const schQuery = searchParams.get("query");
  const { products } = useSelector((state) => state.api);
  const [filterd, setFilterd] = useState(
    products.filter((product) => {
      return product.title.toLowerCase().includes(schQuery.toLowerCase());
    })
  );

  const [titleChangerFn, mainTitle] = usePageTitle(`Search result for "${schQuery}"`);
  useEffect(() => {
    titleChangerFn();
    return () => document.title = mainTitle;
  }, [])
  console.log(filterd);

  useLayoutEffect(() => {
    setFilterd(
      products.filter((product) => {
        return product.title.toLowerCase().includes(schQuery.toLowerCase());
      })
    );
  }, [schQuery]);

  //   console.log(!!filterd.length);
  return (
    <div id="search-result-page">
      <div className="search-result-page-layout">
        <div className="search-result-page-content">
          <header className="search-result-page-header">
            <div className="text-wrap">
              <div className="lable-text">
                <h3>Search result for</h3>
              </div>
              <div className="title-text">
                <h3>{schQuery}</h3>
              </div>
            </div>
          </header>

          {filterd.length > 0 || !!filterd.length ? (
            <div className="search-result-container">
              <ul className="search-result-list">
                {filterd?.map((product, idx) => {
                  return <Card product={product} key={product.id} />;
                })}
              </ul>
            </div>
          ) : (
            <NothingFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
