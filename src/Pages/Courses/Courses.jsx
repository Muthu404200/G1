import React, { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Microsoft Office",
    description: "Learn MS Word, Excel, PowerPoint, and Outlook.",
    topics: {
      basic: ["Introduction to Office Suite", "MS Word Basics", "Excel Basics"],
      intermediate: ["Advanced Excel Formulas", "PowerPoint Designs"],
      advanced: ["Macros & VBA in Excel", "Outlook Automation"],
    },
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 2,
    title: "Tally",
    description: "Master accounting with Tally ERP.",
    topics: {
      basic: ["Tally Basics", "Creating Ledgers & Vouchers"],
      intermediate: ["GST Calculations", "Inventory Management"],
      advanced: ["Payroll Accounting", "Tally Advanced Features"],
    },
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Learn HTML, CSS, and UI/UX fundamentals.",
    topics: {
      basic: ["HTML Basics", "CSS Styling", "Responsive Design"],
      intermediate: ["CSS Frameworks (Tailwind, Bootstrap)", "Figma Design"],
      advanced: ["Animation", "Design Systems & UX Principles"],
    },
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 4,
    title: "Web Development (MERN / Spring Boot)",
    description: "Full-stack development using modern frameworks.",
    topics: {
      basic: ["React Basics", "Express Setup", "Spring Boot Intro"],
      intermediate: ["REST APIs", "MongoDB & MySQL Integration"],
      advanced: ["Authentication & Deployment", "State Management (Redux)"],
    },
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Data processing, visualization, and ML techniques.",
    topics: {
      basic: ["Python Basics", "Data Visualization with Matplotlib"],
      intermediate: ["Pandas & NumPy", "Statistical Analysis"],
      advanced: ["Machine Learning Models", "Deep Learning Basics"],
    },
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 6,
    title: "Programming Languages (C, C++, Java, Python)",
    description: "Learn popular programming languages.",
    topics: {
      basic: ["Syntax & Basics", "Control Structures"],
      intermediate: ["OOP Concepts", "Data Structures"],
      advanced: ["Advanced Algorithms", "Multithreading"],
    },
    image: "https://via.placeholder.com/300x150",
  },
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handlePopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-md w-full h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              {course.title}
            </h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button
              onClick={() => handlePopup(course)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Popup for Topics */}
      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedCourse.title} Topics
            </h2>
            <ul className="text-gray-600 space-y-3">
              <li>
                <strong>Basic:</strong> {selectedCourse.topics.basic.join(", ")}
              </li>
              <li>
                <strong>Intermediate:</strong>{" "}
                {selectedCourse.topics.intermediate.join(", ")}
              </li>
              <li>
                <strong>Advanced:</strong> {selectedCourse.topics.advanced.join(", ")}
              </li>
            </ul>
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Courses;
