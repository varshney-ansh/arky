import MainChat from "@/components/MainChat/MainChat";
import NavBar from "@/components/MainChat/NavBar";
import SideBar from "@/components/MainChat/SideBar";


import Image from "next/image";

export default function Home() {
  return (

    <section>
     


<div className="flex">


<div className="h-[100vh]">
<SideBar/>

</div>
<div className="h-[100vh] w-[100%]  ">
 <NavBar />
<MainChat />
 
 </div>
</div>




   </section>


  
  );
}
