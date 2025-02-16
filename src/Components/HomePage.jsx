import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import profilePic from "../assets/navi1.jpg";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div className="bg-[#0A192F] text-[#E6F1FF] min-h-screen flex flex-col md:flex-row items-center justify-center p-10 ">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left p-5 mt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#64FFDA]">Navi Varman</span>
        </h1>

        <TypeAnimation
          sequence={[
            " Full Stack Developer | Cloud Enthusiast", // Type the text
            1000, // Wait 1 second
            "", // Delete the text
            500, // Wait before retyping
          ]}
          wrapper="span"
          speed={60} // Typing speed
          className="text-lg md:text-3xl text-gray-300 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#E6F1FF]"
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity} // Make it loop infinitely
        />

        <p className="text-md md:text-lg text-gray-400 mb-6 pt-4">
          Full Stack Developer passionate about building dynamic, user-centric
          web applications and delivering seamless user experiences. Skilled in
          frontend and backend technologies, database management, and API
          integration. Dedicated to staying updated with the latest tools and
          frameworks to craft efficient, scalable, and maintainable solutions.
          Eager to leverage my expertise to create impactful and high-performing
          applications.
        </p>
        <div className="flex space-x-4 pt-4">
          <motion.a
            href="mailto:navirathinam2k27@gmail.com"
            className="relative inline-block px-8 py-4  text-lg font-semibold tracking-widest text-white transition-all duration-500 rounded-full shadow-lg bg-[#0cf] overflow-hidden
  before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-[#0099cc] before:transition-all before:duration-500 before:ease-in-out before:rounded-full
  hover:before:w-0 hover:before:left-full hover:shadow-[0_0_20px_#0cf] hover:text-[#0099cc]"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10 transition-all duration-500">
              Hire me
            </span>
          </motion.a>

          <motion.a
            href="/contact"
            className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all relative overflow-hidden"
            whileHover={{
              backgroundColor: "#64FFDA",
              color: "#0A192F",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Talk
          </motion.a>
        </div>
        <div className="flex space-x-8 mt-20">
          <motion.a
            href="https://www.instagram.com/navivarman_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
            className="text-3xl text-gray-400 hover:text-[#E1306C] transition-all "
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://x.com/Navikanna2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-400 hover:text-black transition-all"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/navivarman04/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077B5" }}
            className="text-3xl text-gray-400 hover:text-[#0077B5] transition-all"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-full md:w-1/2 flex justify-center p-5"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300"
        />
      </motion.div>
    </div>
  );
}
