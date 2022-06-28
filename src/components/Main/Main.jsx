import React from "react";
import PreviewCard from "./Preview/PreviewCard";
import PreviewList from "./Preview/PreviewList";

export default function Main() {
  return (
    <div id="main" className="w-full px-[3rem] py-[2rem] bg-white">
      <h1 className="text-center text-4xl italic mb-[4rem] font-bold">
        Available Models
      </h1>
      <PreviewList />
    </div>
  );
}
