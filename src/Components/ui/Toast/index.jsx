import React from "react";
import "./Style.css";
import { AiOutlineClose } from "react-icons/ai";
const Toast = ({ setting, handleCloseToast, toastTimeOut }) => {
  const { icon, msg, toastType, colorId } = setting;
  return (
    <div id="toast-container">
      <div id="toast">
        <span
          className="left-vertical-line"
          style={{ background: colorId }}
        ></span>
        <div className="toast-layout">
          <span className="toast-icon" style={{ color: colorId }}>
            {icon}
          </span>
          <div className="text-wrap">
            <div className="toast-title">
              <h4>{toastType}</h4>
            </div>
            <div className="toast-desc">
              <p>{msg}</p>
            </div>
          </div>
        </div>
        <div className="close-toast-btn" onClick={handleCloseToast}>
          <AiOutlineClose />
        </div>
        <div
          className="toast-loader"
          style={{ background: colorId, animationDuration: `${toastTimeOut}s` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
