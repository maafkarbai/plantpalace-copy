import Products from "./Products";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Gallery from "./Gallery";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
