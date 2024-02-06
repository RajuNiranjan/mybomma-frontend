"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShowNavFootBar = ({ children }) => {
  const pathName = usePathname();
  const [showNavFoot, setShowNavFoot] = useState(false);
  useEffect(() => {
    if (pathName === "/") {
      setShowNavFoot(false);
    } else if (pathName === "/admin-login") {
      setShowNavFoot(false);
    } else if (pathName === "/user-signin") {
      setShowNavFoot(false);
    } else if (pathName === "/user-signup") {
      setShowNavFoot(false);
    } else {
      setShowNavFoot(true);
    }
  }, [pathName]);
  return <div>{showNavFoot && children}</div>;
};

export default ShowNavFootBar;
