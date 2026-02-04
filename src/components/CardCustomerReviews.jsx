import imgJohn from "../assets/images/johnImage2.jpg";
export default function CardCustomerReviews() {
  return (
    <section className="flex flex-col gap-3 bg-white p-4">
      <div className="flex gap-4">
        <img
          width={60}
          className="object-contain rounded-full"
          src={imgJohn}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-black">John Smith</h1>
          <h1 className="text-xl font-bold text-[#25D994]">
            Verified Purchase
          </h1>
        </div>
      </div>
      <h1 className="text-[16px] font-normal text-[#22222280]">
        Reviewed On 28/07/2024
      </h1>
      <div className="flex gap-5 text-black font-bold text-2xl">
        <h1>Excellent Book</h1>
        <h1>5.0</h1>
        <p className="text-Yellow">★ ★ ★ ★ ★</p>
      </div>
      <p className="text-[16px] font-normal text-[#22222280]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
        ultricies est. Aliquam in justo varius, sagittis neque ut,{" "}
      </p>
    </section>
  );
}
