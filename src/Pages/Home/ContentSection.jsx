import React, { useEffect } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeartLight, PiLeafLight } from "react-icons/pi";
import { TfiHelp } from "react-icons/tfi";
import AOS from "aos";
import ContentData from "../../Utils/ContentData";
const ContentSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="content-section">
      <div className="content-box-wrap">
        {ContentData.map((item, idx) => {
          const { img, title, desc, dataAosDuration } = item;
          return (
            <div
              className="content-box"
              id={`${title}, ${idx}`}
              data-aos="fade-up"
              data-aos-delay={dataAosDuration}
              data-aos-once={'true'}
            >
              <div className="content-layout">
                <div className="content-img">
                  <span>{img}</span>
                </div>
                <div className="content-title">
                  <h3>{title}</h3>
                </div>

                <div className="content-desc">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentSection;
