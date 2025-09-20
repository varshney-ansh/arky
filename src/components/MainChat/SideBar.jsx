"use client";
import { useState } from "react";

const SideBar = ({isOpen, onClose}) => {
  
  return (
   <section className="flex">
<div className={`h-[100vh]  flex flex-col min-w-0 overflow-hidden justify-between transition-[flex-basis,opacity] duration-700 ease-in-out
   
   ${isOpen ? "basis-90 opacity-100" : "basis-0 opacity-0 pointer-events-none"}
   fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg sm:relative sm:w-auto sm:shadow-none`}>


      
      {/* Top Section */}
      <div className="flex flex-col justify-between">
      
        <div className="flex items-center justify-between p-4">
        <h1 className="p-4 text-4xl font-rebound ">Arky</h1>
       {/* close button  */}
      
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <span className="material-symbols-outlined">close_small</span>
            </button>
            </div>


        
        <div className="px-4 space-y-3">
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100">
            <span className="inline-flex items-center gap-2"> <span className="material-symbols-outlined">add</span>New Chat </span>
          </a>
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
            <span className="inline-flex items-center gap-1"> <span className="material-symbols-outlined text-lg"> folder</span> Architectures</span>
          </a>
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
            <span className="inline-flex items-center gap-2"> <span className="material-symbols-outlined text-lg">draw</span>Design</span>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 space-y-3  flex flex-col  mb-10   ">
        <button className="w-50 flex items-center justify-between rounded-4xl border px-3 py-2 hover:bg-gray-300 ">
          <span className="flex items-center space-x-2">
          <span className="material-symbols-outlined">settings</span>
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
