import React from 'react'
import image from '../../../assets/illustrations/t1.svg'
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

function Option({reverse}) {
  return (
    <>
    <section className="text-gray-700 body-font">
  <div className="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">All of our special education experts have a degree in special education.</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Our tutors are always available to respond as quick as possible for you</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Our digital whiteboard equipped with audio and video chat fetures.</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Choose an expert tutor based on your budget and per hour.</h2>
        </div>
      </div>

    </div>
  </div>
</section>
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
               Global Tech Computer Education Ambattur
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
              <button className="primary-btn !mt-5">Get Started</button>
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
    </>
  )
}

export default Option