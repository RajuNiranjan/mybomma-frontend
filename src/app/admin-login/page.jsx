"use client";
import Input from "@/ui/input";
import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { LuUserCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginData = [
  {
    id: "1",
    name: "user name",
    type: "text",
    icon: <LuUserCircle />,
    icon2: "",
  },
  {
    id: "2",
    name: "password",
    type: "password",
    icon: <FiLock />,
    icon2: <BiShowAlt className="text-slate-400 hover:text-slate-600" />,
  },
];

const AdminLogin = () => {
  const router = useRouter();

  const navigateAdminDashBoard = () => {
    router.push("/admin-dashboard");
  };

  const [adminFormInput, setAdminFormInput] = useState({});
  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    setAdminFormInput({
      ...adminFormInput,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const UserName = "myBOMMA@gmail.com";
    const Password = "myBOMMA@2024";
    if (adminFormInput["1"] === UserName && adminFormInput["2"] === Password) {
      console.log("successfully log in into admin Dashboard");
      toast.success("Login successful!");
      navigateAdminDashBoard();
    } else {
      toast.error("Incorrect username or password.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setLoginError("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col gap-4 w-[500px] justify-center bg-white p-5 rounded-md border shadow-md">
        <h1 className="text-center font-semibold text-2xl text-blue-400 tracking-[1px]">
          Admin Login{" "}
        </h1>
        {loginData?.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <span className="text-xl text-slate-500">{e.icon}</span>
            <Input
              onChange={handleChange}
              id={e.id}
              type={e.type}
              placeholder={e.name}
              icon={e.icon2}
            />
          </div>
        ))}
        {loginError && (
          <p className="text-red-500 text-[10px] text-center">{loginError}</p>
        )}
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white rounded-md py-1 font-semibold tracking-wide">
          Login
        </button>
        <ToastContainer position="top-right" autoClose={6000} hideProgressBar />
      </div>
    </div>
  );
};

export default AdminLogin;
