"use client";
import { useState } from "react";
import awsIcons from "@/app/lib/awsicons";
import Image from "next/image";


export default function AISideIcon({ iconPath, name, onHover, onLeave }) {
  return (
    <div
      className="h-10 w-10 flex items-center justify-center border 
                 hover:ring-2 hover:ring-blue-400 cursor-pointer"
      onMouseEnter={(e) =>
        onHover({ iconPath, name, x: e.clientX, y: e.clientY })
      }
      onMouseLeave={onLeave}
    >
      <Image alt={name} src={iconPath} height={40} width={40} />
    </div>
  );
}

