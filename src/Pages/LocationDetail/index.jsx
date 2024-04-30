import React, { useEffect } from "react";
import "./Style.css";
import { useParams } from "react-router-dom";
import usePageTitle from "../../Hooks/usePageTitle";
import { useSelector } from "react-redux";
const LocationDetail = () => {
  const { location_id } = useParams();
  const currentId = +location_id;
  const { LocationData } = useSelector((state) => state.api);
  const currPageTitle = LocationData.find((item) => item.id === currentId)
    .address.mainAddress;
  const [titleChangerFn, mainTitle] = usePageTitle(currPageTitle);
  const currLocationDetail = LocationData.find((item) => {
    return item.id === currentId;
  });
  const {
    id,
    address: { mainAddress, subCity, country, street },
    shopName,
    poBox,
    phoneNumber,
    img_src: { poster },
    menu,
    detail,
    openingDays,
    openingHour,
  } = currLocationDetail;

  useEffect(() => {
    titleChangerFn();
    return () => (document.title = mainTitle);
  }, []);
  return (
    <div id="location-detail-page">
      <div className="location-detail-page-layout">
        <div className="location-detail-hero">
          <div className="content-wrap">
            <div className="left-content-wrap">
              <div className="poster-img-wrap">
                <img src={poster} alt="" />
              </div>
            </div>
            <div className="right-content-wrap">
              <div className="detail-wrap">
                <div className="main-title-wrap">
                  <h3>{subCity}</h3>
                </div>

                <div className="sub-title-wrap">
                  <p>PIER 39, P.O. Box 19730</p>
                  <p>San Francisco, CA 94122</p>
                </div>

                <div className="phone-number-wrap">
                  <p>{phoneNumber}</p>
                </div>

                <div className="actions">
                  <button>View map</button>
                </div>

                <div className="opening-date-hour-wrap">
                  <div>
                    <h3 className="opening-days">Monday - Friday</h3>
                    <h3 className="opening-hours">2am - 3pm</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="location-detail-gallery-wrap"></div>

        <div className="location-detail-menu">
          <div className="shop-menu-wr"></div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
