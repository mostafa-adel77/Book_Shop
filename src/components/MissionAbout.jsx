import { Link } from "react-router-dom";

export default function MissionAbout() {
  return (
    <>
      <section className="w-full flex justify-center bg-creamy py-30">
        <div className="container flex flex-col items-center gap-8 text-black">
          <h1 className="text-[34px] font-bold">Our Mission</h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 justify-center gap-5">
            <div className="w-90 rounded-xl shadow-xl bg-white border border-black flex flex-col gap-4 p-6">
              <h1 className="text-[22px] font-bold">Quality Selection</h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris et ultricies est. Aliquam in justo varius, sagittis
                neque ut, malesuada leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est.
                Aliquam in justo varius.
              </p>
              <Link className="text-[16px] text-move">
                Read more →
              </Link>
            </div>
            <div className="w-90 rounded-xl shadow-xl bg-white border border-black flex flex-col gap-4 p-6">
              <h1 className="text-[22px] font-bold">Exceptional Service</h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris et ultricies est. Aliquam in justo varius, sagittis
                neque ut, malesuada leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est.
                Aliquam in justo varius.
              </p>
              <Link className="text-[16px] text-move">
                View more →
              </Link>
            </div>
            <div className="w-90 rounded-xl shadow-xl bg-white border border-black flex flex-col gap-4 p-6">
              <h1 className="text-[22px] font-bold">Set Up Stores</h1>
              <p className="text-[#22222280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris et ultricies est. Aliquam in justo varius, sagittis
                neque ut, malesuada leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est.
                Aliquam in justo varius.
              </p>
              <Link className="text-[16px] text-move">
                Soon →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
