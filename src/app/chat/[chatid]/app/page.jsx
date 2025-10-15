"use client";
import { useState } from "react";
import SideChat from "@/components/SideChat/SideChat";
import NavBar from "@/components/Navbar/Navbar";
import WhiteBoard from "@/components/whiteboard/whiteBoard";

export default function ChatAppPage() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section >
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* White board */}
            <div className="flex gap-4 h-[calc(100vh-32px-52px)] px-4">
                <SideChat isOpen={isOpen} />
                <div className="flex-1 h-full mt-2 border-1 shadow-2xl
                  rounded-2xl border-black-200 text-black">
                    <WhiteBoard />
                </div>
            </div>
        </section>
    );
}
