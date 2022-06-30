import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWindowHeight } from "../../store/statusSlice";

export default function Hero() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", () =>
      dispatch(setWindowHeight(window.scrollY))
    );
  });

  return (
    <div id="hero" className="h-screen width-screen lg:h-[45rem] relative">
      <div className="z-1 text-white w-5/6 m-auto pt-[7rem] lg:pt-[10rem]">
        <h1 className="text-4xl lg:text-6xl font-heroTitle italic">
          Get Your Future Car with Us!
        </h1>
        <p className="text-justify my-[1.5rem] lg:text-2xl font-heroMessage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          reprehenderit placeat, dolores accusamus at dolorem ex. Laudantium
          quas recusandae consectetur culpa eos fugit quos, nesciunt dignissimos
          minima quod ratione commodi, similique, nihil blanditiis vitae
          facilis! Perferendis culpa molestiae excepturi sit? Consectetur,
          eligendi! In pariatur exercitationem ullam, nam eligendi dolore
          corrupti!
        </p>
      </div>

      {/* Black Cover for Background Image */}
      <div>
        <div className="z-[-1] w-full h-full bg-black absolute top-0 left-0 opacity-40 lg:opacity-50"></div>
        {/* Background Image */}
        <img
          className="animate-card-fade-in z-[-2] w-full h-full object-cover absolute top-0 left-0"
          src={require("../../assets/images/m4competition.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}
