
export default function HeroSectionAbout() {
  return (
    <>
    <section className="relative w-full h-150 md:h-175 bg-[url('/library.png')] bg-cover bg-center pt-22">      
      <div className="container mx-auto flex justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="w-full md:w-163 text-white flex flex-col gap-5 absolute z-20 top-70 justify-center items-center">
            <h1 className="text-[48px] font-bold">About Bookshop</h1>
            <p className="text-[24px] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
        </div>
      </section>
    </>
  )
}
