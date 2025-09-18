"use client";
import { useState } from "react";
import SideChat from "@/component/sideBar/sideChat";
import BrandLogo from "@/components/brandLogo/brandLogo";
export default function Mainpage( ) {
   const [isOpen, setIsOpen] = useState(true); //slide
    const [show, setShow] = useState(false); //hover
    const [display, setAbout] = useState(false); //hover
    const [Seting, setSeting] = useState(false); //hover
 
  return (
<<<<<<< HEAD
    <section >
      <nav className="bg-white h-16 flex justify-between items-center relative shadow-md px-4">
        {/* Left menu */}
        <div className="flex items-center space-x-4">
          <button className="rounded-xl border px-2 py-1 flex items-center justify-center hover:bg-gray-200"
           onClick={() => setIsOpen(!isOpen)}>
           <span className="material-symbols-outlined">
menu_open
</span>
          </button>
          <BrandLogo size={32} textSize={24}/>
        </div>

        {/* Right menu */}
        <div className="flex  space-x-3">
          {/* Feedback */}
          <div
            className="relative bg-[#091f2C] text-white py-2 px-3 rounded-2xl h-10 cursor-pointer"
             onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
          >
         <span className="material-symbols-outlined">
feedback
</span>

            
                
      {show && (
        <div className="absolute left-[-9] top-full mt-2 bg-white shadow-md text-black rounded-4xl  p-2 flex justify-center items-center ">
 
<div >  feedback</div>

        </div>
      )}

         
          </div>

          {/* About */}
          <div className="bg-[#091f2C] text-white py-2 px-3 rounded-2xl h-10 cursor-pointer"
               onMouseEnter={() => setAbout(true)}
      onMouseLeave={() => setAbout(false)}>
     <span class="material-symbols-outlined">
info
</span>
                 {display&& (
        <div className="absolute right-17 top-15  text-black bg-white shadow-md  rounded-4xl  p-2 flex justify-center items-center ">
 
<div > About</div>

        </div>
      )}
           
          </div>
             <div
            className="relative bg-[#091f2C] text-white py-2 px-3 rounded-2xl h-10  cursor-pointer"
             onMouseEnter={() => setSeting(true)}
      onMouseLeave={() => setSeting(false)}
          >
      <span class="material-symbols-outlined">
settings
</span>

            
                
      {Seting && (
        <div className="absolute  top-full mt-2 right-[-1]  bg-white shadow-md text-black  rounded-4xl p-2 flex justify-center items-center ">
 
<div >Setting</div>

        </div>
      )}

         
          </div>
        </div>
      </nav>

      {/* White board */}
   <div className="flex gap-4 h-[calc(100vh-32px-52px)] px-4">
        <SideChat isOpen={isOpen} />
<div className="flex-1 bg-[#DAE5F9] h-full mt-2 border-1 shadow-2xl
                  rounded-2xl border-black-200 overflow-auto text-black">
  


   
</div></div>
    </section>
=======
    <div>
      <BrandLogo textSize={24} size={32} />
    </div>
>>>>>>> 860855e0 (+ app logo)
  );
}
