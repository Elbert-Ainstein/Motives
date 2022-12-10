import { Form } from "@remix-run/react";

export default () => {
    return <>
        <Form onSubmit={(event)=>event.preventDefault()} method="post" className="rounded-[5vw] w-full h-full flex flex-col justify-center items-center">
            <div className="border-gray-500 border-dashed border-2 w-[50%] h-[50%] relative">
                <input type="file" className="w-full h-full opacity-0 bg-transparent " name="video" accept="audio/*,video/*,image/*" multiple onDrop={(event) => {
                    event.currentTarget.files = event.dataTransfer.files;
                }}/>
                <div className="absolute flex justify-center items-center pointer-events-none top-0 left-0 w-full h-full"><b>Drag File&nbsp;</b>or<b>&nbsp;Click me!</b></div>
            </div>
            <input type="text" required name="description" placeholder="Your description..." className="input input-bordered bg-white w-1/2 mt-4 rounded-lg text-white font-mono"/>
            <button type="submit" className=" mt-4 btn-outline btn">SUBMIT</button>
        </Form>
    </>;
}