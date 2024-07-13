import React, { useState } from "react";
import google from "../images/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";

export default function Signup() {
  const provider = new GoogleAuthProvider();
  // const navigate = useNavigate();

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const googleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      // saving in db
      console.log(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  const emailSignUp = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#09171c] w-screen h-screen">
      <div className="absolute space-y-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-[1px] border-slate-800 p-8 rounded-xl">
        <h1 className="text-xl font-semibold text-center text-slate-300 md:text-2xl">
          Signup
        </h1>
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-semibold text-slate-300">Email</h1>
            <input
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e) => {
                setdata({ ...data, email: e.target.value });
              }}
              className="bg-[#1a292e] p-3  rounded-lg text-white outline-none w-[75vw] lg:w-[30vw]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold text-slate-300">Password</h1>
            <input
              type="password"
              value={data.password}
              onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
              placeholder="Password"
              className="bg-[#1a292e] p-3  rounded-lg text-white outline-none w-[75vw] lg:w-[30vw]"
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
            <button
              onClick={googleSignIn}
              className="bg-[#00e1db] px-10 py-2 rounded-lg w-[75vw] lg:w-[30vw] flex items-center space-x-4 justify-center"
            >
              <img src={google} className="w-8 h-8" alt="" />
              <h1 className="font-semibold">Google</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
