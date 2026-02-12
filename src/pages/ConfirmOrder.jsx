import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Check } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import HeroSectionBooks from "../components/HeroSectionBooks";
import CardCompleted from "../components/CardCompleted";
import CardCanceled from "../components/CardCanceled";
import { useCart } from "../store";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ConfirmOrder() {
  const { clearCart } = useCart();
  const [activeTab, setActiveTab] = useState("All");
  const items = [
    { label: "Order No.", value: "#123456" },
    { label: "Status", value: "In progress" },
    { label: "Date", value: "Jul, 31 2024" },
    { label: "Address", value: "Maadi, Cairo, Egypt." },
  ];
  const status = [
    { status: "Completed", color: "text-move" },
    { status: "Canceled", color: "text-red-500" },
  ];
  const steps = [
    { label: "Order placed", status: "completed" },
    { label: "Shipping", status: "pending" },
    { label: "Completed", status: "pending" },
  ];

  const tabs = ["All", "InProgress", "Completed", "Canceled"];

  return (
    <>
      <HeroSectionBooks />
      <section className="flex justify-center bg-creamy py-8 md:py-15 min-h-screen">
        <div className="container px-4 md:px-6 flex flex-col gap-6 md:gap-10">
          <div className="flex flex-wrap gap-3 md:gap-5 text-black">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 md:py-2.5 md:px-6 text-sm md:text-base border-2 border-[#00000033] rounded-lg cursor-pointer transition-all ${
                  activeTab === tab
                    ? "bg-move text-white border-move"
                    : "bg-creamy hover:bg-gray-100"
                }`}
              >
                {tab === "InProgress" ? "In Progress" : tab}
              </button>
            ))}
          </div>

          {activeTab === "All" && (
            <div className="flex flex-col gap-6">
              <div className="w-full p-5 md:p-8 rounded-2xl bg-white text-black shadow-sm">
                <div className="w-full flex flex-col gap-4 md:gap-6">
                  <div className="flex justify-end">
                    <button className="cursor-pointer text-move rounded-lg transition-all duration-200 group">
                      <MdDeleteForever className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Data Rows */}
                  <div className="space-y-3 md:space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-50 sm:border-none pb-2 sm:pb-0"
                      >
                        <span className="text-base md:text-[20px] font-normal text-[#22222280]">
                          {item.label}
                        </span>
                        <span className="text-base md:text-[20px] font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full mt-8 mb-10 px-2 md:px-10 lg:px-20">
                    <div className="relative flex items-center justify-between">
                      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>

                      {steps.map((step, index) => (
                        <div
                          key={index}
                          className="relative z-10 flex flex-col items-center"
                        >
                          <div
                            className={`flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                              step.status === "completed"
                                ? "bg-move border-move"
                                : "bg-gray-400 border-gray-400"
                            }`}
                          >
                            <Check
                              className="h-3 w-3 md:h-5 md:w-5 text-white"
                              strokeWidth={4}
                            />
                          </div>
                          <span
                            className={`absolute top-8 md:top-10 whitespace-nowrap text-[10px] md:text-sm font-medium transition-colors ${
                              step.status === "completed"
                                ? "text-move"
                                : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {status.map((order, index) => (
                <div
                  key={index}
                  className="w-full p-5 md:p-8 rounded-2xl bg-white text-black shadow-sm"
                >
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
                          {order.status}
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
              ))}
            </div>
          )}

          {activeTab == "InProgress" && (
            <>
              <div className="w-full p-5 md:p-8 rounded-2xl bg-white text-black shadow-sm">
                <div className="w-full flex flex-col gap-4 md:gap-6">
                  <div className="flex justify-end">
                    <button className="cursor-pointer text-move rounded-lg transition-all duration-200 group">
                      <MdDeleteForever className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Data Rows */}
                  <div className="space-y-3 md:space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-50 sm:border-none pb-2 sm:pb-0"
                      >
                        <span className="text-base md:text-[20px] font-normal text-[#22222280]">
                          {item.label}
                        </span>
                        <span className="text-base md:text-[20px] font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full mt-8 mb-10 px-2 md:px-10 lg:px-20">
                    <div className="relative flex items-center justify-between">
                      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>

                      {steps.map((step, index) => (
                        <div
                          key={index}
                          className="relative z-10 flex flex-col items-center"
                        >
                          <div
                            className={`flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                              step.status === "completed"
                                ? "bg-move border-move"
                                : "bg-gray-400 border-gray-400"
                            }`}
                          >
                            <Check
                              className="h-3 w-3 md:h-5 md:w-5 text-white"
                              strokeWidth={4}
                            />
                          </div>
                          <span
                            className={`absolute top-8 md:top-10 whitespace-nowrap text-[10px] md:text-sm font-medium transition-colors ${
                              step.status === "completed"
                                ? "text-move"
                                : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 md:p-8 rounded-2xl bg-white text-black shadow-sm">
                <div className="w-full flex flex-col gap-4 md:gap-6">
                  <div className="flex justify-end">
                    <button className="cursor-pointer text-move rounded-lg transition-all duration-200 group">
                      <MdDeleteForever className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Data Rows */}
                  <div className="space-y-3 md:space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-50 sm:border-none pb-2 sm:pb-0"
                      >
                        <span className="text-base md:text-[20px] font-normal text-[#22222280]">
                          {item.label}
                        </span>
                        <span className="text-base md:text-[20px] font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full mt-8 mb-10 px-2 md:px-10 lg:px-20">
                    <div className="relative flex items-center justify-between">
                      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>

                      {steps.map((step, index) => (
                        <div
                          key={index}
                          className="relative z-10 flex flex-col items-center"
                        >
                          <div
                            className={`flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                              step.status === "completed"
                                ? "bg-move border-move"
                                : "bg-gray-400 border-gray-400"
                            }`}
                          >
                            <Check
                              className="h-3 w-3 md:h-5 md:w-5 text-white"
                              strokeWidth={4}
                            />
                          </div>
                          <span
                            className={`absolute top-8 md:top-10 whitespace-nowrap text-[10px] md:text-sm font-medium transition-colors ${
                              step.status === "completed"
                                ? "text-move"
                                : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Completed" && (
            <div className="flex flex-col gap-6">
              <CardCompleted />
              <CardCompleted />
              <CardCompleted />
            </div>
          )}

          {activeTab === "Canceled" && (
            <div className="flex flex-col gap-6">
              <CardCanceled />
              <CardCanceled />
              <CardCanceled />
            </div>
          )}

          <span className="w-full flex justify-center">
            <Link
              to="/"
              onClick={() => {
                clearCart();
                toast.success("Order Success Finally!!!");
              }}
              className="p-4 flex items-center gap-5 cursor-pointer bg-move rounded-2xl text-white text-xl font-bold"
            >
              Go To Home
              <FaArrowRight className="text-xl md:text-2xl text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}
