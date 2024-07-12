import React from "react";
import google from "../images/google.png";
export default function Signup() {
  return (
    <div className="bg-[#09171c] w-screen h-screen">
      <div className="absolute space-y-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-[1px] border-slate-800 p-8 rounded-lg">
        <h1 className="text-xl font-semibold text-center text-slate-300 md:text-2xl">
          Signup
        </h1>
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-semibold text-slate-300">Email</h1>
            <input
              type="text"
              placeholder="Email"
              className="bg-[#1a292e] px-3 py-2.5 rounded-lg text-white outline-none w-[75vw] lg:w-[30vw]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold text-slate-300">Password</h1>
            <input
              type="password"
              placeholder="Password"
              className="bg-[#1a292e] px-3 py-2.5 rounded-lg text-white outline-none w-[75vw] lg:w-[30vw]"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00e1db] px-10 py-2 rounded-lg w-[75vw] lg:w-[30vw] font-semibold">
              Signup
            </button>
          </div>
          <div>
            <h1 className="font-semibold text-center text-slate-300">OR</h1>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00e1db] px-10 py-2 rounded-lg w-[75vw] lg:w-[30vw] flex items-center space-x-4 justify-center">
              <img src={google} className="w-8 h-8" alt="" />
              <h1 className="font-semibold">Google</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
