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
      "Certified Lean Six Sigma (White, Yellow and Black Belt)", 
      "Stanford-Certified Data Science Professional", 
      "Academic Researcher", 
      "Process Optimization Researcher", 
      "Project Management Analyst", 
      "Operational Risk Analyst & Manager", 
      "Published Author", 
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
          Hello, I'm <span className="text-designColor capitalize">Engr. Sylvanus C. Uzor</span>
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
          A Multidisciplinary engineer and academic researcher recognized with an Academic Excellence Award for my Master’s in Management Engineering. 
          My foundation spans Mechanical, Marine, and Software Engineering, strengthened by certifications in Lean Six Sigma (White, Yellow, Black Belt), 
          Occupational Safety & Health, and TESL/TEFL teaching. I also hold advanced expertise in AI-powered creative direction, frontend software development, 
          and process optimization. As founder and CEO of Sculpkennel and Tech Solutions, I merge engineering expertise, software innovation, 
          and creative storytelling to deliver transformative solutions that bridge technology, education, and community impact. My work integrates system modeling, 
          usability science, and operational risk management with a passion for continuous improvement.
          Beyond engineering, I am a published author, public speaker, and ESL instructor, committed to empowering diverse audiences through knowledge and communication. 
          I am also a dedicated dog breeder, channeling my passion for nurturing into premium pet care under the Sculpkennel brand.
          My vision is to inspire and innovate, building a brand that blends engineering excellence, creative storytelling, and social impact to shape a future where technology and humanity thrive together.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
