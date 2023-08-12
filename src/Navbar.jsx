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
            <Link to={"#Gallery"}>Gallery</Link>
          </li>
          <li className="group relative">
            <Link to={"/"} className="hover:text-green-600">
              Catalog
            </Link>
            <div className="absolute hidden group-hover:block bg-green-600">
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
            <Link to={"/"}>Feedback</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to={"/"}>Contact</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
        </ul>
        <div className="">
          <a href="">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
        </div>
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
        className={`mobilenavbar absolute animate-fade w-full p-7 text-white font-semibold z-100 top-24 bg-[#22c55e] right-0 left-0 rounded-b-md md:hidden ${
          isMobileNavVisible ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 items-center justify-around">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-center">
            <Link to={"/"}>Catalog</Link>
            <div className="block">
              <ul className="flex flex-col items-center text-white catalogs">
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
            <Link to={"/"}>Feedback</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
