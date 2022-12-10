import { Form } from '@remix-run/react';
import {json, LoaderFunction} from '@remix-run/node';
import { getCountry } from '~/utils/location.server';
import { getClientIPAddress } from 'remix-utils';

export const loader : LoaderFunction = async (data) => {
    var ip = getClientIPAddress(data.request);
    if (ip == null){
        console.log("noip")
        return json({
            error: "Could not get the IP address"
        });
    }
    var country = await getCountry(ip);
    return json({
        ip: ip,
        country: country
    });
}
export default () => {
    return (
        <div className="bg-black relative min-h-screen w-full">
            {/* <Form action="/search">
                <input type="text" name="search" />
            </Form>
            <hr /> */}
            <h1 className="text-center text-4xl md:text-7xl mastText">Coming soon</h1>
        </div>
    )
}