import React from 'react';
import { Link } from 'react-router-dom';
// import linkdin from './../assets/img-portfilio/icons8-linkedin.svg'
import { ImFacebook2, ImLinkedin, ImYoutube, ImTwitter, ImGithub } from "react-icons/im";

const Footers = () => {
    return (
        <div>
            <footer className="footer p-10  bg-violet-800 text-white ">


                <div className=' mx-auto'>
                    <div className='mx-auto '>
                        <nav >
                            <div className="grid grid-flow-col gap-4  ">

                                <Link to="https://www.facebook.com/Jahidul.Islam.CM/" target="_blank" className=' text-white hover:text-black text-xl'><ImFacebook2></ImFacebook2> </Link>
                                <Link to="https://www.linkedin.com/in/jahidul-islam-b1aa98224/" target="_blank" className=' text-white hover:text-black text-xl'><ImLinkedin></ImLinkedin></Link>
                                <Link to="https://github.com/Jahidul37" target="_blank" className=' text-white hover:text-black text-2xl'><ImGithub></ImGithub></Link>
                                <Link to="https://www.youtube.com/@jicjacmedia8525" target="_blank" className=' text-white hover:text-black text-2xl'><ImYoutube></ImYoutube></Link>
                                {/* <Link to="" target="_blank" className=' text-white text-2xl'><ImTwitter></ImTwitter></Link> */}
                                {/* <Link><button>{linkdin}</button></Link> */}
                            </div>
                        </nav>
                    </div>
                    <div className=' mx-auto'>
                        <h1 className=' text-3xl font-bold text-center mt-3 '>Jahidul Islam</h1>

                        <Link to="/about"> <button className='m-2 text-white text-lg font-semibold'>About</button></Link>
                        <Link to=""><button className='m-2 text-lg font-semibold text-white'>Resume</button></Link>
                        <Link to=""><button className='m-2 text-lg font-semibold text-white'>Download Cv</button></Link>
                        <Link to="/contact"><button className='m-2 text-white border-0 outline-none text-lg font-semibold'>Hire Me</button></Link>

                    </div>

                    <div className="p-4 mx-auto bg-violet-800 text-base-content">
                        <aside>
                            <p>Copyright © 2023 - All right reserved by Jahidul Islam.</p>
                        </aside>
                    </div>

                </div>




            </footer>
        </div>
    );
};

export default Footers;