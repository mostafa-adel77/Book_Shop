import { FiMinusCircle } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../store";
import { LiaShippingFastSolid } from "react-icons/lia";
export default function WishlistItem({product}) {
  const { decrementWishlistQty, incrementWishlistQty, removeFromWishlist } = useCart();
  return (
    <div className="grid grid-cols-6 items-center gap-6 py-4 border-b last:border-b-0 min-w-187.5">
      {/* Item */}
      <div className="col-span-2 flex gap-4">
        <img
          src={product.img}
          className="w-27 h-full object-cover rounded-lg"
          alt={product.name}
        />

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-black">{product.name}</h1>

          <span className="text-sm text-gray-400">
            Author:
            <span className="text-black ml-1">{product.author}</span>
          </span>

          <p className="text-sm text-gray-500">{product.desc}</p>
          <span className="w-34.5 text-[14px] font-normal rounded-xl p-2 flex items-center justify-center gap-2 border border-[#22222280] text-[#22222280]">
            <LiaShippingFastSolid className="text-[20px]" />
            <h1>Free Shipping</h1>
          </span>
          <span className="text-sm font-bold text-[#22222280]">
            Asin:
            <span className="font-normal ml-1">{product.asin}</span>
          </span>
        </div>
      </div>

      {/* Qty */}
      <div className="flex justify-center items-center gap-3 text-move">
        <FiMinusCircle
          onClick={() => decrementWishlistQty(product.documentId)}
          className="text-xl cursor-pointer"
        />

        <span className="px-3 py-1 bg-gray-100 rounded-md">{product.qty}</span>

        <LuCirclePlus
          onClick={() => incrementWishlistQty(product.documentId)}
          className="text-xl cursor-pointer"
        />
      </div>

      {/* Price */}
      <h1 className="text-center font-medium">${product.price}.00</h1>

      {/* Total */}
      <h1 className="text-center font-bold">${product.price * product.qty}</h1>

      {/* Remove */}
      <div className="flex justify-center">
        <MdDeleteForever
          onClick={() => removeFromWishlist(product.documentId)}
          className="text-red-500 cursor-pointer text-2xl hover:scale-110 transition"
        />
      </div>
    </div>
  );
}
