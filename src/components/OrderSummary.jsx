import { useEffect, useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

import { BiSolidDiscount } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "../store";
import toast from "react-hot-toast";

export default function OrderSummary() {
  const [total, setTotal] = useState(0);
  let tax = 0;
  const { items } = useCart();
  useEffect(() => {
    let finalTotal = 0;
    items.forEach((el) => {
      finalTotal += el.price * el.qty;
    });
    setTotal(finalTotal);
  }, [items]);
  total == 0 ? (tax = 0) : (tax = 4);

  return (
    <>
      <section className="w-full lg:w-134 rounded-lg border border-[#22222233] bg-white p-10 text-black flex flex-col justify-between gap-10">
        <h1 className="text-xl font-bold">Order summary</h1>
        {items.map((item) => (
          <div key={item.documentId} className=" flex flex-col gap-5">
            <div className="flex gap-5">
              <img className="w-27.75 h-40" src={item.img} alt="" />

              <div className="w-full flex flex-col gap-4">
                <h1 className="font-bold text-black">{item.name}</h1>

                <span className="text-sm text-gray-400">
                  Author:
                  <span className="text-black ml-1">{item.author}</span>
                </span>
                <span className="w-34.5 text-[14px] font-normal rounded-xl p-2 flex items-center justify-center gap-2 border border-[#22222280] text-[#22222280]">
                  <LiaShippingFastSolid className="text-[20px]" />
                  <h1>Free Shipping</h1>
                </span>
                <div className="flex items-center justify-between text-black text-[12px] font-bold ">
                  <span className="text-[#22222293]">
                    {item.name} * {item.qty}
                  </span>
                  <span className="text-2xl">${item.qty * item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-[#22222280]">Have a discount code?</h1>
            <label className="flex items-center gap-3 relative w-full max-w-md">
              <BiSolidDiscount className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22222280] text-2xl rotate-90" />
              <input
                type="text"
                className="flex-1 p-4 pl-12 border border-gray-400 rounded-lg bg-white placeholder-gray-500"
                placeholder="Enter Promo Code"
              />
              <button className="bg-[#3B2F4A] text-white font-semibold text-[16px] py-4 px-5 rounded-lg cursor-pointer">
                Apply
              </button>
            </label>
          </div>
          <div className="h-px w-full bg-[#22222233]"></div>
          <div className=" w-full p-3 lg:w-106 flex flex-col gap-6">
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Subtotal</h1>
              <h1 className="text-xl font-bold">${total}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Tax</h1>
              <h1 className="text-xl font-bold">${tax}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Shipping</h1>
              <h1 className="text-xl font-bold text-[#22222280]">$0</h1>
            </div>
            <div className="h-px w-full bg-[#22222233]"></div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Total</h1>
              <h1 className="text-xl text-move font-bold">${total + tax}</h1>
            </div>
            <Link
              to="/confirmorder"
              onClick={() => {
                toast.success("Order Successfully!!!💯⭐");
              }}
              className="w-full text-center bg-move text-lg font-semibold rounded-lg text-white p-2 cursor-pointer"
            >
              Confirm order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
