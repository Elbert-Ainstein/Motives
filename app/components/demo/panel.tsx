import { useState } from "react"
import Details from "./components/events/details";
import Overview from "./components/events/overview";
import Create from "./components/exclusive/create";
import Overview2 from "./components/exclusive/overview";
import LoginInfo from "./components/info/logininfo";
import PageInfo from "./components/info/pageinfo";
import Analytics2 from "./components/page/analytics";
import Analytics from "./components/store/analytics";
import Discounts from "./components/store/discounts";
import Products from "./components/store/products";

export default () => {
    const [state, setState] = useState(9);
    const dict = {
        1 : Products,
        2 : Discounts,
        3 : Analytics,
        4 : Details,
        5 : Overview,
        6 : Create,
        7 : Overview2,
        8 : Analytics2,
        9 : LoginInfo,
        10 : PageInfo
    }
    return (
    <div className="h-screen w-full flex flex-col justify-between items-center">
        <div className="hidden md:block w-full flex flex-row h-full">
            <div className="md:w-[33%] bg-white flex flex-col btn-group items-center flex-nowrap flex-shrink-0">
                <p className="font-russo pr-4 py-6 italic text-7xl">
                    C
                </p>
                <div className="divider"/>
                <p className="mb-8">
                    STORE
                </p>
                <button className={`btn btn-ghost w-full ${state==1 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(1)} >PRODUCTS</button>
                <button className={`btn btn-ghost w-full ${state==2 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(2)} >DISCOUNTS</button>
                <button className={`btn btn-ghost w-full ${state==3 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(3)} >ANALYTICS</button>
                <div className="divider h-8"/>
                <p className="mb-8">
                    EVENTS
                </p>

                <button className={`btn btn-ghost w-full ${state==4 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(4)} >EDIT DETAILS</button>
                <button className={`btn btn-ghost  w-full ${state==5 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(5)} >OVERVIEW</button>
                <div className="divider"/>
                <p className="mb-8">
                    EXCLUSIVE CONTENT
                </p>

                <button className={`btn btn-ghost w-full ${state==6 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(6)} >CREATE POST</button>
                <button className={`btn btn-ghost w-full ${state==7 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(7)} >OVERVIEW</button>
                <div className="divider"/>
                <p className="mb-8">
                    PAGE
                </p>
                <button className={`btn btn-ghost w-full ${state==8 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(8)} >ANALYTICS</button>
                <div className="divider"/>
                <p className="mb-8">
                    INFO
                </p>

                <button className={`btn btn-ghost w-full ${state==9 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(9)} >LOGIN INFO</button>
                <button className={`btn btn-ghost w-full ${state==10 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(10)} >PAGE INFO</button>
            </div>
                
            <div className=" w-full h-full">
                {dict[state as number]()}
            </div>
        
        </div>
        <div className="md:hidden relative w-full flex py-6">
            <p className="font-russo italic text-7xl">
                C
            </p>
            <div className="absolute right-0 dropdown dropdown-hover dropdown-end">
                
                <label tabIndex={0} className="btn m-1">Hover</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <p className="text-center mt-2 font-bold">STORE</p>
                    <div className="border"/>
                    <li><button className={`btn btn-xs p-2 sm:btn-sm md:btn btn-ghost w-full ${state==1 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(1)} >Products</button></li>
                    <li><button className={`btn btn-xs p-2 sm:btn-sm md:btn btn-ghost w-full ${state==1 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(2)} >Discounts</button></li>
                    <li><button className={`btn btn-xs p-2 sm:btn-sm md:btn btn-ghost w-full ${state==1 ? 'bg-pink-700 rounded-none' : ''}`} onClick={(ev) => setState(3)} >Statistics</button></li>
                    <div className="border mt-2"/>
                    <p className="text-center font-bold">EVENTS</p>
                    <div className="border"/>
                </ul>
            </div>
        </div>
            
    </div>
    )
}