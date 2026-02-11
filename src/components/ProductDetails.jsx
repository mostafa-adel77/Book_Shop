import { useParams } from "react-router-dom";
import HeroSectionBooks from "./HeroSectionBooks";
import CardProductDetails from "./CardProductDetails";
import ProductDetailsFeature from "./ProductDetailsFeature";
import CustomerReviews from "./CustomerReviews";
import CardFlash from "./CardFlash";

import imgcard1 from "../assets/images/imgcard1.png";
import imgcard2 from "../assets/images/imgcard2.png";
import imgcard3 from "../assets/images/imgcard3.png";
import imgreviewcard1 from "../assets/images/reviewCard5.png";

import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  const products = [
    {
      img: `${imgcard1}`,
      documentId: "book-1",
      name: "Rich Dad And Poor Dad",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      author: "Robert T. Kiyosaki",
      imgreview: `${imgreviewcard1}`,
      year: 1997,
      price: 40,
      discount: "Discount code: Ne212",
      book: "1 Of 1",
      pages: 336,
      language: "English",
      asin: "B09TWSRMCB",
      Publisher: "Printer",
      BookFormat: "Hard Cover",
      BestSellerRank: "#3",
    },
    {
      img: imgcard2,
      documentId: "book-2",
      name: "The Design Of Everyday Things",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Jane Austen",
      imgreview: imgreviewcard1,
      year: 2020,
      price: 50,
      book: "1 Of 1",
      pages: 336,
      discount: "Discount code: Ne212",
      language: "English",
      asin: "B09TWSRMCB",
      Publisher: "Printer",
      BookFormat: "Hard Cover",
      BestSellerRank: "#3",
    },
    {
      img: imgcard3,
      documentId: "book-3",
      name: "Power",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Charles Dickens",
      imgreview: imgreviewcard1,
      year: 2021,
      price: 35,
      book: "1 Of 1",
      pages: 336,
      discount: "Discount code: Ne212",
      language: "English",
      asin: "B09TWSRMCB",
      Publisher: "Printer",
      BookFormat: "Hard Cover",
      BestSellerRank: "#3",
    },
  ];

  const product = products.find((el) => el.documentId === id);

  if (!product) return <h1 className="text-center py-20">Product Not Found</h1>;

  return (
    <>
      <HeroSectionBooks />
      <section className="w-full bg-creamy">
        <div className="container mx-auto flex flex-col gap-20 py-15">
          <CardProductDetails el={product} />

          {/* Tabs */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-10 border-b text-lg md:text-2xl font-bold p-1 md:p-0">
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-3 cursor-pointer ${
                  activeTab === "details"
                    ? "border-b-2 border-orange-500 text-black"
                    : "text-gray-400"
                }`}
              >
                Product Details
              </button>

              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-3 cursor-pointer ${
                  activeTab === "reviews"
                    ? "border-b-2 border-orange-500 text-black"
                    : "text-gray-400"
                }`}
              >
                Customer Reviews
              </button>

              <button
                onClick={() => setActiveTab("recommended")}
                className={`pb-3 cursor-pointer ${
                  activeTab === "recommended"
                    ? "border-b-2 border-orange-500 text-black"
                    : "text-gray-400"
                }`}
              >
                Recommended For You
              </button>
            </div>

            <div className="w-full bg-gray-300 h-0.5"></div>

            {activeTab === "details" && (
              <div className="p-3">
                <ProductDetailsFeature el={product} />
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <CustomerReviews />
              </div>
            )}

            {activeTab === "recommended" && (
              <div className="carousel w-full">
                <div
                  id="slide1"
                  className="carousel-item relative w-full flex justify-center gap-5"
                >
                  <CardFlash />
                  <CardFlash className="hidden md:flex" />
                  <div className="absolute left-0 right-0 top-60 md:top-35 lg:top-20 xl:top-35 flex justify-between px-5">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div
                  id="slide2"
                  className="carousel-item relative w-full flex justify-center gap-5"
                >
                  <CardFlash />
                  <CardFlash className="hidden md:flex" />
                  <div className="absolute left-0 right-0 top-1/2 flex justify-between px-5 -translate-y-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
