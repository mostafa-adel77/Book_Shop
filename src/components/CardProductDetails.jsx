import facebook from "../assets/images/facebook2.png";
import instagram from "../assets/images/instgram2.png";
import twiterX from "../assets/images/twitterx.png";
import whatsapp from "../assets/images/whatsapp.png";
import share from "../assets/images/share.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";
import { useCart } from "../store";

export default function CardProductDetails({ el }) {
  const { decrementQty, incrementQty, addToCart, addToWishlist } = useCart();
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 p-2">
      <img src={el.img} className="w-full lg:w-78" alt="" />
      <div className="w-full flex flex-col gap-10">
        <div className="top w-full flex flex-col gap-4 xl:flex-row justify-between">
          <div className="left flex flex-col gap-6 w-full md:w-150">
            <h2 className="text-xl font-bold text-black">{el.name}</h2>
            <p className="text-gray-500 text-sm">{el.desc}</p>
          </div>
          <div className="right flex gap-6">
            <img className="w-9 h-9 object-contain" src={facebook} alt="" />
            <img className="w-9 h-9 object-contain" src={instagram} alt="" />
            <img className="w-9 h-9 object-contain" src={twiterX} alt="" />
            <img className="w-9 h-9 object-contain" src={whatsapp} alt="" />
            <img className="w-9 h-9 object-contain" src={share} alt="" />
          </div>
        </div>
        <div className="bottom w-full flex flex-col gap-10">
          <div className="flex gap-3 md:gap-20 lg:gap-10 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">Author</p>
              <p className="font-medium text-black">{el.author}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">Publication Year</p>
              <p className="font-medium text-black">{el.year}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">Book</p>
              <p className="font-medium text-black">{el.book}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">pages</p>
              <p className="font-medium text-black">{el.pages}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">Language</p>
              <p className="font-medium text-black">{el.language}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 justify-between">
            <img src={el.imgreview} className="object-contain" alt="" />
            <div className="flex flex-col md:flex-row gap-3">
              <h1 className="p-3 rounded-xl bg-white text-green-500">
                ✅ In Stock
              </h1>
              <span className="rounded-xl p-2 flex items-center gap-3 bg-white text-[#22222280]">
                <LiaShippingFastSolid className="text-[20px]" />
                <h1>Free Shipping Today</h1>
              </span>
              <span className="p-3 rounded-xl border-2 border-Yellow bg-white">
                <h1 className="text-lg text-Yellow">{el.discount}</h1>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-black text-2xl font-bold">
            <span className="flex gap-3">
              <h1>${el.price}.00</h1>
              <del className="text-[#22222280]">${el.price}.00</del>
            </span>
            <div className="flex flex-col md:flex-row items-center gap-6 text-move">
              <div className="flex justify-center items-center gap-3 text-move">
                <FiMinusCircle
                  onClick={() => decrementQty(el.documentId)}
                  className="text-xl cursor-pointer"
                />

                <span className="px-3 text-black py-1 bg-gray-100 rounded-md">
                  {el.qty}
                </span>

                <LuCirclePlus
                  onClick={() => incrementQty(el.documentId)}
                  className="text-xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={() => addToCart(el)}
                  className="bg-move text-white px-6 py-3 flex justify-center items-center gap-2 rounded-2xl hover:cursor-pointer"
                >
                  Add To Cart
                  <FaShoppingCart className="text-xl" />
                </button>

                <button
                  onClick={() => addToWishlist(el)}
                  className="border-2 border-move p-3 rounded-xl flex justify-center hover:cursor-pointer"
                >
                  <FaRegHeart className="text-2xl text-move" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
