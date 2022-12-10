import {Form, Link} from "@remix-run/react"
import {FcGoogle} from "react-icons/fc"

export default () => {
    return (
        <div className="bg-black w-full min-h-screen justify-center flex items-center">
            <div className="p-8 card bg-gray-700 bg-opacity-30 flex flex-col justify-center h-auto"> 
                <p className="tracking-widest text-5xl text-white m-2 pt-4 text-center font-questrial">
                    Sign Up
                </p>
                <div className='items-left card-body '>
                    <Form action="/login" method="post">
                        <div className="form-control font-sans p-2 rounded-lg bg-gray-900 bg-opacity-80">
                            <label className="pl-3 label indicator ">
                                <div className="indicator text-gray-100 font-mono w-fit h-fit">
                                    Your Email
                                </div>
                            </label>
                            <input required type="text" placeholder="example@example.com" className="input text-white input-bordered bg-gray-800" name="email" />
                        </div>
                        <div className="form-control font-sans my-4 mb-8 p-2 rounded-lg bg-gray-900 bg-opacity-80">
                            <label className="pl-3 label indicator ">
                                <div className="indicator text-gray-100 font-mono w-fit h-fit">
                                    Create a Password
                                </div>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered text-white bg-gray-800" name="password"/>
                        </div>
                        <div className=" text-white mb-1">
                            I agree to the  <span className="underline text-blue-500">Terms of Service</span> <br/> and <span className="underline text-blue-500">Privacy Policy</span> { }{ }
                            <input
                                type="checkbox"
                                className="bg-white border-blue-900 rounded-full text-blue-500 focus:ring-gray-200"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button className="flex-none btn rounded-full mr-2 w-36 bg-gray-700">
                                <FcGoogle className="w-20 h-8"/>
                            </button>
                            <button className="flex-none hover:bg-fuchsia-800 btn btn-circle ml-2 w-44 bg-fuchsia-600 ">
                                Create / Register
                            </button>
                        </div>
                        <div className="w-full mt-4 text-gray-500">
                            have an account? { }
                            <Link to={`/login`} className="text-blue-500 underline">
                                Log In
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}