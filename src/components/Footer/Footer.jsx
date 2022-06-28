import React from "react";

export default function Footer() {
  return (
    <div className="bg-black h-auto flex flex-col sm:flex-row items-center justify-around text-white py-[2rem]">
      {/* LEFT */}
      <div className="basis-2/6 flex justify-center">
        <img src={require("../../assets/images/logo.png")} alt="logo" />
      </div>
      {/* MID */}
      <div className="basis-2/6 flex justify-center">
        <div>
          <ul className="flex sm:flex-col items-start">
            <li>
              <a
                href="https://www.instagram.com/idriversbucharest/"
                className="flex items-center my-[0.7rem]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/images/instagram.png")}
                  className="w-[50px] mr-[1rem]"
                  alt=""
                />
                <p className="hidden sm:block">Instagram</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/IdriversBucharest-438061140373823/"
                className="flex items-center my-[0.7rem]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/images/facebook.png")}
                  className="w-[50px] mr-[1rem]"
                  alt=""
                />
                <p className="hidden sm:block">Facebook</p>
              </a>
            </li>
            <li>
              <a
                href="https://idriversbucharest.autovit.ro/"
                className="flex items-center my-[0.7rem]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/images/autovit.png")}
                  className="w-[50px] mr-[1rem]"
                  alt=""
                />
                <p className="hidden sm:block">Autovit</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* RIGHT */}
      <div className="basis-2/6 mt-[1rem] sm:mt-0">
        <h1 className="mb-[1rem] text-2xl">Contact</h1>
        <ul className="flex flex-col justify-center">
          <li className="italic">+40 771 160 345</li>
          <li className="italic">+40 720 384 686</li>
          <li className="w-[50%] mx-auto mt-[1rem]">
            <spam className="fas fa-map-marker-alt mr-[0.5rem]"></spam> CALEA
            BUCURESTI Nr. 253 A - 100034 Otopeni, Judet Bucuresti - Ilfov
            (Romania)
          </li>
        </ul>
      </div>
    </div>
  );
}
