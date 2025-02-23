import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2009 - 2023",
    title: "Lower Studies - Little Rose Matriculation Higher Secondary School",
    description:
      "Completed my lower studies, building a strong academic foundation and essential skills for future learning.",
  },
  {
    year: "2023 - PRESENT",
    title: "Computer Science and Engineering - Rathinam Technical Campus",
    description:
      "Pursuing a Bachelor's degree in Computer Science, specializing in software development and emerging technologies.",
  },
];

const experienceData = [
  {
    year: "2025 (Jan) - 2025 (Apr)",
    title: "Fullstack Developer - Unified Mentor",
    description:
      "Currently interning as a Fullstack Developer, gaining hands-on experience in frontend & backend development while working under experienced mentors.",
  },
];

const TimelineItem = ({ year, title, description }) => (
  <motion.div 
    className="relative pl-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Timeline Dot */}
    <div className="absolute -left-[10px] top-5 w-5 h-5 bg-[#64FFDA] rounded-full border-2 border-white"></div>

    {/* Timeline Card */}
    <div className="border border-gray-600 rounded-lg p-5 bg-[#0A192F] text-white shadow-md 
                    hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300">
      <div className="flex items-center space-x-2 text-[#64FFDA]">
        <FaCalendarAlt />
        <span className="font-semibold">{year}</span>
      </div>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </div>
  </motion.div>
);

const EducationPage = () => {
  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-20">
      <div className="w-full max-w-5xl">
        
        {/* Education Section */}
        <motion.h1
          className="text-5xl font-bold text-[#fafafa] mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h1>
        <div className="relative border-l-2 border-gray-600 pl-6 space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

        {/* Experience Section */}
        <motion.h1
          className="text-5xl font-bold text-[#fafafa] mt-16 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h1>
        <div className="relative border-l-2 border-gray-600 pl-6 space-y-8">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default EducationPage;
