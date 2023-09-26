import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Errorpages from "./../../assets/img-portfilio/Error.json"
import Lottie from 'lottie-react';

const Errorpage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='my-5 '>
            <div className=' container text-center'>
                <div className=' w-1/4 mx-auto mt-10 mb-5'>
                    <Lottie className=' bg-fuchsia-200 opacity-80 rounded-lg shadow-2xl' animationData={Errorpages} />
                </div>
                {/* <img className='rounded w-25 h-auto my-3' src={image4} alt="" /> */}
                <div className=' text-center fs-3'>
                    {/* <h2 className=' text-xl text-white'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2> */}
                    <p className='fs-3 mb-5 text-lg text-white'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        <button className='btn btn-warning opacity-90'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;