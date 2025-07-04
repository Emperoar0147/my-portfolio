import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Engineering Manager", 
      "Mechanical Engineer", 
      "Marine Engineer", 
      "Software Engineer", 
      "OSH Certified Practitioner", 
      "Lean Six Sigma Yellow Belt Certified Professional", 
      "Stanford-Certified Data Science Professional", 
      "Academic Researcher", 
      "Process Optimization Researcher", 
      "Project Management Analyst", 
      "Operational Risk Analyst & Manager", 
      "Author", 
      "Public Speaker", 
      "Technical Writer", 
      "ESL Instructor", 
      "Dog Breeder @ Sculp Kennel", 
      "Brand Developer", 
      "Crypto Enthusiast."
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-normal text-gray-400">
          "NON POTES DARE QUOD NON HABES" (You cannot give what you do not have)
        </h4>
        <h1 className="text-4xl lgl:text-6xl font-bold text-white">
          Hello, I'm <span className="text-designColor capitalize">Engr. Sylvanus Uzor</span>
        </h1>
        <h2 className="text-2xl lgl:text-4xl font-bold text-white">
          a/an <span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-7 tracking-wide text-gray-300">
          Visionary Engineer, Innovator, Entrepreneur, and CEO of Sculp Kennel and Tech Solutions.
          As an Engineering Manager, Mechanical, Marine, and Software Engineer, Stanford-Certified Data Science Professional, 
          and Lean Six Sigma Yellow Belt, I bring multidisciplinary expertise in software development, process optimization, 
          and operational risk management. Beyond engineering, I’m a passionate Author, Public Speaker, ESL Instructor, 
          and Dog Breeder—committed to delivering excellence in premium pet care and transformative tech solutions for businesses and individuals.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
