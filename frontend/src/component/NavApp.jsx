import React from "react";
// components/Navbar.js
import { useState, useEffect } from "react";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaBell, FaHome, FaSearch } from "react-icons/fa";
import ModalSearch from "./ModalSearch";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import Logo from "../assets/image/logo.png";
import Profile from "../assets/image/profile-user.png";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/action/userAction";
import { setSearchQuery } from "../redux/action/literationAction";

const NavApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  const { data, isLoading } = useSelector((state) => state.user);
  const { searchQuery } = useSelector((state) => state.literation);

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const stringToSlug = (str) => {
    str = str.trim().toLowerCase();

    str = str.replace(/\s+/g, "-");

    str = str.replace(/[^\w-]/g, "");

    return str;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/user/literations/search?title=${stringToSlug(search)}`);
    setSearch(""); // Clear the input field
    document.getElementById("searchModal").close();
  };

  useEffect(() => {
    dispatch(userData());
  }, [location, dispatch]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      const searchModal = document.getElementById("searchModal");
      if (searchModal.open) {
        searchModal.close();
      } else {
        searchModal.showModal();
      }
    }
  };

  return (
    <div className="w-full">
      <nav className={"bg-white hidden sm:block fixed right-0 left-0 z-50 shadow-md"}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-9 py-5">
          <Link to={"/user/home"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12 w-auto" alt="Flowbite Logo" width={500} height={500} />
          </Link>
          <ul className="flex items-center justify-center">
            <li className="ms-7">
              <button onClick={() => document.getElementById("searchModal").showModal()} className="text-slate-700">
                <FaSearch className="text-xl" />
              </button>
            </li>
            {/* <li className="ms-7">
              <Link to={"/"} className="text-slate-700">
                <FaBell className="text-xl" />
              </Link>
            </li> */}
            <li className="ms-7">
              <Link to={"/user/literations/user_literation"} className="text-slate-700">
                <BiSolidBookAlt className="text-2xl" />
              </Link>
            </li>
            <li className="ms-7">
              <Link to={"/user/profile"}>
                <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden flex justify-center items-center relative">
                  {isLoading ? (
                    <img src={Profile} alt="profile.jpg" className="rounded-full object-cover w-full h-full" />
                  ) : (
                    data && (
                      <img src={data.picture} alt="profile.jpg" className="rounded-full object-cover w-full h-full" />
                    )
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* <ModalSearch show={`${isSearchClicked ? "block" : "hidden"}`} /> */}
        <dialog id="searchModal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box w-11/12 max-w-5xl">
            <form className="relative" onSubmit={handleSearch}>
              <input
                // ref={inputRef}
                type="text"
                className="w-full min-h-full focus:outline-0 text-slate-500"
                placeholder="Search..."
                autoFocus
                value={search}
                onChange={handleSearchInputChange}
              />
              <FaSearch
                className="text-2xl text-slate-500 absolute right-0 top-0 cursor-pointer"
                onClick={handleSearch}
              />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </nav>
      <nav className="sm:hidden bg-white top-3 left-3 right-3 z-50 shadow fixed p-2 rounded-full border-2 border-purple-light flex items-center overflow-hidden">
        <form className="relative w-full" onSubmit={handleSearch}>
          <input
            type="text"
            className="w-full text-slate-400 p-2 focus:outline-none focus:border-0 text-sm"
            placeholder="Search..."
            value={search}
            onChange={handleSearchInputChange}
          />
          <FaSearch
            className="text-slate-500 text-2xl absolute right-4 top-1/2 -translate-y-1/2"
            onClick={handleSearch}
          />
        </form>
      </nav>
      <nav
        className={
          "bg-white border-2 border-purple-light block sm:hidden fixed right-3 left-3 z-50 rounded-2xl shadow bottom-0 mb-2"
        }
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto px-9 py-5">
          <div className="w-full flex items-center justify-evenly">
            <Link to={"/user/home"} className="text-slate-700">
              <FaHome className="text-xl" />
            </Link>
            <Link to={"/user/literations/user_literation"} className="text-slate-700">
              <BiSolidBookAlt className="text-xl" />
            </Link>
            <Link to={"/user/profile"}>
              <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden flex justify-center items-center relative">
                {isLoading ? (
                  <img src={Profile} alt="profile.jpg" className="rounded-full object-cover w-full h-full" />
                ) : (
                  data && (
                    <img src={data.picture} alt="profile.jpg" className="rounded-full object-cover w-full h-full" />
                  )
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavApp;
