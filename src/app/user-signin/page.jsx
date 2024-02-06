"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsIncognito } from "react-icons/bs";

const signInFormData = [
  {
    id: 1,
    type: "email",
    placeholder: "mybomma@gmail.com",
    name: "email",
  },
  {
    id: 2,
    type: "password",
    placeholder: "password",
    name: "password",
  },
];

const UserSignIn = () => {
  const router = useRouter();
  const [signIn, setSignIn] = useState({});

  const handleChange = (e) => {
    setSignIn({
      ...signUp,
      [e.target.id]: e.target.value,
    });
  };

  console.log(signIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/movieshome");
  };
  return (
    <div className=" flex justify-center items-center">
      <form
        action=""
        className="bg-white w-[450px] rounded-md border shadow-md p-10 flex flex-col  gap-3 justify-center items-center relative">
        <h1 className="text-2xl">Sign in</h1>
        {signInFormData?.map((item, index) => (
          <input
            onChange={handleChange}
            key={index}
            required
            id={item.id}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className="w-full rounded-md px-2 py-1 border border-slate-400 hover:border-blue-400 placeholder:text-[12px] text-[14px] focus:outline-none "
          />
        ))}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-full rounded-md text-white font-light text-sm py-1 hover:opacity-85">
          sign in
        </button>
        <p className="text-[12px]">
          dont&apos;t have an account?{" "}
          <Link href={"/user-signup"}>
            <span className="text-blue-400">sign up</span>
          </Link>
        </p>
      </form>
      <p className="absolute mt-[-250px] text-3xl bg-slate-300 rounded-full p-2 text-white">
        <BsIncognito />
      </p>
    </div>
  );
};

export default UserSignIn;
