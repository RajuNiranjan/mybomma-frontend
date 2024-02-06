"use client";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useContext } from "react";
import { GlobalContext } from "@/context/context";

const UploadCardInfo = () => {
  const { movies } = useContext(GlobalContext);
  return (
    <div className="my-5">
      {movies?.data?.map((item, index) => (
        <div
          className="h-max w-full rounded-md shadow-md border p-2 flex justify-between gap-3 bg-white my-2"
          key={index}>
          <div className="w-full flex gap-2 ">
            <div className="basis-1/6 flex  items-center justify-center">
              <Image
                src={item?.image}
                width={70}
                height={100}
                alt="movie image"
              />
            </div>
            <div className="basis-5/6 flex flex-col justify-between gap-1">
              <div className="">
                <h1 className="font-bold capitalize text-[12px] sm:text-sm">
                  {item?.title}
                </h1>
                <div className="flex items-center my-1">
                  <p className="font-semibold text-[10px]">{item?.year}</p>
                </div>
                <p className="text-[10px]">{item?.synopsis}</p>
              </div>
              <div className="flex gap-2 justify-end items-end ">
                <div className="flex items-center justify-center gap-1 bg-blue-400 rounded-md  px-1 text-white font-semibold hover:bg-blue-700">
                  <GrUpdate className="text-[12px]" />
                  <button className="text-sm font-light">update</button>
                </div>
                <div className="flex items-center justify-center gap-1 bg-red-400 rounded-md  px-1 text-white font-semibold hover:bg-red-700">
                  <RiDeleteBin6Line className="text-[12px]" />
                  <button className="text-sm font-light">remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadCardInfo;
