"use client";
import MainChat from "@/components/Chat/Chat";
import NavBar from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section>
            <div className="flex  ">
                <div className="h-[100vh] ">
                    <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
                <div className="h-screen w-[100%] flex flex-col justify-between transition-all duration-500  ">
                    <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
                    <MainChat />
                </div>
            </div>
        </section>
    );
}
