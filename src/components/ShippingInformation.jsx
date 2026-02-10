import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import ShippingInfoSection from "./ShippingInfoSection";

export default function ShippingInformation() {
  const [methods] = useState([
    { id: "online", label: "Online payment" },
    { id: "cash", label: "Cash on delivery" },
    { id: "pos", label: "POS on delivery" },
  ]);

  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <>
      <section className="flex flex-col gap-10">
        {/* Shipping Information */}
        <ShippingInfoSection />

        {/* Payment Method */}
        <div className="w-190 rounded-lg border border-[#22222233] bg-white p-10 text-black">
          <h1 className="text-xl font-bold mb-6">Payment Method</h1>
          <div className="flex gap-5">
            {methods.map((method) => (
              <div
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`w-full cursor-pointer rounded-lg border p-5 flex items-center gap-3 transition
                  ${
                    paymentMethod === method.id
                      ? "border-move bg-move/10 text-move"
                      : "border-[#22222233]"
                  }`}
              >
                <span className="w-5 h-5 rounded-full border border-move flex items-center justify-center">
                  {paymentMethod === method.id && (
                    <span className="w-3 h-3 rounded-full bg-move"></span>
                  )}
                </span>
                <span className="font-medium">{method.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Note */}
        <div className="w-190 rounded-lg border border-[#22222233] bg-white p-10 text-black flex flex-col gap-10">
          <h1 className="text-sm font-semibold">Note</h1>
          <div className="relative">
            <FiEdit className="absolute top-4 left-3 text-gray-400" />
            <textarea
              placeholder="Add note"
              className="w-full p-3 pl-10 h-45 resize-none border border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>
        </div>
      </section>
    </>
  );
}
