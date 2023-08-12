import Products from "./Products";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
