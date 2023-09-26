import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import lottieimg from "./../../assets/img-portfilio/contact.json"
import Lottie from "lottie-react";
import AOS from "aos";

const ContactMe = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_p552rll',
            'template_rs1buhk',
            form.current,
            'mMneEUHwbwb8Fp68P'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className=''>
            <div data-aos="flip-left" className=' card-body bg-slate-50 rounded-lg my-5'>
                <div>
                    <h1 className='text-3xl text-center font-bold  '>Contact <span className='text-amber-300'>Me</span></h1>
                </div>

                <div className=" my-6 ">
                    <div className=" grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
                        <div className="text-center lg:text-left m-5 p-5">

                            <Lottie animationData={lottieimg} />

                        </div>
                        <div className=" flex-shrink-0 w-full  lg:mt-20 p-5">
                            <form ref={form} onSubmit={sendEmail}>

                                <div className='grid lg:grid-cols-2  gap-3'>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="user_name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="user_email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>

                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" name="Message" placeholder="messege"></textarea>
                                </div>

                                <div className="form-control">

                                    <input className="btn btn-neutral mt-3" type="submit" value="Send" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;