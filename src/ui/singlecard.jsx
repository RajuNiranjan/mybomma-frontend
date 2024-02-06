"use client";
import React from "react";
import Button from "./button";
import { useContext } from "react";
import { GlobalContext } from "@/context/context";
import Image from "next/image";

const Singlecard = () => {
  const { singleMovieData } = useContext(GlobalContext);
  return (
    <div className="p-14">
      <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-10 w-full h-max">
        <div>
          <Image
            className="rounded-md"
            src={singleMovieData?.image}
            alt="movie poster"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col justify-evenly ">
          <h1 className="font-bold text-sm capitalize sm:text-xl md:text-xl lg:text-2xl xl:text-5xl">
            {singleMovieData?.title}
          </h1>
          <div className="my-3">
            <div className="my-2 text-[10px] sm:text-sm md:text-sm lg:text-sm  font-semibold">
              <p>{singleMovieData?.year}</p>
              <p>{singleMovieData?.zoner}</p>
            </div>
            <div className="my-2 text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-lg">
              <div className="flex gap-1">
                <p className="font-bold capitalize">Cast:</p>
                <p className="font-semibold capitalize">
                  {singleMovieData?.cast}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="font-bold capitalize">Direcror:</p>
                <p className="font-semibold capitalize">
                  {singleMovieData?.director}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <Button
                target="_blank"
                input="tralier"
                bgColor="#ccc"
                to={singleMovieData?.trailer}
              />
            </div>
            <div>
              <Button input="Watch now" bgColor="#1D4ED8" color="#fff" to="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-10 text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-lg">
        <div className="capitalize">
          <p className="">
            <span className="font-bold text-blue-700">Synopsis:</span>
            <span>{singleMovieData?.synopsis}</span>
          </p>
        </div>
        <div className="capitalize">
          <p>{singleMovieData?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
