import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// Academic Achievements
const masterAchievements = [
  { title: "Academic Excellence Award", description: "Earned for outstanding performance across coursework, research, and project execution." },
  { title: "Faculty Administration Management System (FAMS)", description: "Designed and implemented a digital platform modernizing academic workflows, achieving a SUS score of 94.12 ('Best Imaginable')." },
  { title: "Lean Six Sigma Black Belt", description: "Completed advanced certification demonstrating expertise in process optimization and risk management." },
  { title: "Agile/SCRUM Application", description: "Applied SCRUM principles to system design and project delivery, ensuring adaptability and collaboration." },
  { title: "Interdisciplinary Integration", description: "Leveraged Mechanical and Marine Engineering foundations to enrich management engineering research." },
  { title: "Research & Innovation", description: "Conducted thesis work combining quantitative methods, usability science, and continuous improvement." }
];

// Professional Certifications
const certifications = [
  { title: "Construction Occupational Safety and Health (COSH)", subTitle: "DOLE Accredited – Philippines (July 10, 2022)", result: "Certified", description: "Trained in hazard identification, workplace inspection, incident investigation, and compliance with OSH standards in construction settings." },
  { title: "SCULP Kennel & Tech Solutions", subTitle: "Business Registration – Nigeria (October 17, 2024)", result: "Certified & Active", description: "Expert dog breeding, importation, premium pet accessories, and innovative tech services for businesses and individuals." },
  { title: "TEFL (Teaching English as a Foreign Language)", subTitle: "TESL & TEFL Trainings (March 29, 2023 & April 09, 2025)", result: "Certified & Active", description: "Over a decade of experience teaching English globally, specializing in conversational fluency, public speaking, and exam preparation." },
  { title: "Virtual Assistance Training (VA)", subTitle: "Clair Voyance Certification (May 08, 2023)", result: "Certified & Active", description: "Certification on Virtual Assistance." },
  { title: "Customer Service Relation Training (CSR)", subTitle: "Clair Voyance Certification (April 29, 2023)", result: "Certified & Active", description: "Primer with extensive skill training for aspiring call center agents." },
  { title: "Public Speaking & Debate Awards", subTitle: "DMMMSU – Philippines (2019 & 2022)", result: "Best Speaker & Overall 2nd Place", description: "Recognized for outstanding public speaking and mentorship in inter-school debates." },
  { title: "Software Engineering Certificate", subTitle: "ALX/Holberton School – February 12, 2025", result: "Completed", description: "Full-stack web development, algorithms, system engineering, and agile practices using Python, React, and more." },
  { title: "AI Starter Kit", subTitle: "ALX Africa – April 15, 2025", result: "Completed", description: "Hands-on experience with AI/ML tools including TensorFlow and Vertex AI." },
  { title: "Fundamentals of Data Science in Precision Medicine and Cloud Computing", subTitle: "Stanford Medicine – June 28, 2025", result: "Completed", description: "Explored data-driven approaches to healthcare, emphasizing genomics, ML, and personalized treatment strategies." },
  { title: "Introduction to Cloud Computing", subTitle: "IBM Skills Network (Coursera) – 2024", result: "Completed", description: "Gained essential cloud computing skills including virtualization, service models, and IBM Cloud tools." }
];

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
            subTitle="DMMMSU – Philippines (2023 - 2026)"
            result="Graduated"
            des={
              <ul className="list-disc pl-5 space-y-2">
                {masterAchievements.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            }
          />
          <ResumeCard
            title="Bachelor of Science in Mechanical Engineering"
            subTitle="DMMMSU – Philippines (2017 - 2022)"
            result="Graduated"
            des="Completed a rigorous engineering program with a focus on thermodynamics, fluid mechanics, and machine design. Led final year project on Electric Bamboo Splitter."
          />
          <ResumeCard
            title="Associate Degree in Marine Engineering"
            subTitle="Merchant Seaman Academy – Nigeria (2015 - 2017)"
            result="Graduated"
            des="Focused on thermodynamics, fluid mechanics, machine design, and marine pollution. Final project: design of a model propeller."
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
          {certifications.map((cert, index) => (
            <ResumeCard
              key={index}
              title={cert.title}
              subTitle={cert.subTitle}
              result={cert.result}
              des={cert.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
