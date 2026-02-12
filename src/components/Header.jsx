import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoMdTime } from "react-icons/io";
import { useState } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import johnImg from "../assets/images/johnImage2.jpg";
import Navbar from "./Navbar";
import { MdLogout, MdOutlineHelpOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../store";
import toast from "react-hot-toast";

export default function Header({ userData }) {
  const navigate = useNavigate();
  const { items, wishlist } = useCart();
  const [BarsOpen, setBarsOpen] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <header className="absolute top-0 left-0 z-50 w-full py-6 bg-[#FFFFFF33] px-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Navbar />
        {token ? (
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-8 items-center">
              <button className="relative">
                <FaRegHeart
                  onClick={() => navigate("/wishlist")}
                  className="text-3xl text-white cursor-pointer"
                />
                {wishlist.length != 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-white bg-move rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="relative">
                <FaCartShopping
                  onClick={() => navigate("/cart")}
                  className="text-3xl text-white cursor-pointer"
                />
                {items.length != 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-white bg-move rounded-full">
                    {items.length}
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex dropdown dropdown-bottom dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost border-none hover:bg-transparent p-0 min-h-0 h-auto"
                >
                  <IoIosArrowDown className="text-2xl text-white" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu flex gap-3 mt-5 bg-white text-black font-bold rounded-box z-10 w-40 p-2 shadow-md border border-gray-100"
                >
                  <li>
                    <div
                      onClick={() => navigate("/profile")}
                      className="flex gap-4"
                    >
                      <CgProfile className="text-[20px]" />
                      <h1>Profile</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <IoMdTime className="text-[20px]" />
                      <h1 className="text-[12px]">Order History</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <IoLocationOutline className="text-[20px]" />
                      <h1>Address</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <MdOutlineHelpOutline className="text-[20px]" />
                      <h1>Help</h1>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        localStorage.clear();
                        toast.success("Log Out Successfully 💯👍!!");
                        navigate("/login");
                      }}
                      className="flex gap-3"
                    >
                      <MdLogout className="text-[20px]" />
                      <h1>Log Out</h1>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                onClick={() => navigate("/profile")}
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
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
              <button className="relative">
                <FaRegHeart
                  onClick={() => navigate("/wishlist")}
                  className="text-3xl text-white cursor-pointer"
                />
                {wishlist.length != 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-white bg-move rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="relative">
                <FaCartShopping
                  onClick={() => navigate("/cart")}
                  className="text-3xl text-white cursor-pointer"
                />
                {items.length != 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-white bg-move rounded-full">
                    {items.length}
                  </span>
                )}
              </button>
              <div className=" dropdown dropdown-bottom dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost border-none hover:bg-transparent p-0 min-h-0 h-auto"
                >
                  <IoIosArrowDown className="text-2xl text-white" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu flex gap-3 mt-5 bg-white text-black font-bold rounded-box z-10 w-40 p-2 shadow-md border border-gray-100"
                >
                  <li>
                    <div
                      onClick={() => navigate("/profile")}
                      className="flex gap-4"
                    >
                      <CgProfile className="text-[20px]" />
                      <h1>Profile</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <IoMdTime className="text-[20px]" />
                      <h1 className="text-[12px]">Order History</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <IoLocationOutline className="text-[20px]" />
                      <h1>Address</h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <MdOutlineHelpOutline className="text-[20px]" />
                      <h1>Help</h1>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        localStorage.clear();
                        toast.success("Log Out Successfully 💯👍!!");
                        navigate("/login");
                      }}
                      className="flex gap-3"
                    >
                      <MdLogout className="text-[20px]" />
                      <h1>Log Out</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
