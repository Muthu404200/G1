import React from 'react'
import image from '../../../assets/illustrations/Certification-cuate.svg'
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
import { FaWebAwesome } from "react-icons/fa6";
import { SlideLeft } from "../../../utility/animation";

const Whyus = [
  {
    id: 1,
    desc: "All of our special education experts have a degree in special education.",
    icon: <FaWebAwesome/>,
    bgColor: "#357AFA",
    delay: 0.3,
  },
  {
    id: 2,
    desc: "Our tutors are always available to respond as quick as possible for you",
    icon: <FaWebAwesome/>,
    bgColor: "#357AFA",
    delay: 0.6,
  },
  {
    id: 3,
    desc: "Workshops are hands-on meetings as opposed to lectures",
    icon: <FaWebAwesome/>,
    bgColor: "#357AFA",
    delay: 0.9,
  },
  {
    id: 4,
    desc: "Choose an expert tutor based on your budget and per hour.",
    icon: <FaWebAwesome/>,
    bgColor: "#357AFA",
    delay: 0.9,
  },
];


function Option({reverse}) {
  return (
    <>
    <div className="bg-[#f9f9f9] pb-14 pt-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-secondary font-semibold capitalize"
            >
               Global Tech Computer Education Purasawalkam
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl lg:text-2xl font-semibold capitalize "
            >
              All In One Education Solution Makes Your Better Skills
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-slate-500"
            >
              Global Tech computer Education is commited to every student's growth by providing quality training at affordable cost for their job placements.We continuosly update with the recent updated technologies to make industry - ready professionals. We remain committed to you & your dreams.
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5 text-white">Get Started</button>
            </motion.div>
          </div>
          {/* banner Image section */}
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[400px] h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </div>
  

    <section className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Us
          </h1>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Whyus.map((item) => {
                      return (
                        <motion.div
                          variants={SlideLeft(item.delay)}
                          initial="hidden"
                          whileInView={"visible"}
                          className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                        >
                          {/* icon section */}
                          <div
                            style={{ backgroundColor: item.bgColor }}
                            className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                          >
                            <div className="text-2xl text-center">{item.icon}</div>
                          </div>
                          <p className="font-semibold">{item.desc}</p>
                        </motion.div>
                      );
              })}
        </div>
      </div>
</section>
    
    </>
  )
}

export default Option