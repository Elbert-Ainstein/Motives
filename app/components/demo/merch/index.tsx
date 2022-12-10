import NavMerch from "./nav"

export default () => {
    return (
        <div className="h-screen px-20 pt-10 overflow-scroll w-full relative bg-white items-center justify-center">
            <NavMerch />
            <Landing />
        </div>
    )
}

function Landing() {
    return (
        <div className="carousel h-3/5 mt-10 w-full">
            <div id="1" className="carousel-item relative w-full h-full">
                <div className="columns-3xs w-full h-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full aspect-video" />
                    <img src="https://placeimg.com/800/200/arch" className="w-full aspect-video" />
                    <img src="https://placeimg.com/800/200/arch" className="w-full aspect-video" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#4" className="btn btn-circle">❮</a> 
                    <a href="#2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="2" className="carousel-item relative w-full">

            </div>
        </div>
        // <div className="carousel h-3/5 mt-10 w-full">
        //     <div id="slide1" className="carousel-item relative w-full">
                
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle">❮</a> 
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src="https://placeimg.com/800/200/arch" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a> 
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src="https://placeimg.com/800/200/arch" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a> 
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src="https://placeimg.com/800/200/arch" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle">❮</a> 
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
    )
}