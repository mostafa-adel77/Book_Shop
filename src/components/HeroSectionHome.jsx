import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function HeroSectionHome() {
  const location = useLocation();
  const showSearch = location.pathname == "/";

  return (
    <section className="relative w-full h-120 md:h-150 bg-[url('/library.png')] bg-cover bg-center">
      <div className="container mx-auto flex justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Search */}
        {showSearch && (
          <div className="absolute w-80 lg:w-134 pt-90 md:pt-70 z-20">
            <div className="flex items-center mx-auto overflow-hidden rounded-full bg-white shadow-md">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-5 py-3 text-gray-700 outline-none"
              />

              <button className="px-4 text-gray-500">
                <FaMicrophone />
              </button>

              <button className="bg-move px-6 py-5 text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
