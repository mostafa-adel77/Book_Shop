import imgcard1 from "../assets/images/imgcard1.png";
import imgcard2 from "../assets/images/imgcard2.png";
import imgcard3 from "../assets/images/imgcard3.png";
import imgcard4 from "../assets/images/imgcard4.jpg";
import imgcard5 from "../assets/images/imgcard5.jpg";
import imgcard6 from "../assets/images/imgcard6.jpg";
import imgcard7 from "../assets/images/imgcard7.jpg";
import imgcard8 from "../assets/images/imgcard8.png";
export default function BestSeller() {
  return (
    <section className="w-full flex justify-center bg-[#3B2F4A]">
      <div className="container flex flex-col items-center py-30 gap-10">
        <h1 className="text-[26px] font-bold">Best Seller</h1>
        <p className="text-[#FFFFFF80]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          <br /> ultricies est. Aliquam in justo varius, sagittis neque ut,
          malesuada leo.
        </p>
        <div className="w-full">
          <marquee direction="left" scrollamount="5">
            <div className="flex gap-4">
              <img width={173} height={260} src={imgcard1} alt="" />
              <img width={173} height={260} src={imgcard2} alt="" />
              <img width={173} height={260} src={imgcard3} alt="" />
              <img width={173} height={260} src={imgcard4} alt="" />
              <img width={173} height={260} src={imgcard5} alt="" />
              <img width={173} height={260} src={imgcard6} alt="" />
              <img width={173} height={260} src={imgcard7} alt="" />
              <img width={173} height={260} src={imgcard8} alt="" />
            </div>
          </marquee>
        </div>
        <button className="w-60 font-semibold bg-move text-white p-4 flex items-center justify-center gap-3 rounded-2xl hover:cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
}
