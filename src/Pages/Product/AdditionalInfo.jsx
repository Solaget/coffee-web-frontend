const AdditionalInfo = ({data}) => {
  const { Roast, HARVEST, COUNTRY, REGION, ALTITUDE } = data;
  return (
    <div className="info-content-layout">
      <div className="info-container">
        <header>
          <h3>ADDITIONAL INFORMATION</h3>
        </header>

        <div className="info-list-wrap">
          <ul>
            <li>
              <h3 className="info-title">ROAST</h3>
              <p className="info-desc">{Roast}</p>
            </li>

            <li>
              <h3 className="info-title">HARVEST</h3>
              <p className="info-desc">{HARVEST}</p>
            </li>

            <li>
              <h3 className="info-title">COUNTRY</h3>
              <p className="info-desc">{COUNTRY}</p>
            </li>

            <li>
              <h3 className="info-title">REGION</h3>
              <p className="info-desc">{REGION}</p>
            </li>

            <li>
              <h3 className="info-title">ALTITUDE</h3>
              <p className="info-desc">{ALTITUDE}</p>
            </li>

            <li>
              <h3 className="info-title">ROAST</h3>
              <p className="info-desc">{Roast}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
