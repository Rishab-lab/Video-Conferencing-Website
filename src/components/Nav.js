import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-black/90">
      <div className="h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
       
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover" />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Conferencing</p>
          </div>
        </div>

        
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black rounded px-2 py-1"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

    
        <div className="hidden md:block">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <ul className="text-white font-bold flex flex-col items-center gap-4 cursor-pointer absolute top-[5rem] right-4 bg-black/90 rounded-md p-2">
              <li>About Us</li>
              <li>Product</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
