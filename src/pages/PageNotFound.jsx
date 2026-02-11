import { FaArrowLeft } from "react-icons/fa";
import PageNotFoundImg from "../assets/images/PageNotFoundImg.png";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-dvh flex justify-center bg-creamy">
      <div className="container flex flex-col justify-center items-center pb-50 md:pb-20">
        <img className="w-150" src={PageNotFoundImg} alt="" />
        <button
          onClick={() => navigate("/")}
          className="text-xl flex gap-4 items-center font-bold bg-black px-6 py-4 rounded-4xl text-white hover:cursor-pointer hover:text-white border-2 hover:border-white"
        >
          <span className="text white">
            <FaArrowLeft />
          </span>
          Back To Home
        </button>
      </div>
    </section>
  );
}
