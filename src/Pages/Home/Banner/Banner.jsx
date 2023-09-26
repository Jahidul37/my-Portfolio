
import "aos/dist/aos.css";
import { ImDownload3 } from "react-icons/im";
import { Typewriter } from 'react-simple-typewriter';
import imgjahid from "../../../assets/img-portfilio/jahidul.png"
import DownloadCV from "./../../../assets/CvResume/Jahidul CV .pdf"

import "./Banner.css"
import { Link } from "react-router-dom";

const Banner = () => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []); 
    return (

        <div className='  min-w-full lg:flex place-content-around my-16'>
            <div className=' my-auto mx-4 w-full' >
                <h4 className='text-2xl  font-bold py-6 text-white'>Welcome to my portfolio</h4>
                <h1 className="text-5xl font-bold">HI! I am <span className='text-amber-300'>Jahidul Islam.</span></h1>
                <div className=''>
                    <h1 className='text-4xl my-6 font-extrabold min-h-[80px] text-white drop-shadow-lg '>
                        I'M A{' '}
                        <span style={{ color: '#FCD34D', fontWeight: '' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Mern Stack developer|', 'React Developer|', 'Frontend Developer |']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                </div>
                <div className="my-10">


                    {/* import Resume pdf from assest folder */}
                    <Link
                        to={DownloadCV}
                        download="DownloadCV-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn btn-active  opacity-90 btn-warning m-2">
                            Resume<ImDownload3></ImDownload3></button>
                    </Link>

                    {/* import download cv pdf from assest folder */}
                    <Link
                        to={DownloadCV}
                        download="DownloadCV-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn btn-warning opacity-90 m-2">Download Cv</button>
                    </Link>

                </div>
            </div>

            <div className='my-auto relative'>
                <img className='max-w-sm  rounded-full shadow-2xl z-10' src={imgjahid} alt="" />
            </div>
        </div>

    );
};

export default Banner;