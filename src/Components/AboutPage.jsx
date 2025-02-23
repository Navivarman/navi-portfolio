import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png"; 

const About = () => {
  return (
    <div className="bg-[#0A192F] text-[#E6F1FF] min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-16">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-[#66D9EF]">Me</span>
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg mb-6 hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#E6F1FF] animate-pulse">
        Full Stack Developer | Cloud Enthusiast
      </p>

      {/* About Text */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-3xl md:max-w-4xl lg:max-w-5xl leading-relaxed px-4 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        I am a passionate <span className="font-semibold text-[#64FFDA]">Full Stack Developer & Cloud Enthusiast</span> with expertise in{" "}
        <span className="font-semibold text-[#66D9EF]">React, Next.js, Node.js, and AWS</span>.  
        I love building <span className="font-semibold">scalable web applications</span> and <span className="font-semibold">efficient backend systems</span> while continuously learning new technologies.  
        My goal is to <span className="font-semibold text-[#E6F1FF]">deliver high-quality, user-friendly applications</span> that make an impact.
      </motion.p>
    </div>
  );
};

export default About;
