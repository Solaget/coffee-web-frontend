import React from "react";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="content-container">
        <div className="about-section-title">
          <h3>About us</h3>
        </div>

        <div className="vertical-line"></div>

        <div className="about-section-desc">
          <p>
            Everything we do is a matter of heart, body and soul. We strive to
            form profound partnerships with farmers from all over the world to
            create perspective together and form healthy working relationships
            built on trust and respect.
          </p>
        </div>
        <div className="about-section-action">
          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
