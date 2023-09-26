import React, { useEffect } from 'react';
import AOS from "aos";
import projectImg from "./../../assets/Bannerimg/background1.jpg"

const MyProjects = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (

        <div data-aos="zoom-in-up" className=' bg-slate-50 w-full py-6 rounded-lg'>
            <div className='text-center text-xl  lg:mx-36'>
                <h1 className=' font-bold text-3xl py-6'>My <span className='text-amber-300'>Projects</span></h1>

                <p className=' lg:mx-20'>Welcome to browse my website project.
                    You can know about my work experience by working on my website project.</p>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 lg:ml-5 ml-1 my-10'>

                {/* card difference er part */}

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className='mb-3'>

                    <div className="card card-compact w-96 bg-white shadow-xl">
                        <figure><img src={projectImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning opacity-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className='mb-3'>

                    <div className="card card-compact w-96 bg-white shadow-xl">
                        <figure><img src={projectImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning opacity-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className='mb-3'>

                    <div className="card card-compact w-96 bg-white shadow-xl">
                        <figure><img src={projectImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning opacity-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className='mb-3'>

                    <div className="card card-compact w-96 bg-white  shadow-xl">
                        <figure><img src={projectImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning opacity-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className='mb-3'>

                    <div className="card card-compact w-96 bg-white shadow-xl">
                        <figure><img src={projectImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning opacity-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* card difference er part end */}

            </div>
        </div>

    );
};

export default MyProjects;