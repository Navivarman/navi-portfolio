import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Icons for menu

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const navItems = ["Home", "About", "Education", "Skills", "Contact"];

  return (
    <nav className="bg-[#0A192F] text-[#E6F1FF] py-4 px-6 md:px-16 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Name */}
        <motion.h1 
          className="text-3xl md:text-4xl font-extrabold text-[#64FFDA] cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Navi.
        </motion.h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item, index) => {
            const isActive = location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
            return (
              <motion.li
                key={index}
                className={`text-lg font-semibold cursor-pointer transition-all duration-300 ${
                  isActive ? "text-[#64FFDA] border-b-2 border-[#64FFDA]" : ""
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-4 py-2 hover:text-[#64FFDA] transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64FFDA] text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#0A192F] w-full py-4 absolute top-full left-0 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 text-center">
            {navItems.map((item, index) => {
              const isActive = location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
              return (
                <li key={index}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`text-lg font-semibold block py-3 ${
                      isActive ? "text-[#64FFDA] border-b-2 border-[#64FFDA]" : "hover:text-[#64FFDA]"
                    }`}
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
