import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const fileInputRef = useRef(null);
  const [isFile, setisFile] = useState(null);

  const handleUploadFile = async (event) => {
    try {
      const file = event.target.files[0];
      if (file && file.type === "application/pdf") {
        console.log("File uploaded:", file);
        setisFile(file);
      } else {
        console.log("Please upload a PDF file.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-black w-screen h-screen p-5">
      <div className="bg-[#1e1e1e] p-5 rounded-lg space-y-3 max-w-md flex flex-col justify-center">
        <h1 className="text-slate-300 font-semibold text-2xl">
          Hello {"Rahul"}
        </h1>
        <div className="flex justify-center flex-col space-y-3 items-center">
          <input
            type="file"
            ref={fileInputRef}
            accept="application/pdf"
            className="hidden"
            onChange={handleUploadFile}
          />
          {isFile == null ? (
            <>
              <FaCloudUploadAlt
                size={75}
                color="white"
                className="cursor-pointer"
                onClick={handleIconClick}
              />
              <p className="text-slate-300 font-semibold">
                Upload your PDF file
              </p>
            </>
          ) : (
            <>
              <div className="bg-[#1a1a1a] w-full rounded-lg py-4 flex justify-around items-center shadow-2xl">
                <div className="bg-pink-500 p-4 w-11 h-11 rounded-lg text-center flex justify-center items-center">
                  <FaRegFilePdf
                    size={28}
                    color="white"
                    className="cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-slate-300 text-sm font-semibold">
                    {isFile.name}
                  </h1>
                  <p className="text-slate-300 font-bold text-xs">
                    {(isFile.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </div>
                <RxCross2 size={20} color="white" className="cursor-pointer" />
              </div>
              <button className="bg-[#4bb496] font-semibold px-10 py-2 text-sm rounded-lg hover:brightness-90 ease-in-out duration-300 w-full mt-4">
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
