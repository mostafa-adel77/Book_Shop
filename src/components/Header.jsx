import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import johnImg from "../assets/images/johnImg.png";
import Navbar from "./Navbar";

export default function Header({ userData }) {
  const navigate = useNavigate();
  const [BarsOpen, setBarsOpen] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <header className="absolute top-0 left-0 z-50 w-full py-6 bg-[#FFFFFF33] px-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Navbar />
        {token ? (
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-8 items-center">
              <FaRegHeart
                onClick={() => navigate("/wishlist")}
                className="text-white text-3xl hover:cursor-pointer"
              />
              <FaCartShopping
                onClick={() => navigate("/cart")}
                className="text-white text-3xl hover:cursor-pointer"
              />
            </div>

            <div className="flex gap-2">
              <img
                onClick={() => navigate("/profile")}
                className="object-contain hover:cursor-pointer"
                width={40}
                height={40}
                src={johnImg}
                alt="User"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">
                  {userData?.first_name} {userData?.last_name}
                </h1>
                <p className="text-[#ffffff93]">{userData?.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-3 bg-move rounded-xl hover:cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-3 bg-white text-move rounded-xl hover:cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        )}

        <FaBars
          onClick={() => setBarsOpen(!BarsOpen)}
          className="md:hidden text-3xl text-Gray cursor-pointer"
        />

        {BarsOpen && (
          <div className="absolute top-full left-0 w-full md:hidden mt-4 flex flex-col gap-6 text-Gray text-lg font-semibold p-6 shadow-lg">
            <Link to="/" onClick={() => setBarsOpen(false)}>
              Home
            </Link>
            <Link to="books" onClick={() => setBarsOpen(false)}>
              Books
            </Link>
            <Link to="aboutus" onClick={() => setBarsOpen(false)}>
              About Us
            </Link>
            <div className="flex gap-8 items-center">
              <FaRegHeart
                onClick={() => navigate("/wishlist")}
                className="text-white text-3xl"
              />
              <FaCartShopping
                onClick={() => navigate("/cart")}
                className="text-white text-3xl"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
