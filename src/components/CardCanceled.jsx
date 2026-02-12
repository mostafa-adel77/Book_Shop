import { FaArrowRight } from "react-icons/fa6";

export default function CardCanceled() {
  return (
    <div className="w-full p-5 md:p-8 rounded-2xl bg-white text-black shadow-sm">
      <div className="w-full flex flex-col gap-4 md:gap-5">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm md:text-[20px] text-[#22222280]">
              Order No.
            </span>
            <span className="text-sm md:text-[20px] font-semibold">
              #123456
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm md:text-[20px] text-[#22222280]">
              Status
            </span>
            <span className="text-sm md:text-[20px] font-semibold">
              Canceled
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm md:text-[20px] text-[#22222280]">
              Date
            </span>
            <span className="text-sm md:text-[20px] font-semibold">
              Jul, 31 2024
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm md:text-[20px] text-[#22222280]">
              Address
            </span>
            <span className="text-sm md:text-[20px] font-semibold text-right max-w-[60%] sm:max-w-none">
              Maadi, Cairo, Egypt.
            </span>
          </div>
        </div>

        <button className="flex items-center gap-3 mt-2 group w-fit cursor-pointer">
          <h1 className="text-lg md:text-[22px] font-semibold text-move group-hover:underline">
            View order details
          </h1>
          <FaArrowRight className="text-xl md:text-2xl text-move group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
