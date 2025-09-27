"use client";
import { useState } from "react";
import BrandLogo from "../brandLogo/brandLogo";
const SideBar = ({ isOpen, onClose }) => {

  return (
    <section className="flex h-screen border-r border-[#eceff0]">
      <div className={`h-[100vh]  flex flex-col min-w-0  transition-[flex-basis,opacity] duration-700 ease-in-out 
   ${isOpen ? "basis-90 opacity-100" : "basis-0 opacity-0 pointer-events-none"}
   fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg sm:relative sm:w-auto sm:shadow-none`}>
        {/* Top Section */}
        <div className="  flex flex-col h-full">
          <div className="flex items-center justify-between py-3 px-4 bg-white  ">
            <BrandLogo size={32} textSize={0} />
            {/* close button  */}
            <button onClick={onClose} className="p-1.5 sm:hidden rounded-lg border border-[#eceff0] flex items-center justify-center hover:bg-[#f3f4f6] cursor-pointer" >
              <span className="material-symbols-outlined">close_small</span>
            </button>
          </div>

          {/* middle part */}
          <div className=" flex-1 pt-2 pb-2 px-4 space-y-3 ">
            <a href="##" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-[#f3f4f6]">
              <span className="inline-flex items-center gap-2"> <span className="material-symbols-outlined">add</span>New Chat </span>
            </a>
            <a href="##" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-[#f3f4f6]" >
              <span className="inline-flex items-center gap-1"> <span className="material-symbols-outlined text-lg"> folder</span> Architectures</span>
            </a>
            <a href="##" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-[#f3f4f6]" >
              <span className="inline-flex items-center gap-2"> <span className="material-symbols-outlined text-lg">draw</span>Design</span>
            </a>
            {/* Placeholder for stored chats */}
            <div className="mt-4 max-h-[40vh] overflow-y-auto flex-col cursor-pointer [&::-webkit-scrollbar]:w-2
                 [&::-webkit-scrollbar-track]:bg-[#f3f4f6]
                 [&::-webkit-scrollbar-thumb]:bg-gray-300
                 [&::-webkit-scrollbar-thumb]:rounded-full">
              <div
                className="px-3 py-2 rounded-lg  mb-2 hover:bg-[#f3f4f6] text-[#020203]"
              >
                Chat 1
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-4  space-y-3  flex flex-col  mb-2 bg-white  ">
          <button className="w-50 flex items-center justify-between rounded-lg border border-[#eceff0] px-3 py-2 cursor-pointer hover:bg-[#f3f4f6]">
            <span className="flex items-center space-x-2">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </span>
          </button>
          <button className="w-50 flex items-center justify-between rounded-lg border border-[#eceff0] px-3 py-2 cursor-pointer hover:bg-[#f3f4f6]">

            <span className="flex items-center ">
              <span className="h-[18px] w-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center text-sm">N </span>
              <span className="ml-2">Profile</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
