import MainChat from "@/components/MainChat/MainChat";
import Image from "next/image";
import BrandLogo from "@/components/brandLogo/brandLogo";

export default function Home() {
  return (
    <div>
      <BrandLogo textSize={24} size={32} />
      <MainChat />
    </div>
  );
}
