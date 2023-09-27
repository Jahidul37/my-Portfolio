import React from 'react';
import { Link } from 'react-router-dom';
// import "./HeadersNav.css"

const HeadersNav = () => {
    const navitems = <>
        <Link to='/'><li className='p-2 text-[#5dd606] '>Home</li></Link>
        <Link to='/about'><li className='p-2 text-[#5dd606] '>About</li></Link>
        <Link to='/myprojects'><li className='p-2 text-[#5dd606]'>Projects</li></Link>
        <Link to='/blog'><li className='p-2 text-[#5dd606]'>Blogs</li></Link>
        <Link to='/contact'><li className='p-2 text-[#5dd606]'>Contact</li></Link>

    </>
    return (
        <div className="navbar ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <h3 className=" text-3xl font-bold mx-4 text-[#5dd606] ">Jahidul</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl ">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/contact"> <li className="  btn border-none btn-outline  bg-[#5dd606] text-white">Hire Me</li></Link>

            </div>
        </div>
    );
};

export default HeadersNav;