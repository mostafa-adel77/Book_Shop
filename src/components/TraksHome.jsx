import { LiaShippingFastSolid } from "react-icons/lia";
import credit from "../assets/images/credit-card-buyer 1.png";
import vector from "../assets/images/Vector.png";
import vector1 from "../assets/images/Vector (1).png";
export default function TraksHome() {
  return (
      <section className="w-full flex justify-center bg-creamy">
        <div className="container">
          <div className="w-full py-30 pl-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-13 text-black">
            <div className="flex flex-col gap-4">
              <LiaShippingFastSolid className="text-[20px] text-[#22222280]" />
              <h1 className="text-[18px] font-bold">
                Fast & Reliable Shipping
              </h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src={credit} className="w-5 text-[#22222280]" />
              <h1 className="text-[18px] font-bold">Secure Payment</h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src={vector} className="w-5 text-[#22222280]" />
              <h1 className="text-[18px] font-bold">Easy Returns</h1>

              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src={vector1} className="w-5 text-[#22222280]" />
              <h1 className="text-[18px] font-bold">24/7 Customer Support</h1>

              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
