
import React, { useEffect } from 'react';
import AOS from "aos";
const Quotes = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"

            className=" card-body m-3 rounded-lg my-10 py-4 bg-slate-50  relative">
            <div className="content text-center ">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold text-amber-300 mb-4">Quotes</h1>
                    <span className='text-5xl'>"</span>
                    <p className="py-3 text-xl font-bold m-2">"If you want to live a happy life, tie it to a goal, not to people or things."</p>
                    <h4 className='text-2xl font-semibold'> — Albert Einstein —</h4>
                </div>
            </div>
        </div>
    );
};

export default Quotes;