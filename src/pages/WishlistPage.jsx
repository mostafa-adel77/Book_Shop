import HeroSectionBooks from "../components/HeroSectionBooks";
import WishlistItem from "../components/WishlistItem";
import { FaArrowRight } from "react-icons/fa6";
import { useCart } from "../store";
import { useNavigate } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, moveToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      moveToCart(item);
    });
  };

  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <>
      <HeroSectionBooks />

      <section className="w-full flex justify-center bg-creamy pb-30 md:pb-15">
        <div className="container p-5 text-black py-20">
          <div className="w-full overflow-x-auto flex flex-col gap-4">

            <div className="grid grid-cols-6 gap-6 font-medium lg:font-bold text-xl min-w-187.5">
              <h1 className="col-span-2 text-start">Item</h1>
              <h1 className="text-center">Quantity</h1>
              <h1 className="text-center">Price</h1>
              <h1 className="text-center">Total Price</h1>
              <h1 className="text-center">Remove</h1>
            </div>

            <div className="w-full h-1 bg-gray-300 my-4"></div>

            <div className="flex flex-col gap-4 min-w-187.5 bg-white rounded-xl p-3">
              {wishlist.length === 0 ? (
                <h1 className="text-center py-10 text-gray-400">
                  Your Wishlist Is Empty 💔
                </h1>
              ) : (
                wishlist.map((el) => (
                  <WishlistItem key={el.documentId} product={el} />
                ))
              )}
            </div>
          </div>

          {/* Buttons */}
          {wishlist.length > 0 && (
            <div className="flex flex-col md:flex-row justify-center gap-4 py-13.5">
              <button
                onClick={handleMoveAllToCart}
                className="w-full md:w-50 py-3 px-6 bg-[#D9176C1A] text-move rounded-xl border-2 border-move text-xl font-semibold cursor-pointer"
              >
                Move To Cart
              </button>

              <button
                onClick={handleCheckout}
                className="w-full md:w-70 flex justify-between items-center py-3 px-6 bg-move text-white rounded-xl text-xl font-semibold cursor-pointer"
              >
                Check Out
                <span className="p-3 bg-white rounded-xl text-move">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
