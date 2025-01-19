import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // X (formerly Twitter) icon

const Media = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Follow me on</h2>
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
};

export default Media;
