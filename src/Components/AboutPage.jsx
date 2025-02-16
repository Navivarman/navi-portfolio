import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/navi1.jpg"; // Update with your profile image path

const About = () => {
  return (
    <div className="bg-[#0A192F] text-[#E6F1FF] min-h-screen flex flex-col items-center justify-center p-10">
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-[#fafafa] mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-[#66D9EF]">Me</span>
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mb-6 hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover " />
      </motion.div>

      <p className="text-lg md:text-3xl text-gray-300 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#E6F1FF] animate-pulse">
          Full Stack Developer | Cloud Enthusiast
        </p>

      {/* About Text */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-5xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        I am a passionate **Full Stack Developer & Cloud Enthusiast** with expertise in **React, Next.js, Node.js, and AWS**.  
        I love building **scalable web applications** and **efficient backend systems** while continuously learning new technologies.  
        My goal is to **deliver high-quality, user-friendly applications** that make an impact.  
      </motion.p>
    </div>
  );
};

export default About;
