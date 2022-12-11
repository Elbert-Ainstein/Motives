import React from 'react';
import { Link } from 'react-router-dom';
import { RiTwitterLine } from "react-icons/ri"

const Team: React.FC = () => {
    return (
        <div className="mx-auto min-h-fit sm:p-24 bg-white min-w-full items-center justify-center" id="about-us"
        >
            <div className="mx-auto mb-12 mt-12 xl:mt-2 lg:mb-18 xl:mb-20 inline-block items-center text-center justify-center w-full">
                <p className = "text-2xl inline-block text-center lg:text-4xl xl:text-5xl font-kdam text-black ">
                    Our Developer Team
                </p>
            </div>
            <div className=" mx-auto w-full items-center justify-center">
                <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
                    <div className="card border mb-10 mx-auto lg:mx-0 lg:mb-0 bg-base-100 w-96  shadow-lg shadow-gray-600">
                        <figure><img src="https://cdn.discordapp.com/avatars/584222095844704276/a_8f20b7f6f175cf9e94e0e76122cd8135.gif" alt="Elbert" className="w-full"/></figure>
                        <div className="p-8 flex my-auto bg-gray-800 text-gray-100">
                            <div className="w-fit flex-none">
                                <h2 className="card-title tracking-tight">Ian</h2>
                                <p className="opacity-50 mt-3">CEO & Founder</p>
                            </div>
                            <div className="card-action flex-1 relative justify-end w-full">
                                <button className=" btn card-action absolute right-0 justify-center w-14 h-14 btn-circle btn-ghost hover:motion-safe:animate-pulse bg-gray-900 bg-opacity-40 ">
                                    <RiTwitterLine className="w-8 h-8 text-center hover:fill-fuchsia-600 transition duration-50 hover:animate-pulseText"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card border mb-10 mx-auto lg:mx-0 lg:mb-0 bg-base-100 w-96  shadow-lg shadow-gray-600">
                        <figure><img src="https://cdn.discordapp.com/avatars/585035293313204228/84fc0feb85481d4aa1798e7e1a612be9.png" alt="Phantom" className="w-full"/></figure>
                        <div className="p-8 flex my-auto bg-gray-800 text-gray-100">
                            <div className="w-fit flex-none">
                                <h2 className="card-title tracking-tight">Andy</h2>
                                <p className="opacity-50 mt-3">Cofounder and Senior Dev</p>
                            </div>
                            <div className="card-action flex-1 relative justify-end w-full">
                                <button className=" btn card-action absolute right-0 justify-center w-14 h-14 btn-circle btn-ghost hover:motion-safe:animate-pulse bg-gray-900 bg-opacity-40 ">
                                    <RiTwitterLine className="w-8 h-8 text-center hover:fill-fuchsia-600 transition duration-50 hover:animate-pulseText"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card border mb-10 mx-auto lg:mx-0 lg:mb-0 bg-base-100 w-96 shadow-lg shadow-gray-600">
                    <figure><img src="https://cdn.discordapp.com/avatars/765448922482475030/e366fff9a544d30cc0e9c69d044b7bd5.png" alt="pennacap" className="bg-gray-900 w-full"/></figure> 
                        <div className="p-8 flex my-auto bg-gray-800 text-gray-100">
                            <div className="w-fit flex-none">
                                <h2 className="card-title tracking-tight">Joe</h2>
                                <p className="opacity-50 mt-3">Our slave</p>
                            </div>
                            <div className="card-action flex-1 relative justify-end w-full">
                                <button className=" btn card-action absolute right-0 justify-center w-14 h-14 btn-circle btn-ghost hover:motion-safe:animate-pulse bg-gray-900 bg-opacity-40 ">
                                    <RiTwitterLine className="w-8 h-8 text-center hover:fill-fuchsia-600 transition duration-50 hover:animate-pulseText"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" pb-12 sm:pb-0 mt-12 xl:mt-16 mx-auto w-fit items-center justify-center flex gap-16">
                <Link to={`help`} className="mx-auto w-full">
                    <button className="btn btn-lg w-28 bg-blue-700 hover:bg-black hover:border-blue-700 md:btn-wide mx-auto">
                        Help
                    </button>
                </Link>
                <Link to={`apply`} className="mx-auto w-full">
                    <button className="btn btn-lg w-28 bg-pink-500 hover:bg-black hover:border-pink-500 md:btn-wide mx-auto">
                        Apply
                    </button>
                </Link>
            </div>
        </div>
    )
} 


export default Team;
