import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Mechanical Engineer.", "Marine Engineer.", "Software Engineer.", "Safety Officer.", "Dog Lover & Breeder.", "Crypto Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">"NON POTES DARE QUOD NON HABES" ( you cannot give what you do not have ).</h4>
        <h1 className="text-6xl font-bold text-white">
          Hello, I'm <span className="text-designColor capitalize"> Engr. Sylvanus Uzor</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A Multifaceted Engineer, an Entrepreneur & CEO, SCULP KENNEL and Tech Solutions. 
          Sculp Kennel and Tech Solutions offers 
          expert dog breeding, importation, 
          and premium pet accessories, alongside 
          innovative tech services for businesses 
          and individuals. We are your trusted partner 
          for both pet care and tech solutions.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner