import React from "react";
import { motion } from "framer-motion";

const RegistrationPopup = ({ isOpen, closePopup }) => {
  return (
    <motion.div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${isOpen ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-60"
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "0" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closePopup}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RegistrationPopup;
