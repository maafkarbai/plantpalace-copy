import { useState } from "react";
import Plants from "./Plants.json";

const Product = () => {
  const Products = [
    { id: "001", name: "All" },
    { id: "002", name: "Flowering" },
    { id: "003", name: "Outdoor" },
    { id: "004", name: "Shrubs" },
    { id: "005", name: "Succulents" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(Plants);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredPlants = filterPlants(searchQuery, selectedCategory);
    setFilteredPlants(filteredPlants);
  };

  const filterPlants = (query, category) => {
    return Plants.filter((plant) => {
      const nameMatch = plant.name.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = category === "All" || plant.category === category;

      return nameMatch && categoryMatch;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredPlants = filterPlants(searchQuery, category);
    setFilteredPlants(filteredPlants);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-3xl text-center mb-4">Products</h2>
      <div className="searchbar">
        <form
          action="#"
          className="flex items-center justify-center gap-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="py-2 p-2 w-1/2 border-gray-300 border-b-2"
            placeholder="Search Plant Palace"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-green-500 rounded-md p-2 text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="mx-auto buttons flex gap-2 items-center justify-center">
        {Products.map((Product) => (
          <button
            className={`hover:text-green-600 p-2 ${
              selectedCategory === Product.name ? "text-green-600" : ""
            }`}
            key={Product.id}
            onClick={() => handleCategoryChange(Product.name)}
          >
            {Product.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 p-6">
        {filteredPlants.map((plant) => (
          <div
            key={plant.id}
            className="card rounded-md shadow-md p-5 border max-w-[350px] max-h-[400px] mx-auto ease-in-out hover:scale-105 duration-300 delay-75 cursor-pointer"
          >
            <img src={plant.url} className="w-80 h-56 object-cover" alt="" />
            <div className="font-semibold text-xl text-justify mx-auto">
              <p>
                {plant.name}{" "}
                <span className="italic font-extralight">
                  ({plant.scientificName})
                </span>
              </p>
              <p className="font-semibold text-left">
                Origin: {""}
                <span className="font-normal text-gray-500">
                  {plant.originCountry}{" "}
                </span>{" "}
              </p>
              <p className="text-green-400">${plant.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
