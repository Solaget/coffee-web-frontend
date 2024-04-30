import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import img1 from "../../../public/Images/feature/sample1.jpg";
import img2 from "../../../public/Images/feature/sample2.jpg";
import img4 from "../../../public/Images/feature/sample4.jpg";

const FeatureSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="feature-section">
      <div className="content-container">
        <ul>
          <li
            data-aos="fade-up-right"
            data-aos-once="true"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="detail">
              <span>REFER A FRIEND</span>
              <h3>Earn $10</h3>
              <p>Share your love of coffee with friends.</p>
              <button>Learn More</button>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-once="true"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="detail">
              <span>ROASTING IN AUGUST</span>
              <h3>Ethiopia Peaberry</h3>
              <p>
                Essence of cherry and macadamia for a rich, creamy espresso.
              </p>
              <button>Learn MOre</button>
            </div>
          </li>

          <li
            data-aos="fade-up-left"
            data-aos-once="true"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="detail">
              <span>MORE THAN JUST COLD COFFEE</span>
              <h3>Cold Brew</h3>
              <p>
                Refresh your mind with organic, sustainably-sourced cold brew
                coffee.
              </p>
              <button>Learn MOre</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
