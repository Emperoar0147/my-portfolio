import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Attainment</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Mechanical Engineering"
            subTitle="Don Mariano Marcos Memorial State University, Mid La Union Campus, Philippines. (2017 - 2022)"
            result="82.65/100"
            des="Universities offer training programs designed to equip individuals with the skills and knowledge needed to work in diverse economic sectors and cultural fields."
          />
          <ResumeCard
            title="Associate Degree - Marine Engineering"
            subTitle="Merchant Seaman Academy, Akwa Ibom, Nigeria (2015 - 2017)"
            result="4.75/5"
            des="Associate degrees are a form of higher education, also known as post-secondary education, 
            which lead to the awarding of an academic qualification. They are typically offered by colleges and universities and provide foundational training for various fields."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Prince College, Narayi Kaduna (2006 - 2012)"
            result="5.00/5"
            des="Secondary education, also known as post-primary education, encompasses two distinct phases as outlined by the International Standard Classification of Education (ISCED)"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern"
            subTitle="Alpha Aviation Group - (Jul - Sept 2022)"
            result="Philippines"
            des="Line maintenance: Fire guarding, pre-flight, transit, and post-flight check on all aircraft at the ramp. Base maintenance: Phase 1, phase 2, and Phase 3 aircraft maintenance."
          />
          <ResumeCard
            title="Intern"
            subTitle="Okey and Sons Automobile - (2014 - 2015)"
            result="Nigeria"
            des="Running automobile diagnostics, servicing automobiles, fixing and replacement of vehicle mechanical components, as well as performing routine automobile maintenance work."
          />
          <ResumeCard
            title="TESL"
            subTitle="Teaching English as a Second Language (2012 - Present)"
            result="Remote"
            des="Teaching English Language as a Second Language to Speakers of other Languages."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education