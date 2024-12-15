import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  const counterData = [
    { end: 898, label: "Expert Tutors", separator: "", suffix: "" },
    { end: 20000, label: "Hours of Content", separator: ",", suffix: "+" },
    { end: 298, label: "Subjects and Courses", separator: "", suffix: "" },
    { end: 72878, label: "Active Students", separator: ",", suffix: "+" }
  ];

  return (
    <div className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {counterData.map((item) => (
          <div
            key={`${item.label}-${item.end}`}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-3xl font-semibold">
              <CountUp
                start={0}
                end={item.end}
                duration={3}
                separator={item.separator}
                suffix={item.suffix}
              />
            </p>
            <p className="text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;
