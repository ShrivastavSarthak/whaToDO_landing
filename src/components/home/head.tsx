"use client";
import { BackgroundBeams } from "@/ui/background-beams";
import { FlipWords } from "@/ui/flip-words";
import Image from "next/image";
import headImage from "@/public/headImage.svg";
import { useRouter } from "next/navigation";

export default function Head() {
  const words = ["your day", "Family Task ", "Monitoring"];
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push("https://task-nest-psi.vercel.app/");
  };
  return (
    <>
      <div className=" bg-[#FFF6E9]">
        <div className="grid xl:grid-cols-2  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  h-screen w-full container mx-auto ">
          <div className="flex flex-col items-start justify-center h-full p-1">
            <h4 className=" font-semibold  ">Welcome to </h4>
            <h1 className="font-extrabold  text-[#4335A7]">TaskNest</h1>
            <div className="w-full ">
              <div className=" font-bold h-[20%]   dark:text-[#80C4E9] text-left">
                <h4>
                  Simplifying <FlipWords words={words} /> <br />
                </h4>
              </div>
            </div>
            <p className="text-[#4335A7] font-semibold ">
              Empower your children to take charge of their tasks while you stay
              in control.
            </p>
            <button
              onClick={handleClick}
              className="mt-4 border-2 border-[#4335A7]  px-5 py-1 rounded-md font-bold text-[#4335A7]"
            >
              <h6>Get started</h6>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Image src={headImage} height={650} width={650} alt="headImage" />
          </div>
        </div>
      </div>
    </>
  );
}
