import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - Present</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-10 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern"
            subTitle="Alpha Aviation Group - (Jul - Sept 2022)"
            result="Philippines"
            des="Line maintenance: Fire guarding, pre-flight, transit, and post-flight check on all aircraft at the ramp.  
            Base maintenance: Phase 1, phase 2, and Phase 3 aircraft maintenance."
          />
          <ResumeCard
            title="Intern"
            subTitle="Okey and Sons Automobile - (2014 - 2015)"
            result="Nigeria"
            des="Running automobile diagnostics, servicing automobiles, 
            fixing and replacement of vehicle mechanical components, 
            as well as performing routine automobile maintenance work."
          />
          <ResumeCard
            title="Dog Breeding"
            subTitle="Entrepreneurship - (2012 - Present)"
            result="Nigeria"
            des="Offers expert dog breeding, importation, and premium pet accessories."
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Present</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-10 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TESL"
            subTitle="Teaching English as a Second Language (2012 - Present)"
            result="Remote"
            des="Teaching English Language as a Second Language to Speakers of other Languages."
          />
          <ResumeCard
            title="Public Speaking"
            subTitle="Don mariano Marcos Memorial State University (2017 - Present)"
            result="Philippines"
            des="Award-winning public speaker with a knack for compelling storytelling and inspiring messages, 
            known for connecting deeply with diverse audiences and earning numerous accolades for impactful presentations."
          />
          <ResumeCard
            title="Occupational Safety & Health"
            subTitle="Construction Occupational Safety and Health (2022 - Present)"
            result="Philippines"
            des="Ensure employee safety by identifying and mitigating workplace hazards, enforcing safety policies, and ensuring regulatory compliance."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
