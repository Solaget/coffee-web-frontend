import React, { useEffect, useState } from "react";

const usePageTitle = (ActivePageTitle) => {
  const mainTitle = "Mr, Coffee";
  function titleChangerFn() {
    const slicedTitle = ActivePageTitle.slice(0, 20);
    const updatedTitle =
      ActivePageTitle.length > 20 ? `${slicedTitle}...` : ActivePageTitle;
    document.title = `${updatedTitle} - ${mainTitle}`;
  }
  return [titleChangerFn, mainTitle];
};

export default usePageTitle;

/* 
  useEffect(() => {
    titleChangerFn()
    return () => (document.title = mainTitle);
  }, [])*/
