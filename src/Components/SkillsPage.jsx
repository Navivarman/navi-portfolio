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
      <div
        className="h-2 rounded-full bg-blue-400 transition-all duration-1000 ease-in-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center px-10 py-20">
      {/* Heading */}
      <h2 className="text-5xl text-white font-bold mb-8">
      <motion.h1
        className="text-5xl font-bold text-[#fafafa] mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-[#64FFDA]">Skills</span>
        </motion.h1>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Coding Skills */}
        <div className="border border-gray-600 rounded-lg p-6 bg-[#0A192F] shadow-md 
                        hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300">
          <h3 className="text-2xl text-white font-semibold mb-6">Coding Skills</h3>
          {codingSkills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>

        {/* Professional Skills */}
        <div className="border border-gray-600 rounded-lg p-6 bg-[#0A192F] shadow-md 
                        hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300">
          <h3 className="text-2xl text-white font-semibold mb-6">Professional Skills</h3>
          {professionalSkills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
