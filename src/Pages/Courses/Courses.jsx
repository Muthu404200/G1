import React, { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Microsoft Office",
    description: "Learn MS Word, Excel, PowerPoint, and Outlook.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 2,
    title: "Tally",
    description: "Master accounting with Tally ERP.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Learn HTML, CSS, and UI/UX fundamentals.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 4,
    title: "Web Development (MERN / Spring Boot)",
    description: "Full-stack development using modern frameworks.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Data processing, visualization, and ML techniques.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 6,
    title: "Programming Languages (C, C++, Java, Python)",
    description: "Learn popular programming languages.",
    image: "https://via.placeholder.com/300x150",
  },
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState(""); // State for title-based filter

  const handlePopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  // Filter courses based on the title
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Our Courses
      </h1>

      {/* Filter Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by title..."
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
        />
      </div>

      {/* Course List */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            layout
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
      </motion.div>

      {/* Popup for Selected Course */}
      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedCourse.title}
            </h2>
            <p className="text-gray-600">{selectedCourse.description}</p>
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 mt-8"
        >
          No courses found.
        </motion.div>
      )}
    </div>
  );
}

export default Courses;
