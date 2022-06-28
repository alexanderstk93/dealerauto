import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form/Form";

export default function Contact() {
  return (
    <div className="w-full h-screen block lg:flex overflow-hidden bg-slate-800 px-[1rem] lg:p-0">
      <div className="hidden basis-1/4 h-full bg-slate-700 lg:block">
        <Link
          to="/"
          className="z-10 text-left left-[5rem] text-5xl absolute text-white cursor-pointer hover:animate-ping"
        >
          &#8592;
        </Link>
        <h1 className="text-white font-bold text-5xl relative top-[50%] bottom-[50%] translate-y-[-50%] animate-slide-right">
          Contact
        </h1>
      </div>
      <div className="hidden border-slate-700 border-t-[450px] border-t-transparent border-l-[15rem] border-b-[450px] border-b-transparent h-screen relative animate-slide-right lg:block "></div>
      <h1 className="absolute left-[0] right-[0] text-white text-2xl top-[5%] italic font-bold lg:hidden">
        Contact
      </h1>
      <div className="w-full lg:basis-3/4 h-screen">
        <Form />
      </div>
    </div>
  );
}
