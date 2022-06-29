import React from "react";

export default function WheelPreviewCard({ price, img, producer }) {
  return (
    // Container
    <div className="relative w-[15rem] shadow-2xl hover:shadow-4xl mx-auto min-h-[22rem] max-h-[22rem]">
      {/* WHEEL IMAGE AND BACKGROUND */}
      <div className="bg-slate-200">
        <img
          src={img}
          alt="wheel"
          className="h-[200px] mx-auto relative top-[-3rem]"
        />
      </div>
      {/* PRODUCER */}
      <div className="bg-slate-400 text-xl font-bold italic">
        <p>{producer}</p>
      </div>
      {/* INFOS */}
      <div className="flex items-center justify-between p-[1rem] text-2xl  rounded-b-md absolute bottom-0 w-full">
        <button className="border-[1px] border-black hover:bg-emerald-300 w-[4rem] h-[2.5rem] rounded shadow-xl cursor-pointer">
          <i class="fa fa-shopping-cart"></i>
        </button>
        <input
          defaultValue={1}
          type="number"
          className="w-[3rem] border-[1px] border-black text-center h-[2.5rem] rounded"
        />
        <p>{price}$</p>
      </div>
    </div>
  );
}
