import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "../styles/styles.module.css"
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";

const Works = () => {
    return (
        <div className="min-h-screen w-full relative bg-black overflow-hidden px-4">
            <p className="font-russo pt-12 italic text-white text-5xl text-center">
                Features
            </p>
            <div className="relative">
                <div className="min-h-fit md:px-32 md:flex pb-28 mt-6 w-full relative bg-black">
                    <LeftOne/>
                    <RightOne/>
                </div>
                <div className="min-h-fit mb-6 md:flex md:px-28 md:py-20 md:pt-16 w-full relative bg-white rounded-lg">
                    <LeftTwo/>
                    <RightTwo/>
                </div>
                <div className="min-h-fit md:px-32 md:flex pb-28 mt-6 w-full relative bg-black">
                    <LeftThree/>
                    <RightThree/>
                </div>
            </div>
        </div>
    )
}

const LeftOne = () => {
    return (
        <div className="px-4 py-20 
        px-4 md:py-24 items-center 
        justify-center motion-safe:animate-softPulse 
        min-h-fit w-full 
        md:w-1/2 ">
            <div className="mx-auto w-fit">
                <p
                className="text-white text-3xl text-center md:text-left
                    tracking-tight opacity-80 italic"
                >
                    We made it easy
                </p>
                <p className="text-white text-5xl mt-4 font-russo text-center md:text-left inline-block tracking-tight font-light ">
                    to track activities
                </p>
            </div>
        </div>
    )
}

const RightOne = () => {
    return (
        <div className="px-20 items-center justify-center motion-safe:animate-softPulse min-h-fit w-full md:w-1/2">
            <img src={img1} className="h-auto w-full md:w-1/2 border-4 mx-auto mt-6 rounded-md" />
        </div>
    )
}

const LeftTwo = () => {
    return (
        <div className="px-4 py-20 
        px-4 md:py-24 items-center 
        justify-center motion-safe:animate-softPulse 
        min-h-fit w-full 
        md:w-1/2 ">
            <div className="mx-auto w-fit">
                <p
                className="text-xl md:text-3xl text-center md:text-left
                    tracking-tight opacity-80 italic"
                >
                    So you can...
                </p>
                <p className="text-5xl mt-4 font-russo text-center md:text-left inline-block tracking-tight font-light ">
                    manage your time
                </p>
            </div>
        </div>
    )
}

const RightTwo = () => {
    return (
        <div className=" px-4 px-20 pb-4 md:pb-0 items-center justify-center motion-safe:animate-softPulse min-h-fit w-full md:w-1/2">
            <img src={img2} className="h-auto w-full md:w-1/2 border-4 mx-auto md:mt-4 md:mt-6 rounded-md" />
        </div>
    )
}

const LeftThree = () => {
    return (
        <div className="px-4 py-20 
        px-4 md:py-24 items-center 
        justify-center motion-safe:animate-softPulse 
        min-h-fit w-full 
        md:w-1/2 ">
            <div className="mx-auto w-fit">
                <p
                className="text-white text-3xl text-center md:text-left
                    tracking-tight opacity-80 italic"
                >
                    And...
                </p>
                <p className="text-white text-5xl mt-4 font-russo text-center md:text-left inline-block tracking-tight font-light ">
                    Strive for excellency
                </p>
            </div>
        </div>
    )
}

const RightThree = () => {
    return (
        <div className="px-20 items-center justify-center motion-safe:animate-softPulse min-h-fit w-full md:w-1/2">
            <img src={img3} className="h-auto w-full md:w-1/2 border-4 mx-auto mt-6 rounded-md" />
        </div>
    )
}





export default Works