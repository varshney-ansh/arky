"use client";
import MainChat from "@/components/MainChat/MainChat";
import NavBar from "@/components/MainChat/NavBar";
import SideBar from "@/components/MainChat/SideBar";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
 const [isOpen, setIsOpen] = useState(true);

  return (

    <section>
     


<div className="flex  ">


<div className="h-[100vh] ">
<SideBar isOpen={isOpen} />

</div>
<div className="h-screen w-[100%] flex flex-col justify-between transition-all duration-500  ">
 <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
<MainChat />
 
 </div>
</div>




   </section>


  
  );
}
