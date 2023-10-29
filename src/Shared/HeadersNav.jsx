import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import "./HeadersNav.css"
import { BiMenu } from "react-icons/bi";


const HeadersNav = () => {
    // for active button windows.location used  here .
    const location = useLocation();

    const navitems = <>
        <NavLink exact to='/' activeClassName='active'>
            <li className='p-2 ' style={{ color: window.location.pathname === '/' ? '#009900' : '#e8eae8' }}>Home</li>
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
            <li className='p-2' style={{ color: window.location.pathname === '/about' ? '#009900' : '#e8eae8' }}>About</li>
        </NavLink>
        <NavLink to='/myprojects' activeClassName='active'>
            <li className='p-2' style={{ color: window.location.pathname === '/myprojects' ? '#009900' : '#e8eae8' }}>Projects</li>
        </NavLink>
        <NavLink to='/blog' activeClassName='active'>
            <li className='p-2' style={{ color: window.location.pathname === '/blog' ? '#009900' : '#e8eae8' }}>Blogs</li>
        </NavLink>
        <NavLink to='/contact' activeClassName='active'>
            <li className='p-2' style={{ color: window.location.pathname === '/contact' ? '#009900' : '#e8eae8' }}>Contact</li>
        </NavLink>
    </>

    return (
        <div className="navbar ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-3xl">
                        <BiMenu></BiMenu>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <h3 className=" text-3xl font-bold mx-4 text-[#e8eae8] ">Jahidul</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl ">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/contact"> <li className="  btn border-none btn-outline  bg-[#009900] text-white">Hire Me</li></Link>

            </div>
        </div>
    );
};

export default HeadersNav;