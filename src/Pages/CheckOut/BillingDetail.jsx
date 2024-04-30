import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBillingDetail } from "../../Store/slices/BillingDetailSlices";

const BillingDetail = () => {
  const dispatch = useDispatch();
  const billingFormDetail = useSelector((state) => state.billingFormDetail);
  const handleBillingFormChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    dispatch(
      updateBillingDetail({ currName: inputName, currValue: inputValue })
    );
  };

  useEffect(() => {
    console.log(billingFormDetail);
  });
  const submit = () => {};
  return (
    <div className="left-content">
      <div className="left-content-header content-header">
        <h3 className="title content-header-title">Billing Detail</h3>
      </div>
      <div className="left-content-wrap">
        <div className="all-form-container">
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="">First name</label>
                <input
                  name="fname"
                  onChange={handleBillingFormChange}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Last name</label>
                <input
                  name="lname"
                  onChange={handleBillingFormChange}
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Company name (optional)</label>
              <input
                name="companyName"
                onChange={handleBillingFormChange}
                type="text"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Region</label>
              <select name="region" id="" onChange={handleBillingFormChange}>
                <option value="">None</option>
                <option value="ethiopia">Ethiopia</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="">Street / Address</label>
              <input
                name="street"
                onChange={handleBillingFormChange}
                type="text"
                placeholder="House number and street"
              />
              <input
                name="street"
                onChange={handleBillingFormChange}
                type="text"
                placeholder="Apartama, suite, uniy etc. (optional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">town / CITY</label>
              <input
                name="townOrCity"
                onChange={handleBillingFormChange}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Country</label>
              <input
                name="country"
                onChange={handleBillingFormChange}
                type="text"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Postcode / ZIP</label>
              <input
                name="postcodeOrZip"
                onChange={handleBillingFormChange}
                type="text"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                name="phoneNo"
                onChange={handleBillingFormChange}
                type="number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Email Address</label>
              <input
                name="emailAddress"
                onChange={handleBillingFormChange}
                type="email"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
