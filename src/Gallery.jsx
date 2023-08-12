const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 p-6" id="Gallery">
      <h2 className="text-3xl text-center  mb-4 bg-accent p-2 text-[#334741]">
        Gallery
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 animate-fade ease-in-out">
        <img
          src="Images/Gallery/G1.jpg"
          className="  mx-auto rounded-lg cursor-pointer opacity-95 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
          alt="Plant Pot Image1 "
        />
        <img
          src="Images/Gallery/G2.jpg"
          className=" rounded-lg  mx-auto cursor-pointer opacity-95 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
          alt="Plant Pot Image2"
        />
        <img
          src="Images/Gallery/G3.jpg"
          className="rounded-lg  mx-auto cursor-pointer opacity-95 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
          alt="Plant Pot Image3"
        />
      </div>
    </section>
  );
};

export default Gallery;
