
import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className="text-cyan-600">Home Page</h1>
    {/* <Button className="text-red-600 font-barlow" variant="secondary">Click here</Button> */}
    </div>
    
  );
}
