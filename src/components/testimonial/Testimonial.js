import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-4 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-4 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  const testimonials = [
    {
      img: testimonialOne,
      role: "Head of Training Department",
      name: "Kevin Dy Tria",
      company: "Alpha Aviation Group",
      title: "On-the-job training in Aircraft Maintenance Tech Department",
      feedback:
        "Working with Sylvanus during his internship was truly refreshing. His attention to detail during line maintenance checks and aircraft servicing was top-notch. He was reliable, fast-learning, and showed great initiative even under pressure.",
    },
    {
      img: testimonialTwo,
      role: "Occupational Safety and Health Consultant",
      name: "Leopoldo R. Rausa Jr",
      company: "COSH Training Institute",
      title: "COSH Safety Program",
      feedback:
        "Sylvanus was one of the most engaged trainees during our COSH training. His ability to grasp critical safety principles and apply them to real-world engineering problems was exceptional. He asked intelligent questions and contributed meaningfully during case simulations.",
    },
    {
      img: testimonialOne,
      role: "University President",
      name: "Dr. Jaime I. Manuel, Jr.",
      company: "Don Mariano Marcos Memorial State University - Philippines",
      title: "Public speaking / Debate Participation",
      feedback:
        "Sylvanus transformed our speech and debate club with his dynamic teaching style. Students thrived under his mentorship, winning regional public speaking contests. His storytelling approach resonates deeply with learners of all ages.",
    },
    {
      img: testimonialTwo,
      role: "Tech Startup Founder",
      name: "Engr. Harrison Onuh",
      company: "KitchenHall App",
      title: "Full-stack Project Contributor",
      feedback:
        "Engr. Sylvanus played a crucial role as a front-end developer on our KitchenHall project. His React.js skills and eye for clean UI helped us ship faster and look better. He’s communicative, responsive, and technically solid.",
    },
    {
      img: testimonialOne,
      role: "ESL Student",
      name: "Haohao & Yueyue",
      company: "Online ESL Sessions",
      title: "English Fluency Coaching",
      feedback:
        "Teacher. Sylvanus is the best ESL teacher I’ve ever had. He makes learning English feel natural and fun. I became confident in speaking at work meetings after just a few months. He corrects mistakes kindly and gives useful tips every lesson.",
    },
  ];

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black overflow-hidden"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
                {/* Left: Photo and Info */}
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={item.img}
                    alt={`testimonial ${index + 1}`}
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      {item.role}
                    </p>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Right: Quote and Text */}
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        {item.title}
                      </h3>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      {item.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
