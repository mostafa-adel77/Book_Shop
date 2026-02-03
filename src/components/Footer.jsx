import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <section className="w-full bg-[#3B2F4A] flex justify-center">
      <div className="container flex flex-col px-15 py-30 gap-20">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <Navbar />
          <div className="flex gap-4 text-white text-3xl">
            <FaFacebook />
            <FaInstagram />
            <IoLogoYoutube />
            <FaXTwitter />
          </div>
        </div>
        <p className="text-gray-400">Developed By EraaSoft All Copy Rights Reserved @2024</p>
      </div>
    </section>
  );
}
