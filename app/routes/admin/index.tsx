import { json, LoaderFunction, redirect } from '@remix-run/node';
import { verifyTOTP } from '~/utils/otp.server';
import { commitSession, getSession } from '~/utils/sessions.server';
import { token } from '~/utils/token.server';
export const loader: LoaderFunction = async (request) => {
    var query : string[] = request.request.url.indexOf("?") > -1 ? request.request.url.split("?")[1].split("&") : [];
    try{var code = query.filter((res)=> res.startsWith("code="))[0].split("=")[1];}
    catch(e){return redirect("/admin/login");}
    if (!verifyTOTP(code.toString(), process.env.SECRET as string))
        return redirect("/admin/login");
    return json({}) 

}
export default () => {
    return (
        <div className='w-full text-white items-center justify-center h-screen bg-black'>
            Admin Panel
        </div>
    );
}