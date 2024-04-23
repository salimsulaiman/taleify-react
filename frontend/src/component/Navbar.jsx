import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/image/logo.png";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const route = useNavigate();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signin = () => {
    route("/user/signin");
  };
  return (
    <nav
      className={`border-gray-200 transition-all duration-300 ${
        scrolling ? "bg-white shadow" : "bg-white md:bg-transparent"
      } fixed right-0 left-0 z-50`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-9 py-5">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-12 w-auto" alt="Flowbite Logo" width={500} height={500} />
        </Link>
        <ul className="hidden md:flex items-center justify-center">
          <li className="ms-10">
            <Link href={"/"} className="text-slate-700">
              Beranda
            </Link>
          </li>
          <li className="ms-10">
            <Link href={"/"} className="text-slate-700">
              Artikel
            </Link>
          </li>
          <li className="ms-10">
            <Link href={"/"} className="text-slate-700">
              Tentang Kami
            </Link>
          </li>
          <li className="ms-10">
            <button
              className="bg-purple-dark hover:bg-purple-semi-dark rounded-md px-4 py-2 text-white"
              onClick={signin}
            >
              Sign in
            </button>
          </li>
        </ul>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 w-10 h-10 text-sm rounded-lg  text-purple-light hover:text-purple-semi-dark focus:text-purple-semi-dark"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full ${isExpanded ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50  dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:opacity-70 dark:hover:text-white"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:opacity-70 dark:hover:text-white"
              >
                Artikel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:opacity-70 dark:hover:text-white"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-purple-light dark:hover:text-white"
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
