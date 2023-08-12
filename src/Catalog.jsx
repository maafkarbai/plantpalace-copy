const Catalog = () => {
  const decription = [
    {
      id: "C1",
      title: "Outdoor Plants",
      description:
        "Explore a wide selection of succulent and cactus plants for online shopping. Perfect for cactus enthusiasts and succulent collectors.",
      image: "Images/Flowers/Outdoor/Cactus.jpg",
    },
    {
      id: "C2",
      title: "Flowering",
      description:
        "Choose from a diverse range of bonsai plants that elevate your surroundings and purify the air. Find the perfect fit for your environment.",
      image: "Images/Flowers/Flowering/Iris.jpg",
    },
    {
      id: "C3",
      title: "Shrubs",
      description:
        "Discover the ultimate online nursery for blooming plants, including flowers, lilies, orchids, and plumeria. Your destination for purchasing flowering plants.",
      image: "Images/Flowers/Shrubs/Oleander.jpg",
    },
    {
      id: "C4",
      title: "Succulents",
      description:
        "Browse a diverse selection of succulent and cactus plants online. A delightful treat for cactus and succulent enthusiasts.",
      image: "Images/Flowers/Succulents/Echeveria.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 p-6">
      <h2 className="text-3xl text-center  mb-4 bg-accent p-2 text-[#334741]">
        Browse Catalog
      </h2>
      <a className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 text-center p-6 cursor-pointer ">
        {decription.map((item) => (
          <div
            className="CatalogCard max-h-[500px] gap-2 ease-in-out duration-300 hover:shadow-xl hover:border hover:scale-110 p-2"
            key={item.id}
          >
            <img
              src={item.image}
              className="w-52 h-56 rounded-full object-cover mx-auto"
            />
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </a>
    </section>
  );
};

export default Catalog;
