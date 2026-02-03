import { useEffect, useState } from "react";
import CardRecomendedForYou from "./CardRecomendedForYou";
import axios from "axios";
import { domain } from "../store";

export default function RecomendedForYou() {
  const url = domain + "/home";
  const [productRecommended, setProductRecommended] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProductRecommended(res.data.data.recommended);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="w-full flex justify-center bg-creamy">
        <div className="container flex flex-col gap-5 py-30 text-black px-3">
          <h1 className="text-[26px] font-bold">Recomended For You</h1>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
            {productRecommended.map((el) => (
              <CardRecomendedForYou key={el.bookId} productRecommended={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
