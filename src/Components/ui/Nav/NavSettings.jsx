const NavSettings = (location) => {
    // Nav bar Function
      const navElement = document.getElementById("main-nav");
      if (location.pathname !== "/") {
        navElement.classList.add("sticky");
      } else {
        navElement.classList.remove("sticky");
      }
      window.onscroll = () => {
        if (window.scrollY > 110) {
          if (location.pathname === "/") {
            navElement?.classList.add("active");
          } else {
            navElement?.classList.remove("active");
          }
        } else {
          navElement?.classList.remove("active");
        }
      };
}

export default NavSettings