import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Card = ({ product }) => {
  const { products } = useSelector((state) => state.api);
  const { available_size, title, img_Src, id } = product;
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [showCardContxtMenu, setShowCardContextMenu] = useState(false);
  useEffect(() => {
    const contextMenuFn = (event) => {
      event.preventDefault();
    };

    cardRef.current.addEventListener("contextmenu", contextMenuFn);
  }, []);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };


  const prices = available_size?.map((item) => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);



  return (
    <li id="product-card" ref={cardRef} onClick={handleCardClick}>
      <div className="card-img">
        <img src={img_Src} alt="" />
      </div>
      <div className="card-body">
        <div className="card-detail">
          <div className="card-title">
            <h3>
              <pre>{title}</pre>
            </h3>
          </div>
          <div className="card-price">
            {/* {available_size[0]?.price} */}
            <h4>
              {prices.length > 1 ? `$${minPrice} - $${maxPrice}` : `$${prices}`}
            </h4>
          </div>
        </div>
        <div className="action">
          <button>Select Options</button>
        </div>
      </div>
    </li>
  );
};

export default Card;

const CardContextMenu = () => {
  return <div id="card-context-menu"></div>;
};
