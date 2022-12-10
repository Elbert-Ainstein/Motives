import React from "react";
import { Parallax } from 'react-scroll-parallax';

const MastHead: React.FC = () => {
    return (
        <div
            className="min-h-screen w-full relative flex flex-col
        items-center justify-center top-0 -z-10 bg-no-repeat bg-cover bg-fixed mountain" 
        >
            <Parallax speed={-50} className="absolute top-0 left-0 w-full h-full">
                <img src="https://i.pinimg.com/originals/30/1a/76/301a7693f9bd6485d69b43258697b581.jpg" className="w-full h-full" alt="bg" style={{
                    filter: "1rem"
                }}/>
            </Parallax>

            <Parallax speed={-20}  rootMargin={{top: 0, bottom: 5, right: 0, left: 0}} className="  overflow-hidden bg-transparent z-10 ">
                <div className="mastContainer md:px-20 md:py-16">
                    <h1 className=" flickertext mastText p-6 md:p-12 lg:p-16 xl:p-24 text-3xl sm:text-5xl md:text-6xl lg:text-9xl" spellCheck="false">
                        Motives
                    </h1>
                </div>
                <div className="md:mt-28 absolute w-full top-1/2 ">
                    <p className="text-center text-white sm:text-2xl md:text-3xl lg:text-4xl font-russo font-bold tracking-loose">
                        For tomorrow!
                    </p>
                </div>
            </Parallax>
        </div>
    )
}
export default MastHead;