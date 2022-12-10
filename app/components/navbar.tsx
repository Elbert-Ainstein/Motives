import { Link } from "react-router-dom";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <div className="navbar opacity-90 z-10 top-0 left-0 bg-black sticky w-full ">
            <div className="navbar-start">
                <Link className="btn btn-ghost font-russo italic text-white text-6xl" to="/" style={{ height: "66px" }}>
                    <p className="pr-4">
                        M
                    </p>
                </Link>
            </div>
            <div className="navbar-center mx-auto hidden md:flex">
                <ul className="menu menu-horizontal p-0 text-white font-russo">
                    <li><Link to={`/`} className="font-bold text-2xl font-russo italic ">Home</Link></li>
                    <li><Link to={`/help`} className="font-bold text-2xl font-russo italic ">Help</Link></li>
                    {/* <li><Link to={`/explore`} className="font-bold">Explore</Link></li> */}
                    
                    
                </ul>
            </div>
            <div className="navbar-end hidden md:flex gap-4">
                {/* <Cart />
                <div className="flex-none w-full w-28">
                    <Link to={`/signup`}
                        className="font-bold w-full text-white navbar-end justify-center btn btn-outline hover:bg-white hover:text-black transition duration-300"
                    >
                        Sign in
                    </Link>
                </div>
                <div className="flex-none w-full w-28">
                    <Link to={`/login`}
                        className="font-bold w-full navbar-end justify-center hover:bg-black hover:text-green-400 btn btn-success "
                    >
                        Log In
                    </Link>
                </div> */}
            </div>
            <div className="dropdown dropdown-end absolute z-10 right-0 mr-8">
                <label tabIndex={0} className=" btn md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white rounded-box w-52 font-sans-serif bg-gray-900 sm:bg-gray-800">
                    <li><Link to={`/`} className="font-bold">Home</Link></li>
                    <li><Link to={`/help`} className=" font-russo italic font-bold">Help</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;