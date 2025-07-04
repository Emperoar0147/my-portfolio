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
        <h3 className="text-3xl font-bold text-white">Engr. Sylvanus Uzor</h3>
        <p className="text-lg font-normal text-gray-400">
          A Multifaceted Engineer & Entrepreneur.
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          "Visionary Engineer, Innovator, Entrepreneur, and CEO of Sculp Kennel and Tech Solutions.
          As an Engineering Manager, Mechanical, Marine, and Software Engineer, Stanford-Certified Data Science Professional, 
          and Lean Six Sigma Yellow Belt, I bring multidisciplinary expertise in software development, process optimization, 
          and operational risk management. Beyond engineering, I’m a passionate Author, Public Speaker, ESL Instructor, 
          and Dog Breeder—committed to delivering excellence in premium pet care and transformative tech solutions for businesses and individuals."
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
