import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";


export default class AutoPlayMethods extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (


            <Slider className="" ref={slider => (this.slider = slider)} {...settings}>

                <div>
                    <div className="radial-progress" style={{ "--value": "80", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>80%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-20 ">Html</h5>
                        <h6 className="ml-14 text-[#009900]">Intermediate</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "70", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>80%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-20 ">CSS</h5>
                        <h6 className="ml-14 text-[#009900]">Familier</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "75", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>75%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-14 ">BootStrap</h5>
                        <h6 className="ml-14 text-[#009900]">Familier</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "80", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>80%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-12 ">Tailwind Css</h5>
                        <h6 className="ml-12 text-[#009900]">Intermidiate</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "85", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>85%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-14 ">DaiusyUi</h5>
                        <h6 className="ml-14 text-[#009900]">Advance</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "80", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>80%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-14 ">React</h5>
                        <h6 className="ml-8 text-[#009900]">Intermidiate</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "70", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>70%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-14 ">Node Js</h5>
                        <h6 className="ml-14 text-[#009900]">Familier</h6>
                    </div>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "70", color: "#009900", "--size": "12rem", "--thickness": "20px" }}>70%</div>
                    <div className=" my-6 text-xl font-bold ">
                        <h5 className="ml-14 ">MongoDb</h5>
                        <h6 className="ml-14 text-[#009900]">Familier</h6>
                    </div>
                </div>

            </Slider>


        );
    }
}