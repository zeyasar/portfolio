import React from 'react';
import milestone from '../assets/mılestoneProject.gif';
import recipe from '../assets/recipeApp.gif';
import movieApp from '../assets/movıeApp.gif';
import manageEmp from '../assets/manageEmployee.gif';
import contactApp from '../assets/contactApp.gif';
import repo from '../assets/repo.png';



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#2F6073]'>
        <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#b5ab23]'>My Project</p>
                <p className='py-6'>Check out some of my recent project.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${milestone})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://milestone-project.netlify.app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zeyasar/milestone-project" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${recipe})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://recipe-app-z.herokuapp.com" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zeyasar/recipe-app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${movieApp})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://movie-project-firebase.netlify.app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zeyasar/Movie_App_Project_with_Firebase" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${manageEmp})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://manage-employee-bay.vercel.app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zeyasar/manage-employee" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${contactApp})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://fire-contact-app.netlify.app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zeyasar/fire-contact-app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${repo})`}} 
                className='shadow-lg shadow-[#162c34] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            More Project
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="https://recipe-app-z.herokuapp.com" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/zeyasar?tab=repositories" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work