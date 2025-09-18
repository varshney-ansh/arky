"use client";
import { useState } from "react";
import SideChat from "@/component/sideBar/sideChat";
import Image from "next/image";
export default function Mainpage() {
    const [show, setShow] = useState(false);
 

  return (
    <section>
      <nav className="bg-white h-16 flex justify-between items-center relative shadow-md px-4">
        {/* Left menu */}
        <div className="flex items-center space-x-4">
          <button className="rounded-xl border px-2 py-1 flex items-center justify-center hover:bg-gray-200">
            <span className="material-symbols-sharp">menu_open</span>
          </button>
          <div>
            <Image src="/logo-black.svg" width={40} height={40}/>
          </div>
          <div className="text-2xl font-bold font-rebound tracking-tighter ">Arky</div>
        </div>

        {/* Right menu */}
        <div className="flex items-center space-x-4">
          {/* Feedback */}
          <div
            className="relative bg-[#091f2C] text-white py-2 px-4 rounded-4xl h-10 flex items-center gap-2 cursor-pointer"
             onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
          >
            <span className="material-symbols-sharp">feedback</span>

            <span>Feedback</span>
                
      {show && (
        <div className="absolute left-0 top-full mt-2 w-40 bg-white text-black p-3 rounded-4xl border-1 flex">
  <div>   <span class="material-symbols-sharp">thumb_up</span></div>
        <div><span class="material-symbols-sharp">thumb_down</span></div>
        </div>
      )}

         
          </div>

          {/* About */}
          <div className="bg-[#091f2C] text-white py-2 px-4 rounded-4xl h-10 flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-sharp">info</span>
            <span>About</span>
          </div>
        </div>
      </nav>

      {/* White board */}
      <div className="flex gap-4 h-[calc(100vh-32px-52px)] px-4 "><SideChat />
<div className=" bg-[#DAE5F9] w-[calc(100%-32px)] h-[100%] mt-2 border-1 shadow-2xl rounded-2xl border-black-200  overflow-auto ">
  


   
</div></div>
    </section>
  );
}
