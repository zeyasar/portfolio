import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2F6073] text-gray-200">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
        <Link  to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link  to="about" smooth={true} duration={500}>
        About
        </Link>
        </li>
        <li>
        <Link  to="skills" smooth={true} duration={500}>
        Skills
        </Link>
        </li>
        <li>
        <Link  to="work" smooth={true} duration={500}>
        Work
        </Link>
        </li>
        <li>
        <Link  to="contact" smooth={true} duration={500}>
        Contact
        </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2F6073] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
        About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
        Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="work" smooth={true} duration={500}>
        Work
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
        Contact
        </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(51,117,176)]">
            <a href="https://www.linkedin.com/in/zeynep-yasar-dev/" target='_blank' rel="noreferrer" className="flex justify-between items-center w-full text-gray-300">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="https://github.com/zeyasar" target='_blank' rel="noreferrer" className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F2A413]">
            <a href="mailto:zynpysr67@gmail.com" target='_blank' rel="noreferrer" className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F26938]">
            <a href="#!" target='_blank' rel="noreferrer" className="flex justify-between items-center w-full text-gray-300">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
