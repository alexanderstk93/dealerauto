import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkStyles =
    "active:bg-slate-300 lg:active:bg-inherit my-[1rem] lg:mx-[0.8rem] lg:cursor-pointer  font-bold italic border-b-4 border-transparent lg:hover:border-[#eb1026]";

  return (
    <ul className="flex flex-col lg:flex-row lg:justify-end mt-[5rem] lg:mr-10 lg:mt-0 text-xl">
      <a className={linkStyles} href="#main">
        Available Models
      </a>
      <Link to={"/about"} className={linkStyles}>
        About
      </Link>
      <Link to={"/contact"} className={linkStyles}>
        Contact
      </Link>
    </ul>
  );
}
