import React, { useEffect } from "react";
import "./Style.css";
import usePageTitle from "../../Hooks/usePageTitle";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Location = () => {
  const [titleChangerFn, mainTitle] = usePageTitle("Location");
  useEffect(() => {
    titleChangerFn();
    return () => (document.title = mainTitle);
  }, []);

  const { LocationData } = useSelector((state) => state.api);
  const navigate = useNavigate();
  const HandleClick = (currId) => {
    navigate(`${currId}`);
  };
  return (
    <div id="location-page">
      <div className="location-page-layout">
        <div className="location-content-wrapper">
          {LocationData.map((item, idx) => {
            const {
              shopName,
              poBox,
              phoneNumber,
              id,
              img_src: { poster },
              address: { mainAddress, subCity, city, street, country },
            } = item;
            return (
              <div className="location-content" key={id}>
                <div className="left-content-wrapper">
                  <div className="location-poster-wrapper">
                    <img src={poster} alt="" />
                  </div>
                </div>
                <div className="right-content-wrppaer">
                  <div className="location-detail-wrapper">
                    <div className="detail-layout">
                      <div className="mainAddress">
                        <h3>{mainAddress}</h3>
                      </div>
                      <div className="sub-city">
                        <h3>{subCity}</h3>
                      </div>
                      <div className="location-detail">
                        <p className="po-box">PO.BOX {poBox}</p>
                        <p className="city">{city}</p>
                        <p className="phone-no">{phoneNumber}</p>
                      </div>
                      <div className="actions">
                        <button onClick={() => HandleClick(id)}>
                          Menu & Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Location;
