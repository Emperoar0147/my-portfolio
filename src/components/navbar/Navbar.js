import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { logo } from "../../assets/index";

const navLinksdata = [
  { _id: 1, title: "Home", link: "home", type: "scroll" },
  { _id: 2, title: "Features", link: "features", type: "scroll" },
  { _id: 3, title: "Projects", link: "projects", type: "scroll" },
  { _id: 4, title: "Resume", link: "resume", type: "scroll" },
  { _id: 5, title: "Testimonials", link: "testimonial", type: "scroll" },
  { _id: 6, title: "Contact", link: "contact", type: "scroll" },
  { _id: 7, title: "Blog", link: "/blog", type: "route" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <RouterLink to="/">
          <img src={logo} alt="logo" />
        </RouterLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link, type }) => (
          <li
            key={_id}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
          >
            {type === "scroll" && isHome ? (
              <ScrollLink
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </ScrollLink>
            ) : (
              <RouterLink to={type === "scroll" ? "/" : link}>
                {title}
              </RouterLink>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <RouterLink to="/">
                <img className="w-32" src={logo} alt="logo" />
              </RouterLink>
              <p className="text-sm text-gray-400 mt-2">
                Visionary Engineer, Innovator, Entrepreneur, and CEO of Sculp Kennel and Tech Solutions.
          As an Engineering Manager, Mechanical, Marine, and Software Engineer, Stanford-Certified Data Science Professional, 
          and Lean Six Sigma Yellow Belt, I bring multidisciplinary expertise in software development, process optimization, 
          and operational risk management. Beyond engineering, I’m a passionate Author, Public Speaker, ESL Instructor, 
          and Dog Breeder—committed to delivering excellence in premium pet care and transformative tech solutions for businesses and individuals.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {navLinksdata.map(({ _id, title, link, type }) => (
                <li
                  key={_id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  {type === "scroll" && isHome ? (
                    <ScrollLink
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={type === "scroll" ? "/" : link}
                      onClick={() => setShowMenu(false)}
                    >
                      {title}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
              <div className="flex gap-4">
                <a href="https://facebook.com/Sculpkennel" target="_blank" rel="noreferrer" className="bannerIcon"><FaFacebookF /></a>
                <a href="https://x.com/Sculp_Kennel" target="_blank" rel="noreferrer" className="bannerIcon"><TbBrandX /></a>
                <a href="https://linkedin.com/in/emperoar" target="_blank" rel="noreferrer" className="bannerIcon"><FaLinkedinIn /></a>
                <a href="https://instagram.com/sculp_kennel" target="_blank" rel="noreferrer" className="bannerIcon"><FaInstagram /></a>
              </div>
            </div>

            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
