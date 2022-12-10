import React from "react";
import { Form, useActionData } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
export const action: ActionFunction = async (req) => {
    var val = Array.from((await req.request.formData()).entries());
    console.log(val);
    try {
      var i = parseInt(val[1][1] as string);
    if (val.length != 3 || val[0][1] == "" || val[1][1] == "" || i > 100 || i < 0 || i % 20 > 0)
      return json({'message' : 'Fill in the form correctly!'})
    } catch {
      return json({'message' : 'Fill in the form correctly!'});
    }
  await fetch(
    "https://discord.com/api/webhooks/1048051132125163530/tIKdRse9GEj5tLNXszKXMtCbUxRkMwN-d1O1cDN6_jAVOtJh0wGmvBa6KbzPJ2vqEIZ3",
    {
      method: "post",
      body: JSON.stringify({
        content: "**"+val[0][1]+"** requested an account. The channel/social media ink is "+val[1][1],
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  );
  return redirect("/");
};
export default function Apply() {
  return (
    <div className=" min-h-screen z-10 relative w-screen w-full text-white">
      <LeftPart />
      <RightPart />
    </div>
  );
}

const LeftPart: React.FC = () => {
  return (
    <div className="bg-black px-4 py-20 px-20 md:py-24 items-center justify-center motion-safe:animate-softPulse min-h-fit md:min-h-screen w-full md:w-1/2 md:absolute md:left-0">
      <div className="mx-auto w-fit">
        <p
          className="text-white text-3xl md:text-6xl text-center md:text-left
              tracking-tight font-russo"
        >
          Are you a Procrastinator?
        </p>
        <p className="text-white opacity-50 text-xl mt-4 md:mt-8 text-center md:text-left inline-block tracking-tight font-light ">
          We're interested in working with you,{" "}
          <span className="font-bold">for free</span>.
        </p>
      </div>
    </div>
  );
};

const RightPart: React.FC = () => {
  const data = useActionData();
  return (
    <div className="px-14 py-20 -z-10 bg-white md:py-24 items-center justify-center motion-safe:animate-softPulse min-h-fit md:min-h-screen w-full md:w-1/2 md:absolute md:right-0">
      <Form action="/apply" method="post">
        <p
          className="text-black text-6xl text-center
            tracking-tight  font-russo"
        >
          Join the Waitlist
        </p>
        <p className="text-black text-xl text-center mt-4 tracking-tight">
          Motives will launch soon, and we may be interested to partner with you!
        </p>
        <div className="form-control font-sans mt-2 mt-10 p-2 rounded-lg text-black">
          <label className=" label indicator ">
            <div className="indicator font-semibold font-mono w-fit h-fit">
              Your Email:
            </div>
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            className="input text-black z-10 input-bordered bg-white"
            name="email"
            required
          />
        </div>
        <div className="form-control font-sans p-2 rounded-lg text-black">
          <label className=" label indicator ">
            <div className="indicator font-semibold font-mono w-fit h-fit">
              Social Media link
            </div>
          </label>
          <input
            type="text"
            placeholder="https://coolsite.com/CoolChannel"
            className="input text-black input-bordered z-10 bg-white"
            name="handle"
            required
          />
        </div>
        <button
          className="btn btn-block mt-8 hover:bg-fuchsia-800 bg-fuchsia-600 "
          type="submit"
        >
          Submit Application
        </button>
        <div className={`w-full fixed ${data?.message ? '' : 'hidden'}`}>
          {data?.message}
        </div>
      </Form>
    </div>
  );
};
