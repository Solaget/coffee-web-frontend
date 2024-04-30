import { useState, useEffect } from "react";
import Toast from "../Components/ui/Toast";
import { FiCheck } from "react-icons/fi";
import { AiFillWarning, AiOutlineInfo } from "react-icons/ai";
const useToast = () => {
  const [toastType, setToastType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [setting, setSetting] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [customTimeout, setCustomTimeout] = useState(0);
  useEffect(() => {
    if (toastType == "info") {
      setSetting({
        icon: <AiOutlineInfo />,
        msg: alertMsg,
        toastType: toastType,
        colorId: "#17a2b8",
      });
    } else if (toastType == "success") {
      setSetting({
        icon: <FiCheck />,
        msg: alertMsg,
        toastType: toastType,
        colorId: "#28a745",
      });
    } else if (toastType == "warning") {
      setSetting({
        icon: <AiFillWarning />,
        msg: alertMsg,
        toastType: toastType,
        colorId: "#ffc107",
      });
    }
  }, [showToast]);

  const handleCloseToast = () => {
    alert("Work well 👌");
  };

  const defaultTimeout = 3000;
  useEffect(() => {
    showToast &&
      setTimeout(
        () => {
          setShowToast(false);
        },
        customTimeout ? customTimeout : defaultTimeout
      );
  }, [showToast]);

  const ToastElement = () => {
    return showToast && !!toastType && !!alertMsg ? (
      <Toast
        setting={setting}
        handleCloseToast={handleCloseToast}
        toastTimeOut={
          !!customTimeout ? customTimeout / 1000 : defaultTimeout / 1000
        }
      />
    ) : null;
  };
  return {
    setToastType,
    ToastElement,
    setAlertMsg,
    setShowToast,
    setCustomTimeout,
  };
};

export default useToast;
