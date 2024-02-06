"use client";
import Card from "@/ui/card";
import Input from "@/ui/input";
import React from "react";
import { CiSearch } from "react-icons/ci";

const MoviesHome = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-col my-5">
          <h1 className="font-semibold sm:font-bold text-lg">
            Where Quality & Clarity Matters
          </h1>
          <div className="flex justify-center items-center flex-col font-light text-[10px] sm:text-sm">
            <p>
              Watch Telugu movies in HD, excludively avaulable on myBOMMA.com
            </p>
            <p>Developed for smartphonem, tablests, PC and TV</p>
          </div>
        </div>
        <div className="my-5">
          <Card />
        </div>
        <div className="my-10 flex justify-center items-center">
          <div className="w-[750px] h-max bg-white rounded-md py-10 px-5 shadow-md border">
            <div className="flex justify-center items-center flex-col mb-5">
              <h1 className="font-semibold sm:font-bold text-[12px] sm:text-lg md:text-lg lg:text-lg xl:text-xl ">
                Looking for more movies? use our search
              </h1>
              <p className="font-light text-[8px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                thousands of movies in our database & still adding
              </p>
            </div>
            <div>
              <Input icon={<CiSearch />} type="text" placeholder="search..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesHome;
