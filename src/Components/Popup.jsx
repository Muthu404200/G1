import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[50%]">
            {/* Close Button with React Icons */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all text-2xl"
            >
              <FaTimes />
            </button>
            {/* Content */}
            <h2 className="text-xl font-bold mb-4 text-center">
              Welcome to Our Website!
            </h2>
            <p className="text-gray-700 text-center">
              Explore and enjoy our amazing features and services.
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closePopup}
                className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Popup;
