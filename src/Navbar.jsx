import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className="fixed w-full p-5 font-extralight text-lg py-7 bg-white shadow-sm z-50">
      <nav className="flex gap-8 justify-between max-w-7xl mx-auto">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className="md:flex gap-5 items-center hidden">
          <li className="hover:text-green-600">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-green-600">
            <a href="#Gallery">Gallery</a>
          </li>
          <li className="group relative">
            <Link to={"/"} className="hover:text-green-600">
              Catalog
            </Link>
            <div className="absolute hidden group-hover:block bg-accent">
              <ul className="flex flex-col hover:animate-fade-in gap-2 items-start justify-between p-5 rounded-b-md text-white">
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Flowering</a>
                </li>
                <li>
                  <a href="#">Outdoor</a>
                </li>
                <li>
                  <a href="#">Shrubs</a>
                </li>
                <li>
                  <a href="#">Succulents</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="hover:text-green-600">
            <Link to={"/Contact"}>Feedback</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </nav>

      <nav
        className={`mobilenavbar absolute animate-fade w-full opacity-90  p-7 text-white font-semibold z-100 top-24 bg-[#22c55e] right-0 left-0 rounded-b-md md:hidden ${
          isMobileNavVisible ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 items-center justify-around">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-center">
            <div className="block">
              <ul className="flex flex-col gap-5 items-center text-white catalogs">
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Flowering</a>
                </li>
                <li>
                  <a href="#">Outdoor</a>
                </li>
                <li>
                  <a href="#">Shrubs</a>
                </li>
                <li>
                  <a href="#">Succulents</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"/Contact"}>Feedback</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
