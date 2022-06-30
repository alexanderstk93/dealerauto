import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentSection } from "../../store/statusSlice";

export default function Navigation() {
  const linkStyles =
    "active:bg-slate-300 lg:active:bg-inherit my-[1rem] lg:mx-[0.8rem] lg:cursor-pointer  font-bold italic border-b-4 border-transparent lg:hover:border-[#eb1026]";
  const dispatch = useDispatch();
  const windowHeight = useSelector((state) => state.status.windowHeight);

  const cartItemsQuantity = useSelector((state) => state.cart.length);

  return (
    <ul className="flex flex-col items-center lg:flex-row lg:justify-end mt-[5rem] lg:mr-10 lg:mt-0 text-xl">
      <a
        className={linkStyles}
        href="#main"
        onClick={() => dispatch(setCurrentSection("vehicles"))}
      >
        Available Models
      </a>
      {/* <Link to={"/about"} className={linkStyles}>
        About
      </Link> */}
      <Link to={"/contact"} className={linkStyles}>
        Contact
      </Link>
      <Link to="/cart" className="relative">
        <img
          className="w-[35px]"
          src={require("../../assets/images/bag.png")}
          alt=""
        />
        <span
          className={`absolute top-[-0.5rem] right-[-1rem] bg-black text-white ${
            windowHeight > 85
              ? "lg:bg-black lg:text-white"
              : "lg:bg-white lg:text-black"
          } h-[1.5rem] w-[1.5rem] rounded-[50%] flex items-center justify-center`}
        >
          {cartItemsQuantity}
        </span>
      </Link>
    </ul>
  );
}
