import Image from "next/image";
import BrandLogo from "@/components/brandLogo/brandLogo";
import awsIcons from "./lib/awsicons";

export default function Home() {
  const lambda = awsIcons['AWS-Lambda'];

  return (
    <div>
      <BrandLogo textSize={24} size={32} />
    </div>
  );
}
