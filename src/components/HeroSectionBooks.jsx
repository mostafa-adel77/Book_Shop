
export default function HeroSectionBooks() {
  return (
    <section className="relative w-full h-90 md:h-40 bg-[url('/library.png')] bg-cover bg-center pt-22">      
      <div className="container mx-auto flex justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="w-full md:w-163 text-white flex flex-col gap-5 absolute z-20 top-70 justify-center items-center">
          </div>
        </div>
      </section>
  )
}
