import React, {useContext, useRef} from "react";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) {return 1}
    else {return 0.2}
}

const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    
    const numOfPages = 3
    let progress = 0

    const { current: elContainer } = refContainer;
    if( elContainer ) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = 
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight;
        console.log(percentY);
        progress = 
            Math.min(
                numOfPages - 1, 
                Math.max(0.5, percentY * numOfPages )
            )
        console.log(progress)
    }

    return(
        <div ref={refContainer} className=" relative text-black items-center justify-center w-full bg-white" 
        // style={{
        //     backgroundColor: "#060606"
        // }}
        >
            <div 
            className="min-h-screen max-w-5xl mx-auto 
            px-10 lg:px-18 py-24 md:py-28 lg:py-36 xl:py-28 flex 
            flex-col items-center
            justify-center text-4xl md:text-6xl lg:text-7xl 
            tracking-tight font-semibold"> 
                <div className="leading-[1.15]">
                    <div 
                    className={`skillText`} style={{
                        opacity: opacityForBlock(progress, 0)
                    }} >We know our tools inside out.</div>
                    <span 
                    className={`skillText inline-block
                    after:content-['_']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }} 
                    > 
                        Our team has has had years of experience and have come together to help you
                    </span>
                    <span 
                    className={`skillText inline-block`} 
                    style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                        {" "}We're offering a suite of tools to make you motivated; to let you progress
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Skills