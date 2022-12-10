import React, { useContext, useRef } from 'react';
import { ScrollContext } from '~/utils/scroll-observer';
import { Parallax } from 'react-scroll-parallax';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) {return 0}
    else {return 1}
}

const Subtext: React.FC = () => {
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
        <div 
        className="min-h-fit z-1 mx-auto 
        px-10 lg:px-28 xl:px-48 2xl:px-96 py-24 md:py-28 items-center
        justify-center text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl
        tracking-tight bg-black" 
        
        ref={refContainer}
        >       
                <Parallax speed={20}>
                    <div className={`skillText  text-center text-white translate duration-100`} 
                    style={{
                            opacity: opacityForBlock(progress, 0)
                        }}
                    >
                        Motives is an end-to-end solution for all the self-learners out there. Our team provides a custom-tailored online platform that fits your needs. Our service is completely run by our in house team in order to ensure the best quality for you. 
                    </div>
                </Parallax>
        </div>
    )
}
// consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut <br/>
//                 labore et dolore magna aliqua. Ut <br/>
//                 enim ad minim veniam, 
//                 quis nostrud exercitation 
//                 ullamco laboris nisi ut aliquip 
//                 ex ea commodo consequat. 
//                 Duis aute irure dolor in r
//                 eprehenderit in voluptate 
//                 velit esse cillum 
//                 dolore eu fugiat nulla pariatur. "

export default Subtext