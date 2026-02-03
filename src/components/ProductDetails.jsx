import HeroSectionBooks from "./HeroSectionBooks";
import imgcard1 from "../assets/images/imgcard1.png";
import imgreviewcard1 from "../assets/images/reviewCard5.png";
import { useState } from "react";
import CardProductDetails from "./CardProductDetails";
import ProductDetailsFeature from "./ProductDetailsFeature";

export default function ProductDetails() {
  const [products, setProducts] = useState([
    {
      img: `${imgcard1}`,
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
  ]);
  return (
    <>
      <HeroSectionBooks />
      <section className="w-full bg-creamy">
        <div className="container mx-auto flex flex-col gap-20 py-15">
          {products.map((el, index) => (
            <CardProductDetails key={index} el={el} />
          ))}
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 md:gap-10 lg:gap-30">
              <h1 className="text-black text-[14px] md:text-2xl font-bold">Product Details</h1>
              <h1 className="text-[#22222280] text-[14px] md:text-2xl font-bold">Customer Reviews</h1>
              <h1 className="text-[#22222280] text-[14px] md:text-2xl font-bold">Recomended For You</h1>
            </div>
            <div className="w-full bg-gray-300 h-1"></div>
            {products.map((el, index) => (
              <ProductDetailsFeature el={el} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
