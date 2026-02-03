import HeroSectionBooks from "../components/HeroSectionBooks";
import filter from "../assets/images/settings-sliders (1) 1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import imgcard1 from "../assets/images/imgcard1.png";
import imgreviewcard1 from "../assets/images/reviewCard5.png";
import CardBooks from "../components/CardBooks";
export default function BooksPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [SearchValue, setSearchValue] = useState("");
  const [category] = useState([
    { name: "Business" },
    { name: "Kids" },
    { name: "Art" },
    { name: "History" },
    { name: "Romance" },
    { name: "Fantasy" },
    { name: "Self Help" },
    { name: "Cooking" },
    { name: "Sports" },
  ]);
  const [publisher] = useState([
    { name: "Paulo coelo" },
    { name: "Jane Austen" },
    { name: "Charles Dickens" },
    { name: "Mark Twain" },
    { name: "Virginia Woolf " },
    { name: "Leo Tolstoy" },
    { name: "Fyodor Dostoevsky" },
    { name: "Haruki Murakami" },
    { name: "Gabriel Márquez" },
    { name: "Chinua Achebe" },
  ]);
  const [year] = useState([
    { year: 2024 },
    { year: 2023 },
    { year: 2022 },
    { year: 2021 },
    { year: 2020 },
    { year: 2019 },
    { year: 2018 },
    { year: 2017 },
    { year: 2016 },
    { year: 2015 },
  ]);
  const [products, setProducts] = useState([
    {
      img: `${imgcard1}`,
      name: "Rich Dad And Poor Dad",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      author: "Robert T. Kiyosaki",
      imgreview: `${imgreviewcard1}`,
      year: 1997,
      price: 40,
      discount: "25% Discount code: Ne212",
    },
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
          <div className="flex flex-col gap-6">
            <div className="w-full lg:w-70 flex flex-col gap-8 text-black">
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
            <div className="w-full lg:w-70 flex flex-col gap-8 text-black">
              <div className="bg-white rounded-2xl p-4">
                <details className="collapse flex flex-col">
                  <summary className="collapse-title flex justify-between items-center">
                    <h1 className="font-semibold text-move">Publisher</h1>
                    <IoMdArrowDropdown className="text-black text-2xl" />
                  </summary>

                  <div className="collapse-content text-sm flex flex-col gap-4">
                    {publisher.map((el, index) => (
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
            <div className="w-full lg:w-70 flex flex-col gap-8 text-black">
              <div className="bg-white rounded-2xl p-4">
                <details className="collapse flex flex-col">
                  <summary className="collapse-title flex justify-between items-center">
                    <h1 className="font-semibold text-move">Year</h1>
                    <IoMdArrowDropdown className="text-black text-2xl" />
                  </summary>
                  <div className="collapse-content text-sm flex flex-col gap-4">
                    {year.map((el, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input type="checkbox" className="w-4 h-4" />
                        <h1>{el.year}</h1>
                      </label>
                    ))}
                  </div>
                </details>
              </div>
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
                  onClick={() => setActiveIndex(index)}
                  className={`w-20 px-1 py-2 font-normal rounded-lg cursor-pointer ${activeIndex == index ? "bg-move text-white" : "bg-creamy border border-gray-400 text-black"}`}
                >
                  {el.name}
                </button>
              ))}
            </div>

            <div className="w-full flex flex-col gap-10">
              <div className="flex gap-5">
                {products.map((el, index) => (
                  <CardBooks key={index} el={el} />
                ))}
              </div>
              <div className="flex gap-5">
                {products.map((el, index) => (
                  <CardBooks key={index} el={el} />
                ))}
              </div>
              <div className="flex gap-5">
                {products.map((el, index) => (
                  <CardBooks key={index} el={el} />
                ))}
              </div>
            </div>

            <div className="join flex justify-center gap-3 py-8">
              <button className="join-item btn btn-active bg-move text-white border-move">1</button>
              <button className="join-item btn bg-white text-black">2</button>
              <button className="join-item btn bg-white text-black">3</button>
              <button className="join-item btn bg-white text-black">4</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
