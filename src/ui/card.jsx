"use client";
import React from "react";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context/context";

const Card = () => {
  const { singlePost, setSingleMovieData, movies } = useContext(GlobalContext);

  const router = useRouter();

  const handelNavgateSinglePage = (item) => {
    router.push(`/te-a1cwn/${item?.id}`);
    setSingleMovieData(item);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 px-5 w-full">
      {movies?.data.map((item) => (
        <div key={item?.id}>
          <div onClick={() => handelNavgateSinglePage(item)}>
            <Image
              className="rounded-lg cursor-pointer"
              src={item?.image}
              width={500}
              height={500}
              alt="Picture of the movie"
            />
          </div>
          <div className="mt-1 flex flex-col">
            <p
              onClick={() => handelNavgateSinglePage(item)}
              className="font-bold text-[10px] sm:text-sm capitalize hover:opacity-85 cursor-pointer truncate">
              {item?.title}
            </p>
            <p className="bg-blue-500 w-max px-1 h-3 text-white rounded-sm text-[8px]">
              {item?.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
