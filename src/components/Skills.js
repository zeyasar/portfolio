import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mui from '../assets/muilogo.png';
import django from '../assets/django.png';
import sqlite from '../assets/sqlite.png';
import postgre from '../assets/postgre.png';
import linux from '../assets/linux.png';
import sass from '../assets/sass.png';
import agile from '../assets/Agile.png';
import jira from '../assets/jira.png';
import Bootstrap from '../assets/Bootstrap.png'
import sdlc from '../assets/sdlc.png';
import python from '../assets/python-logo.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2F6073] text-gray-300'>
        <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#b5ab23]'>Experience</p>
                <p className='py-4'>These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-4 text-center py-8 gap-4 text-xs sm:text-base'>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={HTML} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={CSS} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={FireBase} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={Mui} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Material UI</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={django} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={sqlite} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>SQLite</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={postgre} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Postgre SQL</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={linux} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Linux</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={sass} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Sass</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={agile} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Agile</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={jira} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Jira</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={sdlc} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>SDLC</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={Bootstrap} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#162c34] hover:scale-110 duration-500'>
                    <img src={python} alt="htmlIcon" className='w-10 mx-auto my-2'/>
                    <p className='my-4'>Python</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
