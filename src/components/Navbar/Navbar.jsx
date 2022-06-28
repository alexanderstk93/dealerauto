import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation";

export default function Navbar() {
  const [runMenuAnimation, setRunMenuAnimation] = useState(false);
  const [exitMenuAnimation, setExitMenuAnimation] = useState(false);
  const [runNavbarAnimation, setRunNavbarAnimation] = useState(false);
  const [exitNavbarAnimation, setExitNavbarAnimation] = useState(false);

  const windowHeight = useSelector((state) => state.status.windowHeight);

  useEffect(() => {
    if (windowHeight > 85) {
      switchRunNavbarAnimation();
    } else if (windowHeight < 85 && runNavbarAnimation) {
      switchExitNavbarAnimation();
    }
  });

  const switchRunMenuAnimation = () => {
    setExitMenuAnimation(false);
    setRunMenuAnimation(true);
  };

  const switchExitMenuAnimation = () => {
    setExitMenuAnimation(true);
    setRunMenuAnimation(false);

    setTimeout(() => {
      setExitMenuAnimation(false);
    }, 400);
  };

  const switchRunNavbarAnimation = () => {
    setExitNavbarAnimation(false);
    setRunNavbarAnimation(true);
  };

  const switchExitNavbarAnimation = () => {
    setExitNavbarAnimation(true);
    setRunNavbarAnimation(false);

    setTimeout(() => {
      setExitMenuAnimation(false);
    }, 400);
  };

  return (
    <>
      {/* BURGER MENU ICON */}
      <BurgerMenu
        switchMobileMenu={switchRunMenuAnimation}
        isMenuActive={runMenuAnimation}
      />
      {/* MENU / NAVIGATION */}
      <div
        className={`
        left-[-23rem] lg:left-0 ${runMenuAnimation && "animate-fade-in"} 
        ${exitMenuAnimation && "animate-fade-out"} lg:animate-none 
        ${runNavbarAnimation && "lg:animate-background-in"}
        ${exitNavbarAnimation && "lg:animate-background-out"}
        bg-white w-[20rem]
        h-screen lg:flex lg:w-full lg:h-[4.5rem] 
        lg:bg-transparent fixed top-0 z-20 ${
          runNavbarAnimation ? "lg:text-black shadow-xl" : "lg:text-white"
        } lg:items-center`}
      >
        {/* LEFT NAV / ICON WITH LOGO NAME*/}
        <div className="justify-center mt-[2rem] lg:mt-0 lg:basis-1/4 flex items-center lg:ml-[5rem]">
          <img
            src={require("../../assets/images/racing-car.png")}
            className="w-[50px] mr-[1rem]"
            alt=""
          />
          <a
            href="#hero"
            className={`border-black text-3xl italic font-bold border p-[0.5rem] cursor-pointer ${
              runNavbarAnimation ? "lg:border-black" : "lg:border-white"
            }`}
          >
            <span className="text-[#eb1026]">i</span>DRIVERS
          </a>
        </div>
        {/* RIGHT NAV / NAVIGATION LINKS*/}
        <div className=" lg:basis-3/4">
          <Navigation />
        </div>
        <button
          onClick={switchExitMenuAnimation}
          className="active:bg-ingido-400 w-[5rem] h-[3rem] mt-[2rem] bg-indigo-600 text-white rounded lg:hidden"
        >
          Close
        </button>
        <p className="absolute bottom-[1rem] left-0 right-0 lg:hidden">
          &copy; Copyright iDRIVERS 2022
        </p>
      </div>
      {/* BACKDROP */}
      <div
        className={`${
          runMenuAnimation ? "fixed" : "hidden"
        } h-screen w-full bg-black z-10 opacity-25 lg:hidden`}
        onClick={switchExitMenuAnimation}
      ></div>
    </>
  );
}
