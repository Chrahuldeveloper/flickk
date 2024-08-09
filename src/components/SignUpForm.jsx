import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignUpForm() {
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const [data, setdata] = useState({
    Name: "",
    email: "",
    Phone: "",
    Pic: "",
  });

  const saveData = async (data) => {
    try {
      console.log(data);
      const url = "http://localhost:9000/login";
      const res = await axios.post(url, data);
      if (res.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      setdata({
        ...data,
        Name: res.user.displayName,
        email: res.user.email,
        Pic: res.user.photoURL,
      });
      console.log(data);
      saveData(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-black w-screen h-screen p-5">
        <div className="bg-[#1e1e1e] p-5 rounded-lg space-y-5 max-w-md ">
          <h1 className="text-slate-300 text font-semibold text-2xl ">
            Sign Up
          </h1>
          <p className="text-slate-300 text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            onClick={handleGoogleSignup}
            className="bg-[#4bb496] font-semibold px-10 py-2 text-sm rounded-lg hover:brightness-90 ease-in-out duration-300 w-full"
          >
            Google
          </button>
        </div>
      </div>
    </>
  );
}
