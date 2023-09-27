import React from 'react';
import { Link } from 'react-router-dom';

const LoadProjectData = ({ user }) => {
    console.log(user.name);
    const { id, category, name, img, liveLink } = user;

    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            className='mb-3'>

            <div className="card card-compact  w-90 mx-2 bg-white shadow-xl">
                <figure><img className=' w-auto h-[300px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-4 min-[220px]">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={liveLink} target='blank'><button className="btn border-none  bg-[#009900] text-white ">live link</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoadProjectData;