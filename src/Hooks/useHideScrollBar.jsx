import React, { useEffect, useState } from "react";

const useHideScrollBar = () => {
  const [hideScrollBar, setHideScrollBar] = useState(false);

  useEffect(() => {
    if (hideScrollBar) {
      document.documentElement.style.overflow = " hidden";
    } else {
      document.documentElement.style.overflow = " visible";
    }
  }, [hideScrollBar]);
  return { hideScrollBar, setHideScrollBar };
};

export default useHideScrollBar;
