"use client";
import React, { useState } from "react";

const uplodeInputData = [
  {
    labelName: "image",
    name: "image",
    type: "text",
    placeholder: "enter movie image...",
  },
  {
    labelName: "title",
    name: "title",
    type: "text",
    placeholder: "enter movie labelName...",
  },
  {
    labelName: "year",
    name: "year",
    type: "text",
    placeholder: "enter movie year...",
  },
  {
    labelName: "zoner",
    name: "zoner",
    type: "text",
    placeholder: "enter movie zoner...",
  },
  {
    labelName: "cast",
    name: "cast",
    type: "text",
    placeholder: "enter movie cast...",
  },
  {
    labelName: "director",
    name: "director",
    type: "text",
    placeholder: "enter movie director...",
  },
  {
    labelName: "trailer",
    name: "trailer",
    type: "text",
    placeholder: "enter movie trailer...",
  },
  {
    labelName: "synopsis",
    name: "synopsis",
    placeholder: "enter movie synopsis...",
  },
  {
    labelName: "description",
    name: "description",
    placeholder: "enter movie description...",
  },
];

const UplodeForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    year: "",
    zoner: "",
    cast: "",
    director: "",
    trailer: "",
    synopsis: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log("fom Data -->", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      const res = await fetch("http://localhost:8000/api/admin-dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("data from DB", data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="sm:sticky top-0">
      <form className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
        <h1 className="text-center uppercase text-slate-700">
          upload movie data
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          {uplodeInputData?.map((e) => {
            return (
              <div key={e.placeholder}>
                <span className="font-light text-slate-500 text-[10px] capitalize">
                  {e.labelName}
                </span>

                <div className="flex items-center justify-center w-full border p-1  rounded-md border-slate-300 hover:border-blue-300">
                  <input
                    onChange={handleChange}
                    id={e.name}
                    name={e.name}
                    placeholder={e.placeholder}
                    className=" w-full bg-transparent focus:outline-none placeholder-slate-500 text-slate-800 placeholder:text-slate-500 placeholder:text-[12px] placeholder:font-light"
                  />
                  <span className="cursor-pointer">{e.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 hover:opacity-85 py-2 rounded-md font-bold text-white tracking-[1px] text-lg my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default UplodeForm;
