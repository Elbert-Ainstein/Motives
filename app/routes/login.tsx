import {Form, Link} from "@remix-run/react"
import {FcGoogle} from "react-icons/fc"



export default () => {
    return (
        <div className="bg-black w-full min-h-screen justify-center flex items-center">
            <div className="p-8 card bg-gray-700 bg-opacity-30 flex flex-col justify-center h-auto"> 
                <p className="tracking-widest text-5xl text-white m-2 pt-4 text-center font-questrial">Login</p>
                <div className='items-left card-body px-14 py-20 md:pr-24 md:py-24 items-center justify-center motion-safe:animate-softPulse min-h-fit md:min-h-screen w-full sm:w-1/2 md:absolute md:right-0'>
                    <Form action="/login" method="post">
                        <div className="form-control font-sans p-2 rounded-lg bg-gray-900 bg-opacity-80">
                            <label className="pl-3 label indicator ">
                                <div className="indicator text-gray-100 font-mono w-fit h-fit">
                                    Your Email
                                </div>
                            </label>
                            <input required type="text" placeholder="example@example.com" className=" text-white input input-bordered bg-gray-800" name="email" />
                        </div>
                        <div className="form-control font-sans my-4 mb-8 p-2 rounded-lg bg-gray-900 bg-opacity-80">
                            <label className="pl-3 label indicator ">
                                <div className="indicator text-gray-100 font-mono w-fit h-fit">
                                    Your Password
                                </div>
                            </label>
                            <input type="password" placeholder="Password" className="input text-white input-bordered bg-gray-800" name="password"/>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button className="flex-none btn rounded-full mr-2 w-40 bg-gray-700">
                                <FcGoogle className="w-20 h-8"/>
                            </button>
                            <button className="flex-none btn btn-circle hover:bg-fuchsia-800 ml-2 w-40 bg-fuchsia-600 ">
                                Log In
                            </button>
                        </div>
                        <div className="w-full mt-4 text-gray-500">
                            don't have an account? { }
                            <Link to={`/signup`} className="text-blue-500 underline">
                                Sign Up
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}