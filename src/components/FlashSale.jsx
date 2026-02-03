import CardFlash from "./CardFlash";

export default function FlashSale() {
  return (
    <section className="w-full flex justify-center bg-creamy py-10">
      <div className="container flex flex-col gap-10 text-black px-5">
        <h1 className="text-[26px] font-bold">Flash Sale</h1>
        <p className="text-[#22222280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et<br/>
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>

        {/* Carousel */}
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full flex justify-center gap-5">
            <CardFlash />
            <CardFlash />
            {/* الأسهم */}
            <div className="absolute left-0 right-0 top-1/2 flex justify-between px-5 -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full flex justify-center gap-5">
            <CardFlash />
            <CardFlash />
            {/* الأسهم */}
            <div className="absolute left-0 right-0 top-1/2 flex justify-between px-5 -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
