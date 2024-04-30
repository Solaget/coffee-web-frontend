import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
const EmptyCart = () => {
    const navigate = useNavigate();
    const handleReturnToShop = () => {
      navigate("/shop");
    };
    return (
      <div className="empty-cart-wrapper">
        <div className="desc">
          <p>Your cart is currently empty.</p>
        </div>
        <div className="action">
          <button onClick={handleReturnToShop}>Return to shop</button>
        </div>
      </div>
    );
  };

  
export default EmptyCart