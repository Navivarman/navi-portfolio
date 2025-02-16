import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const timelineData = [
  {
    year: "2009 - 2023",
    title: "Lower Studies - Little Rose Matriculation Higher Secondary School",
    description:
      "From 2009 to 2023, I completed my lower studies at Little Rose Matriculation Higher Secondary School, where I built a strong academic foundation and developed essential skills for future learning.",
  },
  {
    year: "2023 - P R E S E N T ",
    title: "Computer Science and Engineering - Rathinam Technical Campus",
    description:
      "Pursuing a Bachelor of Engineering in Computer Science at Rathinam Technical Campus, specializing in software development and emerging technologies.",
  },
];

const experienceData = [
  {
    year: "2025(January) - 2025(April)",
    title: "Fullstack Developer - Unified Mentor",
    description:
      "Currently interning as a Fullstack Developer at Unified Mentor, diving deep into end-to-end web application development, mastering cutting-edge frontend and backend technologies, and delivering impactful solutions while sharpening my technical expertise in a professional environment and experienced mentors.",
  },
];

const TimelineItem = ({ year, title, description }) => (
  <div className="relative">
    {/* Timeline Dot */}
    <div className="absolute -left-4 top-5 w-4 h-4 bg-blue-500 rounded-full"></div>

    {/* Card Content with Hover Effect */}
    <div className="border border-gray-600 rounded-lg p-5 bg-[#0A192F] text-white shadow-md 
                    hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300">
      <div className="flex items-center space-x-2 text-[#64FFDA]">
        <FaCalendarAlt />
        <span className="font-semibold">{year}</span>
      </div>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </div>
  </div>
);

const EducationPage = () => {
  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center px-10 py-20">
      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-6">
          <motion.h1
          className="text-5xl font-bold text-[#fafafa] mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
            Education
            </motion.h1>
            </h3>
          <div className="relative border-l-2 border-gray-600 pl-6 space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-6">
          <motion.h1
          className="text-5xl font-bold text-[#fafafa] mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
            Experience
            </motion.h1>
            </h3>
          <div className="relative border-l-2 border-gray-600 pl-6 space-y-8">
            {experienceData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
