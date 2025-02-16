import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Get current route

  return (
    <nav className="bg-[#0A192F] text-[#E6F1FF] py-5 px-16 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Name */}
        <motion.h1 
          className="text-3xl md:text-4xl font-extrabold text-[#64FFDA] cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Navi.
        </motion.h1>

        {/* Right Side - Navigation Links */}
        <ul className="hidden md:flex space-x-12">
          {["Home", "About", "Education", "Skills", "Contact"].map((item, index) => {
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
      </div>
    </nav>
  );
};

export default NavBar;
