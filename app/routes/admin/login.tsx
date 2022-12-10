import {prisma} from '../../utils/prisma.server';
import {LoaderFunction, ActionFunction, redirect, createCookie, json} from '@remix-run/node';
import {Form} from "@remix-run/react"
import { verifyTOTP } from '~/utils/otp.server';
import crypto from 'crypto';
import { useEffect, useRef } from 'react';
export const action : ActionFunction = async ({request, context, params}) => {
    const formData = await request.formData();
    let code : number;
    try {
        code = formData.get('code1') + formData.get('code2') + formData.get('code3') + formData.get('code4')+ formData.get('code5') + formData.get('code6');
    } catch (e) {
        return redirect('/admin/login');
    }
    
    return redirect(`/admin?code=${code}`);
}
export default () => {
    const formRef = useRef<HTMLFormElement>(null);
    useEffect(()=>{
        formRef.current?.reset();
        const inputs = document.querySelectorAll('#otp > *[id]') as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onkeydown = (e : KeyboardEvent) => {
                if (e.key==="Backspace" ) { 
                    inputs[i].value='' ; 
                    if (i !==0) 
                        inputs[i - 1].focus(); 
                } else { 
                    if (i===inputs.length - 1 && inputs[i].value !== '' ) {
                        formRef.current?.submit();
                    } else if (e.keyCode> 47 && e.keyCode < 58) { 
                        (e.target as HTMLInputElement).value=e.key; 
                        if (i !==inputs.length - 1){
                            inputs[i + 1].focus();
                        }
                        e.preventDefault(); 
                    } else if (e.keyCode> 64 && e.keyCode < 91) { 
                        inputs[i].value=String.fromCharCode(e.keyCode); 
                    if (i !==inputs.length - 1) 
                        inputs[i + 1].focus();
                    e.preventDefault(); 
                    } 
                }            
            };
        }
    })
    
    return (
        <div className="bg-black text-white h-screen w-full">
            <h1 className="font-kdam text-4xl">Login</h1>
            <Form method="post" autoComplete="off" ref={formRef} id="otp" className='flex'>
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="first" maxLength={1} name="code1"/> 
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="second" maxLength={1} name="code2" /> 
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="third" maxLength={1} name="code3"/> 
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="fourth" maxLength={1} name="code4"/>
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="fifth" maxLength={1} name="code5"/> 
                    <input className="m-2 border h-10 w-10 text-center form-control rounded bg-gray-900" type="text" inputMode="numeric" id="sixth"  maxLength={1} name="code6"/>
            </Form>
        </div>

    )
}