import React from "react";
import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const subjectList = [
  {
    id: 1,
    name: "Programming",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "SAP",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    name: "MERN Stack",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Tally",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    name: "MS Office",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Data Science",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Web design",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
    link: "/courses",  // Add link to the "See all" item
  },
];

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">Find Tutor in Subject</p>
        </div>

        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                {/* If "See all" card, make it clickable */}
                {subject.name === "See all" ? (
                  <Link to={subject.link} className="flex items-center gap-4">
                    <div
                      style={{
                        color: subject.color,
                        backgroundColor: subject.color + "20",
                      }}
                      className="w-10 h-10 rounded-md flex justify-center items-center"
                    >
                      {subject.icon}
                    </div>
                    <p>{subject.name}</p>
                  </Link>
                ) : (
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        color: subject.color,
                        backgroundColor: subject.color + "20",
                      }}
                      className="w-10 h-10 rounded-md flex justify-center items-center"
                    >
                      {subject.icon}
                    </div>
                    <p>{subject.name}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
