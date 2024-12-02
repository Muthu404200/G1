import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  const counterData = [
    { end: 898, label: "Expert tutors", separator: "", suffix: "" },
    { end: 20000, label: "Hours content", separator: ",", suffix: "+" },
    { end: 298, label: "Subject and courses", separator: "", suffix: "" },
    { end: 72878, label: "Active students", separator: ",", suffix: "+" }
  ];

  return (
    <div className="bg-secondary text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {counterData.map((item) => (
          <div key={`${item.label}-${item.end}`} className="flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              <CountUp
                start={0}
                end={item.end}
                duration={3}
                separator={item.separator}
                suffix={item.suffix}
              />
            </p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;
