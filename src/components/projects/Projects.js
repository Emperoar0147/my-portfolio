import React from 'react';
import Title from '../layouts/Title';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND LEAVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Faculty Administration Management System (FAMS)"
          des="The Faculty Administration Management System (FAMS) is a digital platform 
              I designed and implemented to modernize academic workflows at the DMMMSU College of Engineering. 
              Built with a user‑centered approach and Agile methodology, FAMS streamlines faculty workload tracking, 
              document management, communication, and decision‑making through an integrated dashboard and role‑based access controls.
              Validated through usability testing with faculty members, the system achieved an exceptional System Usability Scale (SUS) score of 94.12 (“Best Imaginable”), 
              confirming its effectiveness in delivering efficiency, transparency, and accountability in higher education administration."
          src={projectSeven}
        />
        <ProjectsCard
          title="Construction Safety Training Program"
          des="A comprehensive Occupational Safety and Health (OSH) training program designed for construction workers in compliance with Philippine labor standards. The program includes interactive modules, hazard identification, and evaluation tools."
          src={projectOne}
        />
        <ProjectsCard
          title="Mechanical Engineering Design Portfolio"
          des="A curated set of CAD-based designs and simulations showcasing mechanical systems — including gear assemblies, heat exchangers, and structural frames — developed using SolidWorks and AutoCAD, tailored for real-world industrial applications."
          src={projectTwo}
        />
        <ProjectsCard
          title="Lean Six Sigma Black Belt Project"
          des="An operational improvement case study applying the DMAIC methodology to reduce process inefficiencies in a small-scale manufacturing setup. Successfully identified bottlenecks and achieved a 25% improvement in turnaround time."
          src={projectThree}
        />
        <ProjectsCard
          title="Dog Breeding & Kennel Business"
          des="Sculp Kennel: A fully managed dog breeding and pet importation service focused on elite breeds and quality care. Services include training, health certification, and premium pet accessories, blending passion with entrepreneurship."
          src={projectFour}
        />
        <ProjectsCard
          title="KitchenHall E-commerce Platform"
          des="A React-powered web app built with a team, enabling users to order and sell home-cooked meals. Integrated with secure authentication, product filtering, responsive UI, and a connected backend for order tracking and reviews."
          src={projectFive}
        />
        <ProjectsCard
          title="Technical Writing & Documentation"
          des="A portfolio of professionally written technical manuals, safety SOPs, and instructional documentation. Projects include OSH compliance guides, ESL lesson outlines, and maintenance SOPs tailored for engineering and education sectors."
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
