import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import HeroSectionBooks from "../components/HeroSectionBooks";
import { useCart } from "../store";
import { BiSolidDiscount } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CartPage() {
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
      <HeroSectionBooks />
      <section className="w-full flex justify-center bg-creamy pb-30 md:pb-15">
        <div className="container p-5 text-black py-20">
          {/* Scroll Container */}
          <div className="w-full overflow-x-auto flex flex-col gap-4">
            {/* Header */}
            <div className="grid grid-cols-6 gap-6 font-medium lg:font-bold text-xl min-w-187.5">
              <h1 className="col-span-2 text-start">Item</h1>
              <h1 className="text-center">Quantity</h1>
              <h1 className="text-center">Price</h1>
              <h1 className="text-center">Total Price</h1>
              <h1 className="text-center">Remove</h1>
            </div>

            <div className="w-full h-1 bg-gray-300 my-4"></div>

            {/* Items */}
            <div className="flex flex-col gap-4 min-w-187.5 bg-white rounded-xl p-3">
              {items.length === 0 ? (
                <h1 className="text-center py-10 text-gray-400">
                  Your Cart Is Empty 💔
                </h1>
              ) : (
                items.map((el) => (
                  <CartItem key={el.documentId} product={el} />
                ))
              )}
            </div>
            <div className="w-full bg-gray-400 h-1 min-w-187.5"></div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center bg-[#e2e1e4] p-10">
        <div className="container flex flex-col lg:flex-row justify-between gap-20 text-black">
          <div className="left w-full p-3 lg:w-129 flex flex-col gap-10">
            <div className="top flex flex-col gap-5">
              <h1 className="text-2xl font-bold">Payment Summary</h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
            <div className="bottom flex flex-col gap-8">
              <h1 className="text-[#22222280]">Have a discount code?</h1>
              <label className="flex items-center gap-3 relative w-full max-w-md">
                <BiSolidDiscount className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22222280] text-2xl rotate-90" />
                <input
                  type="text"
                  className="flex-1 p-4 pl-12 border border-gray-400 rounded-lg bg-[#e2e1e4] placeholder-gray-500"
                  placeholder="Enter Promo Code"
                />
                <button className="bg-[#3B2F4A] text-white font-semibold text-[16px] py-4 px-5 rounded-lg cursor-pointer">
                  Apply
                </button>
              </label>
            </div>
          </div>
          <div className="right w-full p-3 lg:w-106 flex flex-col gap-6">
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Subtotal</h1>
              <h1 className="text-xl font-bold">${total}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Shipping</h1>
              <h1 className="text-xl font-bold">Free Delivery</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Tax</h1>
              <h1 className="text-xl font-bold">${tax}</h1>
            </div>
            <div className="h-px w-full bg-[#22222233]"></div>
            <div className="flex justify-between">
              <h1 className="text-[#22222280] font-normal">Total</h1>
              <h1 className="text-xl text-move font-bold">${total + tax}</h1>
            </div>
            <Link to="/checkout" className="w-full text-center bg-move text-lg font-semibold rounded-lg text-white p-2 cursor-pointer">
              Check out
            </Link>
            <button className="w-full text-center bg-[#e2e1e4] text-lg border border-move font-semibold rounded-lg text-move p-2 cursor-pointer">
              Keep Shopping
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
