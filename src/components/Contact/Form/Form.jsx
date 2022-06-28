import React, { useState } from "react";
import { useRef } from "react";

export default function Form() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const [notificationActive, setNotificationActive] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNotificationActive(true);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    setTimeout(() => {
      setNotificationActive(false);
    }, 8000);
  };

  const inputStyles =
    "focus:outline-white outline-[1px] lg:outline-[2px] bg-transparent border-slate-500 border-[2px] rounded w-full text-xl lg:text-2xl p-[0.2rem] lg:p-[0.5rem] my-[0.5rem]";
  const labelStyles = "font-bold";
  return (
    <form
      onSubmit={onSubmitHandler}
      className=" rounded text-start text-white italic w-full lg:w-[70%] p-[2rem] mx-auto relative top-[50%] translate-y-[-50%] shadow-4xl border-slate-600 border-opacity-10 border-[1p] bg-transparent"
    >
      <div className="">
        <label htmlFor="" className={labelStyles}>
          First Name
        </label>
        <input
          ref={firstNameRef}
          required
          type="text"
          className={inputStyles}
        />
      </div>
      <div className="">
        <label htmlFor="" className={labelStyles}>
          Last Name
        </label>
        <input ref={lastNameRef} required type="text" className={inputStyles} />
      </div>
      <div className="">
        <label htmlFor="" className={labelStyles}>
          E-Mail
        </label>
        <input ref={emailRef} required type="email" className={inputStyles} />
      </div>
      <div>
        <label htmlFor="" className={labelStyles}>
          Message
        </label>
        <textarea
          ref={messageRef}
          className="h-[10em] focus:outline-white outline-[2px] resize-none w-full mt-[0.5rem] bg-transparent border-slate-500 border-[2px]"
          name=""
          id=""
        ></textarea>
      </div>
      <button className="w-[5rem] h-[3rem] mt-[2rem] text-white italic bg-blue-800 rounded text-xl">
        Send &#8594;
      </button>
      <p
        className={`font-bold inline-block text-xl ml-[2rem] ${
          notificationActive ? "inline-block" : "hidden"
        }`}
      >
        We received your message!
      </p>
    </form>
  );
}
