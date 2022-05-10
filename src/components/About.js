import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2F6073] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#b5ab23]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Zeynep, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="indent-8 text-justify">
            I have been interested in web development for the last 1 year. 
            My passion in this field increases as I learn new tools.
            I'm patient, determined and a team player.
            I become a better developer day by day with the leadership,
             organization, empathy and communication skills which 
             I gained past 10 years of psychological counselling and ecommerce management.
            If you have any questions, opinions or suggestions on any subject, 
            please do not hesitate to let me know. 
            You can reach me via the contact page, linkedin or e-mail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
