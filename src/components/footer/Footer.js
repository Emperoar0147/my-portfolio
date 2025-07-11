import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // X icon from react-icons
import { logo } from '../../assets/index';
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <TbBrandX />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Easy Access Link</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
  to="/#home"
  smooth
  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
>
  About Me
  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
</Link>
          </li>
          <li>
            <Link
  to="/#resume"
  smooth
  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
>
  Resume
  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
</Link>
          </li>
          <li>
            <Link
  to="/#features"
  smooth
  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
>
  Services
  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
</Link>
          </li>
          <li>
            <Link
  to="/blog"
  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
>
  Blog
  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
</Link>
          </li>
          <li>
            <Link
  to="/#contact"
  smooth
  className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
>
  Contact
  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
