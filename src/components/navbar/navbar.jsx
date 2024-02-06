"use client";
import Input from "@/ui/input";
import React from "react";
import { IoHome } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const inconData = [
  {
    icon: <IoHome />,
    iconName: "home",
    path: "/movieshome",
    color: "blue",
  },
  {
    icon: <BsInfoCircleFill />,
    iconName: "about",
    path: "/about",
    color: "blue",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-4 w-full bg-white text-black  shadow border rounded-md  px-5 py-3 z-10 sticky top-0">
      <Link href="/movieshome">
        <h1 className="text-blue-700 font-bold ">myBOMMA</h1>
      </Link>
      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-4 sm:flex md:flex lg:flex xl:flex  ">
          {inconData.map((icon) => (
            <Link href={icon.path} key={icon.iconName}>
              <li className="flex justify-center items-center gap-1">
                <span style={{ color: icon.color }}>{icon.icon}</span>
                <span className="capitalize">{icon.iconName}</span>
              </li>
            </Link>
          ))}
        </div>
        <div className="">
          <Input icon={<CiSearch />} type="text" placeholder="search..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
