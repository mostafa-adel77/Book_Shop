import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store";

export default function CardBooks({ el }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useCart();
  return (
    <div className="w-full flex flex-col md:flex-row rounded-2xl shadow-md p-5 gap-6">
      <img
        src={el.img}
        onClick={() => navigate(`/productdetails/${el.documentId}`)}
        alt=""
        className="w-full md:w-43.5 object-cover cursor-pointer"
      />

      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="flex flex-col gap-4 w-full  md:max-w-[50%]">
          <h2 className="text-xl font-bold text-black">{el.name}</h2>
          <p className="text-gray-500 text-sm">{el.desc}</p>

          <img src={el.imgreview} alt="" className="w-30" />

          <div className="flex gap-10 text-sm">
            <div className="flex flex-col gap-4">
              <p className="text-gray-400">Author</p>
              <p className="font-medium text-black">{el.author}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-400">Year</p>
              <p className="font-medium text-black">{el.year}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-between">
          <div className="p-3 rounded-xl border-2 border-Yellow bg-white">
            <h1 className="text-lg text-Yellow">{el.discount}</h1>
          </div>
          <div className="flex flex-col gap-6 justify-end text-black">
            <p className="text-2xl font-bold text-end">$ {el.price}.00</p>

            <div className="flex flex-col xl:flex-row gap-3">
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
  );
}
