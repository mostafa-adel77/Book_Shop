import { FaShoppingCart } from "react-icons/fa";
import imgcard1 from "../assets/images/imgcard1.png";
import reviewCard1flash from "../assets/images/reviewCard1flash.png";
import { useState } from "react";
export default function CardFlash() {
  const [value, setValue] = useState(40);
  return (
    <div className="flex bg-[#3B2F4A] text-white p-4 w-full md:w-105 rounded-xl gap-5">
      <img width={173} height={260} src={imgcard1} alt="" />
      <div className="flex flex-col gap-3">
        <h1 className="text-[16px] font-bold">Rich Dad And Poor Dad</h1>
        <h1 className="text-[14px] font-normal">
          <span className="text-[#FFFFFF80]">Author:</span> Robert T. Kiyosanki
        </h1>
        <img src={reviewCard1flash} alt="" />
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FFFFFF80]">$45.00</p>
          <h1 className="text-[26px] font-bold">$30.00</h1>
        </div>
        <div className="relative flex flex-col gap-5 pb-15">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="range range-warning"
          />
          <h1 className="text-[12px] text-[#FFFFFF80] font-normal">
            4 books left
          </h1>
          <span className="absolute w-15 bg-move p-4 rounded-xl right-0 bottom-0 md:right-2 md:bottom-2">
            <FaShoppingCart className="text-2xl text-white hover:cursor-pointer " />
          </span>
        </div>
      </div>
    </div>
  );
}