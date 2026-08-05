import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Import FaInstagram
import { TbBrandX } from "react-icons/tb"; // Import X icon
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Engr. Sylvanus C. Uzor</h3>
        <p className="text-lg font-normal text-gray-400">
          Visionary Engineer | Innovator | Entrepreneur | CEO of Sculpkennel and Tech Solutions | Published Author
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          "Multidisciplinary engineer and academic researcher recognized with an Academic Excellence Award for my Master’s in Management Engineering. 
          My expertise spans Mechanical, Marine, and Software Engineering, strengthened by certifications in Lean Six Sigma (White, Yellow, Black Belt), 
          Occupational Safety & Health, and TESL/TEFL teaching. I also hold advanced training in Data Science and Precision Medicine from Stanford Medicine, 
          alongside specialization in frontend software engineering. As founder and CEO of Sculpkennel and Tech Solutions, I merge engineering management, 
          software innovation, and creative storytelling to deliver transformative solutions for businesses and communities. My work integrates process optimization, 
          operational risk management, and AI‑powered creative direction, while my entrepreneurial ventures extend into premium pet care and dog breeding programs under the Sculpkennel brand.
          Beyond engineering, I am a published author, public speaker, and ESL instructor, committed to inspiring diverse audiences and fostering knowledge exchange. My vision is to build a brand that blends technical excellence, 
          creative impact, and social responsibility—driving innovation that bridges technology, education, and humanity."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+639554556537</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sylvanusuzor@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/Sculpkennel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://x.com/Sculp_Kennel?t=Q2n2VzmYiylow5VDRq0oKA&s=09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <TbBrandX />
          </a>
          <a 
            href="https://www.linkedin.com/in/emperoar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://www.instagram.com/sculp_kennel"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
