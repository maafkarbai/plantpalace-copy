import Catalog from "./Catalog";
const Hero = () => {
  return (
    <main className="animate-fade p-6">
      <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 max-w-6xl mx-auto h-[85dvh] items-center">
        <div className="flex gap-5 justify-evenly text-5xl items-center flex-col text-center md:text-justify">
          <p className="text-5xl md:text-left">
            Best Place to buy indoor and outdoor
            <span className="text-accent"> Plants</span>
          </p>
          <p className="text-lg md:text-start w-full text-[#42682f]">
            To plant a garden is to believe in tomorrow
          </p>
          <div className="buttons text-sm font-bold flex gap-3 text-white md:items-start md:justify-start justify-center w-full">
            <button className="p-3 bg-accent rounded-lg hover:scale-105 ease-in-out hover:shadow-green-300 shadow-md duration-150">
              Shop Now
            </button>
            <button className=" p-3 bg-accent rounded-lg hover:scale-105 ease-in-out hover:shadow-green-300 shadow-md duration-150">
              About Us
            </button>
          </div>
        </div>
        <div className="flex text-justify text-6xl items-center flex-col lg:row-auto row-start-1 row-end-2">
          <img src="Images/HeroImage.jpg" alt="Background" />
        </div>
      </section>
      <Catalog />
    </main>
  );
};

export default Hero;
