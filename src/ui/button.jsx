"use client";
import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <Link href={props.to} target={props.target}>
      <div className="hover:opacity-85">
        <button
          onClick={props.onClick}
          className="shadow-sm w-max h-8 rounded-md px-2 sm:px-3 font-semibold flex justify-center items-center"
          style={{
            background: props.bgColor,
            color: props.color,
            // width: props.width,
          }}>
          <span className="uppercase tracking-[2px] text-[10px] sm:text-sm ">
            {props.input}
          </span>
        </button>
      </div>
    </Link>
  );
};

export default Button;
