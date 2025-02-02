import React from "react";
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me :</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 2)} //direction, type=tween/spring, delay, duration
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a skilled software developer with experience in JavaScript, 
        and in frameworks like React, Node.js, and Three.js.
        I am a quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions. My background includes working on web 
        development, data analysis, and visualization for large datasets, as well as 
        contributing to the development of startup projects from the ground up.


        
      </motion.p>

      <div className=' ml-10 mt-20 flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");