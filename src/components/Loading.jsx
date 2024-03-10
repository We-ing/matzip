import React from "react";
import "./loadingPage.css";

export default function Loading() {
  return (
    <div className="loader-wrapper bg-black  w-[360px] h-[800px] flex justify-center items-center">
      <div className="packman ml-12"></div>
      <div className="dots flex ml-8 mt-7 gap-5">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
