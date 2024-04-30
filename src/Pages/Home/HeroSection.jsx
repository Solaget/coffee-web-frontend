import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleShopClick = () => {
    navigate("/shop");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero-section">
      <div className="vertical-text">
        <h3 data-aos="fade-left" data-aos-once="true" data-aos-duration="400">
          BECAUSE WE LOVE COFFEE
        </h3>
      </div>
      <div className="content-wrapper">
        <div className="hero-info">
          <div className="hero-title">
            <h3
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="700"
            >
              Quality Coffee delivered to your Door
            </h3>
          </div>

          <div className="hero-desc">
            <p
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              Everything we do is a matter of heart, body and soul. Our mission
              is to provide sustainably sourced, hand-picked, quality coffee.
            </p>
          </div>

          <div className="hero-actions">
            <button
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1300"
              onClick={handleShopClick}
            >
              Shop Coffees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
