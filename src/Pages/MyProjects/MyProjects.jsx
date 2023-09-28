import React, { useEffect, useState } from 'react';
import AOS from "aos";
import projectImg from "./../../assets/webLink-Img/Universe.png"
import LoadProjectData from './LoadProjectData';

const MyProjects = () => {

    // load data in api
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('projectsImg.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])



    // react aos animation
    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);



    return (

        <div data-aos="zoom-in-up" className=' bg-slate-200 m-3 my-10 py-6 rounded-lg'>
            <div className='text-center text-xl  lg:mx-36'>
                <h1 className=' font-bold text-3xl py-6'>My <span className=' text-[#009900]'>Projects</span></h1>

                <p className='m-5 mb-3 lg:mx-26 text-justify'>First of all, thank you for coming to see my project works.
                    I have also created projects using html, css java script, react, tailwind, daisyUi and various framework tools. I hope you will like my projects.  If you want you can visit my web site projects, and get an idea of ​​my work experience.  If you like my work, you can hire me.
                    I will be able to complete your project well on time with my full effort and experience.  Inshallah.</p>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 mx-2 my-10'>

                {/* card difference er part */}

                {
                    users.map(user => <LoadProjectData
                        key={user.id}
                        user={user}

                    ></LoadProjectData>)
                }

                {/* card difference er part end */}

                <div className='text center mx-auto my-auto'>
                    <button className='btn border-none  bg-amber-500 text-white mx-auto '>see more</button>
                </div>
            </div>


        </div>

    );
};

export default MyProjects;