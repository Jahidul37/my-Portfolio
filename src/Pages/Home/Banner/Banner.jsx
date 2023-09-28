
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

        <div className='  min-w-sm sm:mx-5 lg:flex place-content-around my-16'>
            <div className=' my-auto mx-4 lg:min-w-[806px] ' >
                <h4 className='text-2xl  font-bold py-6 text-white'>Welcome to my portfolio</h4>
                <h1 className="text-5xl font-bold I'M text-amber-500 ">HI! I am <span className='text-[#009900]'>Jahidul Islam.</span></h1>
                <div className=''>
                    <h1 className='text-4xl my-6 font-extrabold min-h-[85px] text-white drop-shadow-lg '>
                        I'M A{' '}
                        <span style={{ color: '#009900', fontWeight: '' }}>
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
                        <button className="btn border-none  bg-[#009900] text-white  m-2">
                            Resume<ImDownload3></ImDownload3></button>
                    </Link>

                    {/* import download cv pdf from assest folder */}
                    <Link
                        to={DownloadCV}
                        download="DownloadCV-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn border-none  bg-[#009900] text-white m-2">Download Cv</button>
                    </Link>

                </div>
            </div>

            <div className='my-auto  relative'>
                <img className=' w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto  rounded-full shadow-2xl z-10' src={imgjahid} alt="" />
            </div>
        </div>

    );
};

export default Banner;