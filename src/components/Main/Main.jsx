import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSection } from "../../store/statusSlice";
import PreviewCard from "./Preview/CarPreviewCard";
import PreviewList from "./Preview/PreviewList";

export default function Main() {
  const liElementStyles = "cursor-pointer border-b-[3px] border-transparent";
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.status.currentSection);
  console.log(currentSection.tools);
  return (
    <div id="main" className="w-full px-[3rem] pt-[3rem] bg-white pb-[10rem]">
      <h1 className="text-center text-4xl italic mb-[4rem] font-bold">
        Available Models
      </h1>
      {/* SELECT CATEGORY */}
      <ul className="flex pb-[2rem] text-xl font-bold italic">
        <li
          onClick={() => {
            dispatch(setCurrentSection("vehicles"));
          }}
          className={`mr-[1rem] ${liElementStyles} ${
            currentSection.vehicles && "border-red-600"
          }`}
        >
          Vehicles
        </li>
        <li
          onClick={() => {
            dispatch(setCurrentSection("wheels"));
          }}
          className={`mr-[1rem] ${liElementStyles} ${
            currentSection.wheels && "border-red-600"
          }`}
        >
          Wheels
        </li>
        <li
          onClick={() => {
            dispatch(setCurrentSection("tools"));
          }}
          className={`${liElementStyles} ${
            currentSection.tools && "border-red-600"
          }`}
        >
          Tools
        </li>
      </ul>
      <PreviewList />
    </div>
  );
}
