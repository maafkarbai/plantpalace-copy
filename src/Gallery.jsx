const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-4">Browse Our Gallery</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-2 animate-fade ease-in-out">
        <img src="Images/Gallery/G1.jpg" loading="lazy" alt="" />
        <img src="Images/Gallery/G2.jpg" loading="lazy" alt="" />
        <img src="Images/Gallery/G3.jpg" loading="lazy" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
