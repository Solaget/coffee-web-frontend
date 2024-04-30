import React, { useState } from "react";
import Card from "../../Components/ui/Card";
import { useSelector } from "react-redux";

const RelatedProduct = ({ data }) => {
  const { products } = useSelector((state) => state.api);
  const [filterdData, setFilterdData] = useState(
    products.filter(
      (item) => item.category === data.category && item.id !== data.id
    ).slice(0, 4)
  );
  // const filteredData = data.slice(0, 4)
  return (
    <div id="related-product-wrapper">
      <header>
        <h3>Related product</h3>
      </header>

      <div className="related-product-list-wrap">
        <ul>
          {filterdData.map((product, idx) => {
            return <Card product={product} idx={idx} key={idx} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RelatedProduct;
