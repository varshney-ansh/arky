"use client";
import { useState } from "react";
const SideBar = ({isOpen}) => {
  
  return (
   <section className="flex">
<div className={`h-[100vh]  flex flex-col min-w-0 overflow-hidden justify-between transition-[flex-basis,opacity] duration-700 ease-in-out
   
   ${isOpen ? "basis-90 opacity-100" : "basis-0 opacity-0 pointer-events-none"}`}>


      
      {/* Top Section */}
      <div className="flex flex-col justify-between">
        <h1 className="p-4 text-4xl ">Arky</h1>
        <div className="px-4 space-y-3">
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100">
            <span className="inline-flex items-center gap-2"> New Chat
              <span className="material-symbols-outlined text-lg">add</span>
            </span>
          </a>
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
            <span className="inline-flex items-center gap-1"> Architectures
              <span className="material-symbols-outlined text-lg">architecture</span>
            </span>
          </a>
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
            <span className="inline-flex items-center gap-2">Design
              <span className="material-symbols-outlined text-lg">draw</span>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 space-y-3  flex flex-col  mb-10   ">
        <button className="w-50 flex items-center justify-between rounded-4xl border px-3 py-2 hover:bg-gray-300 ">
          <span className="flex items-center space-x-2">
          <span className="material-symbols-outlined">
settings
</span>
            <span>Settings</span>
          </span>
        </button>
        <button className="w-50 flex items-center justify-between rounded-4xl border px-3 py-2 hover:bg-gray-300">

          <span className="flex items-center ">
            <span className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-sm">N </span>
            <span className="ml-2">Profile</span>
          </span>
        </button>
      </div>
    </div>
    </section>
  );
};

export default SideBar;
