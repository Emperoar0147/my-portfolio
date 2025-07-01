import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Academic Experience */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - Present</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Academic Experience</h2>
        </div>
        <div className="mt-10 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master in Management Engineering"
            subTitle="DMMMSU – Philippines (Ongoing)"
            result="In Progress"
            des="Graduate-level research and coursework focused on risk management, quality control, and project optimization, applying Six Sigma and PDCA frameworks."
          />
          <ResumeCard
            title="Bachelor of Science in Mechanical Engineering"
            subTitle="DMMMSU – Philippines (2017 - 2022)"
            result="Graduated"
            des="Completed a rigorous engineering program with a focus on thermodynamics, fluid mechanics, and machine design. Led final year project on Electric Bamboo Splitter."
          />
          <ResumeCard
            title="Associate Degree in Marine Engineering"
            subTitle="Merchant Seaman Academy – Akwa Ibom Nigeria (2015 - 2017)"
            result="Graduated"
            des="Completed a rigorous engineering program with a focus on thermodynamics, fluid mechanics, machine design, and marine Polution. Led final year project on design of a model Propeller."
          />
          <ResumeCard
            title="Fundamentals of Data Science in Precision Medicine and Cloud Computing"
            subTitle="Stanford Medicine | Department of Medicine - Stanford University (June 28, 2025)"
            result="Graduated"
            des="Completed a rigorous engineering program with a focus on data science, precision medicine, and cloud computing."
          />
          <ResumeCard
            title="Frontend Specialization in ALX Africa’s Software Engineering Program"
            subTitle="ALX Africa (February 12, 2025)"
            result="Graduated"
            des="Focused on mastering modern frontend technologies and practices."
          />
          <ResumeCard
            title="ALX Africa’s AI Starter Kit"
            subTitle="ALX Africa (April 15, 2025)"
            result="Certified"
            des="Focused on understanding what AI is and how it powers real-world technologies.
                  Learned about machine learning, natural language processing (NLP), and neural networks.
                  Explored real-world AI tools like ChatGPT, GitHub Copilot, and generative AI.
                  Gained insight into the ethics, risks, and opportunities of AI in society."
          />
          <ResumeCard
            title="Lean Six Sigma Yellow Belt Certification"
            subTitle="Accredited Training (March 25, 2025)"
            result="Certified"
            des="Completed Yellow Belt certification, gaining practical knowledge in process mapping, waste elimination, and DMAIC methodology to support continuous improvement."
          />
          <ResumeCard
            title="PDCA METHODOLOGY CERTIFICATION"
            subTitle="PLAN-DO-CHECK-ACT, Accredited Training (July 27, 2023)"
            result="Certified"
            des="PDCA stands for Plan-Do-Check-Act. It’s a simple, repeatable method for continuous improvement. 
            First, you plan a change, then test it (do), evaluate the results (check), and apply what works or adjust if needed (act). 
            It keeps ideas evolving and problems solving in motion."
          />
          <ResumeCard
            title="On-the-job Training under the Aircraft Maintenance Department"
            subTitle="Alpha Aviation Group – Phillipines(September 01, 2022)"
            result="Completed"
            des="300 hours Hands-on experience in Line maintenance: Fire guarding, pre-flight, transit, and post-flight check on all aircraft at the ramp. Base maintenance: Phase 1, phase 2, and Phase 3 aircraft maintenance."
          />
          <ResumeCard
            title="Construction Occupational Safety and Health"
            subTitle="Accredited Training on Occupational Safety and Health - OSH (July 10, 2022)"
            result="Certified"
            des="Certification was a significant step toward understanding how to protect lives, prevent hazards, and create safer work environments."
          />
        </div>
      </div>

      {/* Professional Certification */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - Present</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Professional Certification</h2>
        </div>
        <div className="mt-10 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Construction Occupational Safety and Health (COSH)"
            subTitle="DOLE Accredited – Philippines (July 10, 2022)"
            result="Certified"
            des="Trained in hazard identification, workplace inspection, incident investigation, and compliance with OSH standards in construction settings."
          />
          <ResumeCard
            title="SCULP kENNEL & TECH SOLUTIONS"
            subTitle="Certificate of Registration | Business Name Registration - Nigeria (October 17, 2024)"
            result="Certified & Active"
            des="Expert dog breeding, Importation, premium pet accessories. Innovative Tech services for Businesses and Individuals."
          />
          <ResumeCard
            title="TEFL (Teaching English as a Foreign Language)"
            subTitle="TESL 120 hours & TEFL 120 hours Trainings (March 29, 2023 & April 09, 2025)"
            result="Certified & Active"
            des="Over a decade of experience teaching English to diverse learners globally. Specializing in conversational fluency, public speaking, and exam preparation."
          />
          <ResumeCard
            title="Virtual Assistance Training (VA)"
            subTitle="Clair Voyance Certification training (May 08, 2023)"
            result="Certified & Active"
            des="Certification on Virtual Assistance."
          />
          <ResumeCard
            title="Customer Service Relation Training (CSR)"
            subTitle="Clair Voyance Certification training (April 29, 2023)"
            result="Certified & Active"
            des="Certification on Customer Service Relation, Primer with Extensive and Intensive Basic and Core Skill Trainig for Aspiring Call Center Agent."
          />
          <ResumeCard
            title="Public Speaking & Debate Awards"
            subTitle="DMMMSU – Philippines (October 4, 2019 & January 13, 2022)"
            result="Best Speaker & Overall second Place"
            des="Recognized for outstanding public speaking performance and mentorship. Coached students in inter-school debates and presentation skills."
          />
          <ResumeCard
            title="Software Engineering Certificate"
            subTitle="ALX/Holberton School – February 12 2025"
            result="Completed"
            des="Completed an intensive software engineering program covering full-stack web development, algorithms, system engineering, and agile practices using Python, React, and more."
          />
          <ResumeCard
            title="AI Starter Kit"
            subTitle="ALX Africa – April 15 2025"
            result="Completed"
            des="Hands-on experience with AI/ML tools including TensorFlow and Vertex AI. Gained foundational knowledge in artificial intelligence applications and model training workflows."
          />
          <ResumeCard
            title="Fundamentals of Data Science in Precision Medicine and Cloud Computing"
            subTitle="Stanford Medicine || Department of Genetics (Stanford University) – June 28 2025"
            result="Completed"
            des="Explored data-driven approaches to healthcare, emphasizing genomics, machine learning, and real-world data applications in personalized treatment strategies."
          />
          <ResumeCard
            title="Introduction to Cloud Computing"
            subTitle="IBM Skills Network (Coursera) – 2024"
            result="Completed"
            des="Gained essential cloud computing skills including virtualization, cloud service models (IaaS, PaaS, SaaS), and hands-on experience with IBM Cloud and DevOps tools."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
