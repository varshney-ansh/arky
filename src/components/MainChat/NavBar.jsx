"use client";
import { useState } from "react";
import BrandLogo from "../brandLogo/brandLogo";
const NavBar = ({ isOpen, setIsOpen }) => {

  const [show, setShow] = useState(false);
  const [display, setAbout] = useState(false);
  return (
    <nav className="bg-[#fff] py-3 px-4 border-[#eceff0] border h-16 flex justify-between items-center">
      {/* Left menu */}
      <div className="flex items-center space-x-4">
        <button className="rounded-lg p-1.5 flex items-center justify-center hover:bg-[#f3f4f6] border border-[#eceff0] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">menu_open</span>
        </button>
        <div className={`font-bold font-rebound flex tracking-tighter select-none`} style={{ fontSize: `24px` }}>Arky</div>

      </div>

      {/* Right menu */}
      <div className="flex items-center gap-2">
        {/* Feedback */}
        <div className="relative bg-[#fff] border border-[#eceff0] hover:bg-[#f3f4f6] text-[#020203] py-1.5 px-1.5 rounded-lg flex items-center cursor-pointer"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <span className="material-symbols-outlined">feedback</span>
          {show && (
            <div className="absolute left-0 bottom-[-40px] bg-white text-[#020203]  rounded-lg border border-[#eceff0] px-2 py-1 flex justify-center items-center z-10 ">
              <div >Feedback</div>

            </div>
          )}
        </div>
        {/* About */}
        <div className="bg-[#fff] border border-[#eceff0] hover:bg-[#f3f4f6] text-[#020203] p-1.5 rounded-lg flex items-center cursor-pointer relative"
          onMouseEnter={() => setAbout(true)}
          onMouseLeave={() => setAbout(false)}>
          <span className="material-symbols-outlined">info</span>
          {display && (
            <div className="absolute right-0 bottom-[-40px] bg-white text-[#020203]  rounded-lg border border-[#eceff0] px-2 py-1 flex justify-center items-center z-10 ">

              <div > About</div>

            </div>
          )}
        </div>
      </div>
    </nav>

  );

}

export default NavBar;