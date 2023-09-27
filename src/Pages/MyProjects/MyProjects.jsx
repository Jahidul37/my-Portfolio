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
                <h1 className=' font-bold text-3xl py-6'>My <span className=' text-[#5dd606]'>Projects</span></h1>

                <p className=' lg:mx-20'>Welcome to browse my website project.
                    You can know about my work experience by working on my website project.</p>

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
                    <button className='btn border-none  bg-[#3bca58] text-white mx-auto '>see more</button>
                </div>
            </div>


        </div>

    );
};

export default MyProjects;