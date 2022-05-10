import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#2F6073] w-full h-screen">
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#b5ab23]">Hi, my name is</p>
        <h1 className="text-4xl sm:text7xl font-bold text-[#f4fce2]">
          Zeynep Yasar
        </h1>
        <h2 className="text-4xl sm:text7xl font-bold text-[#aeb58f]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#aeb58f] py-4 max-w-[700px]">
          I'm well on the way to completing the full stack developer course. 
          You can take a look at my work on front end in the work section. 
          Loading backend...
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b5ab23] hover:border-[#b5ab23] hover:text-black">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
