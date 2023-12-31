import React, { useEffect } from 'react';
import AOS from "aos";
import imgjahid from '../../../assets/img-portfilio/jahidul.png'
import { ImArrowRight2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (
        <div data-aos="zoom-in" className=' card-body rounded-xl m-3 my-10 bg-slate-200'>
            <div className=' text-center '>
                <h1 className=' text-3xl font-bold pt-4 '>About <span className='text-[#009900]'>me</span> </h1>
                <div className='py-5  lg:px-32 text-justify:sm'>
                    <p>This section contains brief about me.  If you want to know more about me, you can see my CV or resume.
                        Here you can know about me and my work experience, thanks.</p>
                </div>
            </div>
            <div className="hero mb-8">
                <div className="hero-content gap-x-10 flex-col lg:flex-row">
                    <img data-aos="zoom-out-left" src={imgjahid} className="lg:max-w-sm   rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Hello I Am <span className='text-[#009900]'>Jahidul Islam.</span> </h1>
                        <p className="py-5 text-justify">I am a MERN Stack Developer. As a MERN stack developer, I have a good understanding of HTML, CSS, and JavaScript, and I have successfully worked on over 10 projects.
                            With my expertise in these core technologies, I specialize in building dynamic and responsive web applications. In my portfolio, I have developed a diverse range of projects,
                            including e-commerce websites, social media platforms, content management systems, and more.</p>
                        <div className=' space-y-3 my-3'>
                            <p className=' font-semibold'><span className=' text-lg me-8'>Name</span> : Jahidul Islam.</p>
                            <p className=' font-semibold'><span className=' text-lg me-12'>Age</span> : 23</p>
                            <p className=' font-semibold'><span className=' text-lg me-2'>Address</span> : Mirpur, Dhaka</p>
                            <p className=' font-semibold'><span className=' text-lg me-7'>Phone</span> : 01608276728.</p>
                            <p className=' font-semibold'><span className=' text-lg me-9'>Email</span> : jahidul.islam6610@gmail.com</p>

                        </div>
                        <Link to="/contact"><button className="btn border-none  bg-[#009900] text-white opacity-90">Get in touch <ImArrowRight2></ImArrowRight2></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;