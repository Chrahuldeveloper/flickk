import React from "react";

export default function SignUpForm() {

    const handleGoogleSignup = ()=>{

        try {
            
        } catch (error) {
            console.log(error)
        }


    }



  return (
    <>
      <div className="bg-black w-screen h-screen p-5">
        <div className="bg-[#1e1e1e] p-5 rounded-lg space-y-5 max-w-md flex flex-col justify-center">
          <h1 className="text-slate-300 text font-semibold text-2xl">
            Sign Up
          </h1>
          <p className="text-slate-300 text-sm text-">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-indigo-500 font-semibold px-10 py-2 text-sm rounded-lg hover:brightness-90 ease-in-out duration-300 text-slate-300">
            Google
          </button>
        </div>
      </div>
    </>
  );
}
