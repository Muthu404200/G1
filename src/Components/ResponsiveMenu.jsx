import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

const iconList = [
  { icon: <FaFacebookF /> },
  { icon: <FaTwitter /> },
  { icon: <FaLinkedinIn /> },
  { icon: <FaInstagram /> },
  { icon: <FaPhone /> },
];

const ResponsiveMenu = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen bg-white z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            {/* Menu Links with Routing */}
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <NavLink
                  to="/G1/"
                  onClick={closeMenu} // Close the menu on click
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-all duration-300 ${
                      isActive ? "text-red-500" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu} // Close the menu on click
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-all duration-300 ${
                      isActive ? "text-red-500" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={closeMenu} // Close the menu on click
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-all duration-300 ${
                      isActive ? "text-red-500" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  onClick={closeMenu} // Close the menu on click
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-all duration-300 ${
                      isActive ? "text-red-500" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu} // Close the menu on click
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-all duration-300 ${
                      isActive ? "text-red-500" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Social Media Icons */}
            <ul className="flex text-white gap-6 items-center justify-center cursor-pointer mt-10">
              {iconList.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="hover:text-secondary transition-all duration-300 font-semibold">
                    {item.icon}
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 mt-10">
              <button
                onClick={closeMenu} // Close menu on button click
                className="bg-secondary text-white font-semibold rounded-full py-2 px-6 hover:bg-red-600 transition-all duration-300"
              >
                Certificate Verification
              </button>
              <button
                onClick={closeMenu} // Close menu on button click
                className="bg-red-600 text-white font-semibold rounded-full py-2 px-6 hover:bg-secondary transition-all duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
