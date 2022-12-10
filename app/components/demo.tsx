import { useRef, useState } from "react";
import Merch from "./demo/merch";
import Panel from "./demo/panel";

 
export default () => {
     const [state, setState] = useState<number>(1);
     return (
        <div className="bg-white z-10 border-y-2">
            <div className="md:btn-group flex md:flex-row flex-col bg-white border-y-2">
                <button className={`w-1/2 md:w-auto mx-auto md:mb-8 md:ml-8 mt-8 btn btn-ghost grow  ${state==1 ? 'bg-fuchsia-600 text-white' : ''}`} onClick={(ev) => setState(1)} >MERCH</button>
                <button className={`w-1/2 md:w-auto mx-auto md:mb-8 md:mt-8 btn btn-ghost  grow ${state==2 ? 'bg-fuchsia-600 text-white' : ''}`} onClick={(ev) => setState(2)} >EXCLUSIVE</button>
                <button className={`w-1/2 md:w-auto mx-auto md:mb-8 md:mt-8 btn btn-ghost   grow ${state==3 ? 'bg-fuchsia-600 text-white' : ''}`} onClick={(ev) => setState(3)} >EVENT</button>
                <button className={`w-1/2 md:w-auto mx-auto mb-8 md:mr-8 md:mt-8 btn btn-ghost grow  ${state==4 ? 'bg-fuchsia-600 text-white' : ''}`} onClick={(ev) => setState(4)} >PANEL</button>
            </div>
            <div className="">
            {
                state == 1 ? <Merch /> : ""
            }
            {
                state == 4 ? <Panel /> : ""
            }
            </div>
        </div>
    )
};