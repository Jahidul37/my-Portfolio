import React from 'react';

const LoadProjectData = ({ user }) => {
    console.log(user.name);
    const { id, category, name, img } = user;

    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            className='mb-3'>

            <div className="card card-compact w-96 bg-white shadow-xl">
                <figure><img className=' ' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-4">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning opacity-90">view Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoadProjectData;