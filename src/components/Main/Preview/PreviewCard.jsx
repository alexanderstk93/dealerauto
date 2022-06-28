import React from "react";
import { useSelector } from "react-redux";

export default function PreviewCard({ model, km, price, year, img }) {
  const previews = useSelector((state) => state.preview.previews);

  return (
    <div className="shadow-4xl rounded-md overflow-hidden bg-slate-50 cursor-pointer border-gray-300 border-[1px]">
      <img src={img} alt="" className=" w-full h-[16rem] object-cover" />

      <div className="p-[1rem] h-[10rem]">
        <h2 className="text-2xl font-bold italic mb-[0.5rem]">{model}</h2>
        <p className="text-xl italic">{km}KM</p>
        <p className="text-xl italic">Year: {year}</p>
      </div>
      <div className="border-t-[1px] border-black flex justify-between items-center px-[1rem] py-[0.5rem]">
        <button className="text-2xl border-[2px] border-opacity-50 rounded-md border-[#e94454] hover:bg-[#e94454] hover:text-white w-[7rem] h-[3rem] cursor-pointer">
          Details &#8594;
        </button>
        <p className="text-2xl italic font-bold">{price}$</p>
      </div>
    </div>
  );
}
