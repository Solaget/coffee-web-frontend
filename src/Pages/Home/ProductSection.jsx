import React, { useState } from "react";
import Card from "../../Components/ui/Card";
import { useSelector } from "react-redux";
const ProductSection = () => {
  const { products } = useSelector((state) => state.api);
  const [filterd, setFilterd] = useState(products.slice(0, 4));
  console.warn(filterd);
  return (
    <div id="product-section">
      <div className="content-container">
        <div className="product-section-header">
          <span className="product-section-highlight-text">SPOTLIGHT</span>
          <div className="product-section-title">
            <h3>Now roasting</h3>
          </div>
          <div className="vertical-line"></div>
          <div className="product-section-desc">
            <p>Featuring a bright spectrum of flavors and essences</p>
          </div>
        </div>

        <div className="product-wrapper">
          {filterd.map((product, idx) => (
            <Card key={product.id} product={product} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
