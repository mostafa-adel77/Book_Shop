import { Link } from "react-router-dom";
import HeroSectionHome from "../components/HeroSectionHome";

export default function AddCodePage() {
  return (
    <>
      <HeroSectionHome />
      <section className="w-full flex justify-center bg-creamy">
        <div className="container flex justify-center py-15">
          <div className="flex flex-col items-center gap-7 text-black">
            <h1 className="text-xl text-move font-semibold">
              Reset your password!
            </h1>
            <p className="text-[14px] text-[#22222280] font-normal">
              Enter the 4 dights code that you received on your email
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                className="input rounded-lg p-3 w-10 bg-white border-2 border-[#22222280]"
              />
              <input
                type="text"
                className="input rounded-lg p-3 w-10 bg-white border-2 border-[#22222280]"
              />
              <input
                type="text"
                className="input rounded-lg p-3 w-10 bg-white border-2 border-[#22222280]"
              />
              <input
                type="text"
                className="input rounded-lg p-3 w-10 bg-white border-2 border-[#22222280]"
              />
            </div>
            <Link
              to="/resetPassword"
              className="w-full md:w-55 bg-move text-white text-center p-4 rounded-2xl hover:cursor-pointer"
            >
              Reset password
            </Link>
            <span>
              Didn’t receive a code?
              <Link className="text-lg text-move font-bold"> Send again</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
