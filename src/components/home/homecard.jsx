"use client";
import Button from "@/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeCard = () => {
  const router = useRouter();

  const handleEnter = (e) => {
    e.preventDefault(e);
    router.push("/user-signin");
  };

  return (
    <div className="h-screen bg-blue-50 text-black flex select-none justify-center items-center">
      <div className="text-center w-[750px] p-5 sm:p-10 rounded-md  flex flex-col gap-5 shadow-xl border bg-white">
        <div>
          <h1 className="font-bold text-4xl text-blue-700">myBOMMA</h1>
        </div>
        <div>
          <p className="font-semibold text-sm text-slate-600">
            100% Telugu Entertainment
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            to="/movieshome"
            // onClick={handleEnter}
            bgColor="#1D4ED8"
            color="white"
            width="150px"
            input="enter"
          />
        </div>
        <div>
          <p className=" text-[8px] sm:text-[12px] text-slate-600 font-light capitalize">
            watch myBOMMA telugu movies online in HD quality. <br />
            exclusively designed for smartphones, tablets, PC&apos;s
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
