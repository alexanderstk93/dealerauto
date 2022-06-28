import React from "react";

export default function BurgerMenu({ switchMobileMenu, isMenuActive }) {
  return (
    <div
      className={`${
        isMenuActive ? "hidden" : "block"
      } h-[2rem] fixed left-4 top-4 lg:hidden z-20 `}
      onClick={switchMobileMenu}
    >
      <div className="h-[0.4rem] w-[2.2rem] my-[0.3rem] bg-white"></div>
      <div className="h-[0.4rem] w-[2.2rem] my-[0.3rem] bg-white"></div>
      <div className="h-[0.4rem] w-[2.2rem] my-[0.3rem] bg-white"></div>
    </div>
  );
}
