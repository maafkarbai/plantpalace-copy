import Products from "./Products";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Gallery from "./Gallery";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
