import HeroSectionBooks from "../components/HeroSectionBooks";
import filter from "../assets/images/settings-sliders (1) 1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [SearchValue, setSearchValue] = useState("");
  const [category] = useState([
    { name: "technology" },
    { name: "books" },
    { name: "foods" },
  ]);

  const [product, setProduct] = useState([
    { name: "iphone 12", price: 1000, relation:"technology" },
    { name: "oppo", price: 1200, relation:"technology" },
    { name: "samsung", price: 1500, relation:"technology" },
    { name: "Labtop", price: 30000, relation:"technology" },
    { name: "camera", price: 10000, relation:"technology" },
    { name: "TV", price: 20000, relation:"technology" },
    { name: "math", price: 900, relation:"books" },
    { name: "history", price: 900, relation:"books" },
    { name: "scince", price: 900, relation:"books" },
    { name: "English", price: 900, relation:"books" },
    { name: "pizza", price: 400, relation:"foods" },
    { name: "burger", price: 500, relation:"foods" },
  ]);
  const [view, setView] = useState(category);

  useEffect(() => {
    const final = category.filter((el) =>
      el.name.toLowerCase().includes(SearchValue.toLowerCase()),
    );
    setView(final);
  }, [SearchValue, category]);

  return (
    <>
      <HeroSectionBooks />

      <div className="w-full flex justify-center bg-creamy">
        <div className="container w-full flex flex-col lg:flex-row gap-6 py-10 px-4">
          {/* Filter */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8 text-black">
            <div className="flex items-center gap-3">
              <img width={24} src={filter} alt="" />
              <h1 className="text-xl font-bold">Filter</h1>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <details className="collapse flex flex-col">
                <summary className="collapse-title flex justify-between items-center">
                  <h1 className="font-semibold text-move">Categories</h1>
                  <IoMdArrowDropdown className="text-black text-2xl" />
                </summary>

                <div className="collapse-content text-sm flex flex-col gap-4">
                  {view.map((el, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <h1>{el.name}</h1>
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </div>

          {/* Content */}
          <div className="w-full flex flex-col lg:w-3/4 lg:border-l-4 border-[#43424280] lg:px-6">
            <div className="w-full flex flex-col md:flex-row gap-4 items-start">
              {/* Search */}
              <div className="flex w-full md:w-2/3 items-center overflow-hidden rounded-full bg-white shadow-md h-14">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 px-5 text-gray-700 outline-none h-full"
                />

                <button className="px-4 text-gray-500">
                  <FaMicrophone />
                </button>

                <button className="px-6 h-full text-move border-l-2 border-move">
                  <FaSearch />
                </button>
              </div>

              {/* Sort */}
              <div className="w-full md:w-1/3 relative">
                <details className="bg-white rounded-full shadow-md">
                  <summary className="flex justify-between items-center px-5 h-14 cursor-pointer">
                    <h1 className="font-semibold text-move">Sort by</h1>
                    <IoMdArrowDropdown className="text-black text-2xl" />
                  </summary>

                  <div
                    className="absolute top-full left-0 mt-2 w-full
                    bg-white rounded-2xl shadow-lg z-50
                    flex flex-col gap-3 px-5 py-4
                    text-sm font-semibold text-[#22222280]"
                  >
                    <h1 className="cursor-pointer hover:text-black">
                      Price: Low to High
                    </h1>
                    <h1 className="cursor-pointer hover:text-black">
                      Price: High to Low
                    </h1>
                    <h1 className="cursor-pointer hover:text-black">
                      Publication Date
                    </h1>
                    <h1 className="cursor-pointer hover:text-black">
                      Best Seller
                    </h1>
                  </div>
                </details>
              </div>
            </div>
            <div className="flex gap-5 py-6">
              {category.map((el, index) => (
                <button
                  key={index}
                  className="w-30 p-4 bg-move text-white font-bold rounded-lg cursor-pointer"
                >
                  {el.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-5">
              {product.map((el, index) => (
                <div key={index} className="card w-50 shadow-sm text-black">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{el.name}</h2>
                    <p>$ {el.price}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">{el.relation}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
