"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const signUpFormData = [
  {
    id: 1,
    type: "text",
    placeholder: "user name",
    name: "email",
  },
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

const UserSignUp = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useState({});

  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.id]: e.target.value,
    });
  };

  console.log(signUp);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // router.push("/user-signin");
  //   const res = await fetch("http://localhost:5000/api/signup/user-signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(signUp),
  //   });
  //   const data = await res.json();
  //   console.log("data-----", data);
  // };

  const handleClieck = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      const res = await fetch("http://localhost:5000/api/signup/user-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUp),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("data-----", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // const handleClieck = async (e) => {
  //   e.preventDefault();
  //   console.log("sumitted");
  //   const res = await fetch("http://localhost:5000/api/signup/user-signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(signUp),
  //   });
  //   const data = await res.json();
  //   console.log("data-----", data);
  // };

  console.log("signup when input enter", setSignUp);

  return (
    <div className="flex justify-center items-center">
      <form
        action=""
        className="bg-white w-[450px] rounded-md border shadow-md p-10 flex flex-col  gap-3 justify-center items-center">
        <h1 className="text-2xl">Sign up</h1>
        {signUpFormData?.map((item, index) => (
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
          onClick={handleClieck}
          className="bg-blue-500 w-full rounded-md text-white font-light text-sm py-1 hover:opacity-85">
          sign in
        </button>
        <p className="text-[12px]">
          have an account?{" "}
          <Link href={"/user-signin"}>
            <span className="text-blue-400">sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default UserSignUp;
