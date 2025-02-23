import React from "react";
import { motion } from "framer-motion";

const codingSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "NodeJS & ExpressJS", level: 80 },
];

const professionalSkills = [
  { name: "Web Design", level: 95 },
  { name: "Web Development", level: 95 },
  { name: "Frontend", level: 85 },
  { name: "Backend", level: 90 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <span className="text-white font-semibold">{name}</span>
      <span className="text-[#64FFDA] font-semibold">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-2 rounded-full bg-blue-400"
      />
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-[#fafafa] mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-[#64FFDA]">Skills</span>
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Coding Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border border-gray-600 rounded-lg p-6 sm:p-8 bg-[#112240] shadow-md hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300"
        >
          <h3 className="text-2xl text-white font-semibold mb-6">Coding Skills</h3>
          {codingSkills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="border border-gray-600 rounded-lg p-6 sm:p-8 bg-[#112240] shadow-md hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300"
        >
          <h3 className="text-2xl text-white font-semibold mb-6">Professional Skills</h3>
          {professionalSkills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
