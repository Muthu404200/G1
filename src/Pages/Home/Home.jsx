import React from 'react'
import Hero from './Hero/Hero'
import NumberCounter from './NumberCounter/NumberCounter'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Banner from './Banner/Banner'
import Img1 from "../../assets/illustrations/Online learning-cuate.svg";
import Img2 from "../../assets/illustrations/Teacher student-cuate.svg";
import SubjectCard from "./SubjectCard/SubjectCard"


const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};




function Home() {
  return (
    <>
    <Hero />
    <NumberCounter />
    <WhyChooseUs />
    <Banner {...BannerData} />
    <Banner {...BannerData2} reverse={true} />
    <SubjectCard />
    </>
  )
}

export default Home