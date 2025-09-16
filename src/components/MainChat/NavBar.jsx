"use client";
import { useState } from "react";
const NavBar = ({ isOpen, setIsOpen }) => {

    const [show, setShow] = useState(false);
    const [display, setAbout] = useState(false);
    return (
        <nav className="bg-white h-16 flex justify-between items-center shadow-md px-4">
        {/* Left menu */}
        <div className="flex items-center space-x-4">
          <button className="rounded-xl border px-2 py-1 flex items-center justify-center hover:bg-gray-200 "
          onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">menu_open</span>
          </button>

        </div>
      
        {/* Right menu */}
        <div className="flex items-center space-x-4">
          {/* Feedback */}
          <div className="relative bg-[#091f2C] text-white py-2 px-4 rounded-4xl h-10 flex items-center gap-2 cursor-pointer"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          >
            <span className="material-symbols-outlined">feedback</span>
            {show && (
        <div className="absolute left-0 top-full mt-2  bg-white text-black  rounded-4xl border-1 p-2 flex justify-center items-center z-10 ">
 
<div >  feedback</div>

        </div>
      )}
          </div>
          {/* About */}
          <div className="bg-[#091f2C] text-white py-2 px-4 rounded-4xl h-10 flex items-center gap-2 cursor-pointer"
           onMouseEnter={() => setAbout(true)}
           onMouseLeave={() => setAbout(false)}>
            <span className="material-symbols-outlined">info</span>
            {display && (
        <div className=" absolute right-4 top-15 bg-white text-black  rounded-4xl border-1 p-2 flex justify-center items-center z-10 ">
 
<div > About</div>

        </div>
      )}
          </div>
        </div>
      </nav>
      
    );

}

export default NavBar;