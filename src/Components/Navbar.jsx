import React from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu.jsx"; // Import ResponsiveMenu

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
          <MdComputer className="text-secondary text-4xl" />
                <p className="text-2xl  text-secondary">Global</p>
                <p className="text-2xl text-red-600">Tech</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {[
                { id: 1, title: "Home", link: "/" },
                { id: 2, title: "About", link: "/about" },
                { id: 3, title: "Courses", link: "/courses" },
                { id: 4, title: "Gallery", link: "/gallery" },
                { id: 5, title: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    onClick={closeMenu} // Close the menu when clicked
                    className={({ isActive }) =>
                      `inline-block text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold transition-all duration-300 ${
                        isActive ? "text-secondary" : "text-gray-600 hover:text-secondary"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Certificate Verification</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <ResponsiveMenu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
