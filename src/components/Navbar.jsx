import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center p-6 rounded-full border-2 relative bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="CulinaryHub Logo" className="h-14 w-auto" />
        <h1 className="text-2xl font-[Helvetica] font-bold text-green-600">CulinaryHub</h1>
      </div>

      {/* Hamburger for small screens only */}
      <div
        className="md:hidden cursor-pointer text-3xl text-green-600"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Nav Links for medium and large screens */}
      <div className="hidden md:flex justify-between gap-8 md:gap-4 lg:gap-16 items-center">
        {["/", "/recipes", "/about", "/contact", "/fav"].map((path, idx) => (
          <NavLink
            key={idx}
            className={({ isActive }) =>
              isActive
                ? "text-base md:text-[15px] lg:text-lg text-green-300"
                : "text-green-500 text-base md:text-[15px] lg:text-lg hover:text-green-600 transition"
            }
            to={path}
          >
            {["Home", "Recipes", "About", "Contact", "Favorite"][idx]}
          </NavLink>
        ))}
      </div>

      {/* Create Recipe Button */}
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          isActive
            ? "text-green-300 border py-2 px-4 rounded hidden md:block text-sm md:text-[14px] lg:text-base"
            : "text-green-500 border-green-500 border py-2 px-4 rounded hidden md:block text-sm md:text-[14px] lg:text-base hover:bg-green-500 hover:text-white transition"
        }
      >
        Create Recipe
      </NavLink>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-10">
          {["/", "/recipes", "/about", "/contact", "/fav"].map((path, idx) => (
            <NavLink
              key={idx}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-green-300 my-2"
                  : "text-green-500 text-lg my-2 hover:text-green-600 transition"
              }
              to={path}
              onClick={() => setIsOpen(false)}
            >
              {["Home", "Recipes", "About", "Contact", "Favorite"][idx]}
            </NavLink>
          ))}
          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              isActive
                ? "text-green-300 border py-2 px-4 rounded mt-2"
                : "text-green-500 border-green-500 border py-2 px-4 rounded mt-2 hover:bg-green-500 hover:text-white transition"
            }
            onClick={() => setIsOpen(false)}
          >
            Create Recipe
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
