import React from 'react'
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";
import AboutImg from "../../../assets/illustrations/Education-cuate.svg"

function Header() {
  return (
    <>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[450px] relative">
    <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={AboutImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>

        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              About <span className="text-secondary">Us</span>
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.7)}
              initial="hidden"
              animate="visible"
            >
              GLOBAL TECH COMPUTER EDUCATION is an ISO certified organization in the noble field of education. We provide training and certification in Software, IT, Accounting, Multimedia and CAD divisions.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.8)}
              initial="hidden"
              animate="visible"
            >
              GLOBAL TECH COMPUTER EDUCATION is a leading computer training institute in Chennai with 100% placement assistance. We are known for our practical approach towards trainings that enable students to gain real time exposure on competitive technologies.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.9)}
              initial="hidden"
              animate="visible"
            >
              Our trainings are focused on perfect improvement of technical skills for fresher and working professionals to build their career.
            </motion.p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Header