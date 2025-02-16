import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Function to send message via WhatsApp
  const handleWhatsApp = (e) => {
    e.preventDefault(); // Prevent form submission
    setError(""); // Reset error

    if (!name.trim() || !message.trim()) {
      setError("Please enter your name and message.");
      return;
    }

    const phoneNumber = "918122972480"; // Replace with your WhatsApp number
    const text = encodeURIComponent(`Hello, my name is ${name}.\n\n${message}`);

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    // Show success message
    setSuccess(true);

    // Clear form fields after sending
    setName("");
    setMessage("");

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center px-10 py-20">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-[#fafafa] mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact <span className="text-[#64FFDA]">Me</span>
      </motion.h1>

      {/* Contact Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="border border-gray-600 rounded-lg p-6 bg-[#0A192F] shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-blue-400">
          <h3 className="text-2xl text-white font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <FaEnvelope className="text-[#64FFDA]" />
              <a
                href="mailto:navirathinam2k27@gmail.com"
                className="text-blue-400 hover:underline"
              >
                navirathinam2k27@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <FaPhone className="text-[#64FFDA]" />
              <span>+91 8122972480</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/navivarman04/"
                className="text-[#64FFDA] text-2xl hover:text-white transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Navivarman?tab=repositories"
                target="_blank"
                className="text-[#64FFDA] text-2xl hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-600 rounded-lg p-6 bg-[#0A192F] shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-blue-400">
          <h3 className="text-2xl text-white font-semibold mb-6">Send a Message</h3>

          {/* Success Message */}
          {success && (
            <motion.div
              className="p-3 mb-4 text-green-500 bg-green-900 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully via WhatsApp!
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              className="p-3 mb-4 text-red-500 bg-red-900 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ⚠️ {error}
            </motion.div>
          )}

          <form className="space-y-4" onSubmit={handleWhatsApp}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-700 text-white h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded hover:bg-white transition-colors duration-300"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
