
import React, { useEffect } from 'react';
import AOS from "aos";
import Marquee from "react-fast-marquee";
import csslogo from "./../../../assets/Logo/icons-css.png"
import Htmllogo from "./../../../assets/Logo/icons8-html-5-96.png"
import bootstraplogo from "./../../../assets/Logo/icons8-bootstrap-96.png"
import tailwindlogo from "./../../../assets/Logo/icons8-tailwind-css-96.png"
import javascriplogo from "./../../../assets/Logo/icons8-javascript-96.png"
import reactlogo from "./../../../assets/Logo/icons8-react-native-128.png"
import nodejlogo from "./../../../assets/Logo/icons8-nodejs-96.png"
import mongodblogo from "./../../../assets/Logo/icons8-mongodb.png"
import daisylog from "./../../../assets/Logo/dausyui.png"

import AutoPlayMethods from './AutoPlayMethods';

const SkillPart = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (

        <div className=' card-body m-3 bg-slate-200 rounded-lg'>   {/* data-aos="zoom-in-up" */}
            <div className='text-center text-xl  lg:mx-36'>
                <h1 className=' font-bold text-3xl py-6'>My <span className='text-[#009900]'>Skill</span></h1>

                <p className='  text-justify'>Here I made a progress circular of all my work skills.  Here I have shared all my work experiences in percentage form.  You can check my work experience by seeing this progress.  If you hire me,
                    I will be able to complete your entire website based job beautifully with my extensive work experience.</p>

            </div>

            <div className=' lg:mx-20 m-4 my-10 rounded-xl  shadow-lg'>
                <Marquee>
                    <div className='flex gap-7 '>
                        <img className=' ' src={Htmllogo} alt="" />
                        <img className='' src={csslogo} alt="" />
                        <img src={javascriplogo} alt="" />
                        <img src={bootstraplogo} alt="" />
                        <img src={tailwindlogo} alt="" />
                        <img className='w-24 h-auto' src={daisylog} alt="" />
                        <img className='w-24 h-auto' src={reactlogo} alt="" />
                        <img src={nodejlogo} alt="" />
                        <img src={mongodblogo} alt="" />
                    </div>
                </Marquee>
            </div>


            <div className='lg:mx-20  my-10 p-3 ml-10 lg:px-5 py-6'>
                {/* autoplay import in side */}
                <AutoPlayMethods> </AutoPlayMethods>
            </div>

        </div>

    );
};

export default SkillPart;