import { FaShoppingCart } from "react-icons/fa";
import imgcard1 from "../assets/images/imgcard1.png";
import reviewCard1flash from "../assets/images/reviewCard1flash.png";
import { useState } from "react";
export default function CardFlash({ className = "" }) {
  const [value, setValue] = useState(40);

  return (
    <div
      className={`flex flex-col sm:flex-row bg-[#3B2F4A] text-white p-4 
      w-full max-w-md md:max-w-lg rounded-xl gap-5 ${className}`}
    >
      {/* الصورة */}
      <img
        className="w-full sm:w-43 h-65 object-contain rounded-lg mx-auto sm:mx-0"
        src={imgcard1}
        alt=""
      />

      {/* المحتوى */}
      <div className="flex flex-col gap-3 flex-1">
        <h1 className="text-[16px] font-bold">Rich Dad And Poor Dad</h1>

        <h1 className="text-[14px] font-normal">
          <span className="text-[#FFFFFF80]">Author:</span> Robert T. Kiyosanki
        </h1>

        <img className="w-fit" src={reviewCard1flash} alt="" />

        <div className="flex justify-between items-center">
          <p className="text-[#FFFFFF80] line-through">$45.00</p>
          <h1 className="text-[26px] font-bold">$30.00</h1>
        </div>

        <div className="relative flex flex-col gap-4 pb-14">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="range range-warning"
          />

          <h1 className="text-[12px] text-[#FFFFFF80]">4 books left</h1>

          <span className="absolute right-2 bottom-2 bg-move p-3 rounded-xl">
            <FaShoppingCart className="text-xl cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}
