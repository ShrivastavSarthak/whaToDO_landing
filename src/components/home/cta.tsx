"use client";
import { Cover } from "@/ui/cover";
import { useRouter } from "next/navigation";

export default function CallToAction() {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push("https://task-nest-psi.vercel.app/");
  };

  return (
    <>
      <div className="bg-[#80C4E9]">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center p-5">
            <h2 className="font-bold text-[#4335A7]">
              Ready to Get{" "}
              <Cover>
                {" "}
                <h2 className="text-[#4335A7]">Started ?</h2>
              </Cover>{" "}
              
            </h2>
            <h6 className="text-[#FFF6E9] ">
              Join us today and start your journey to a better future for your
              children.
            </h6>
            <button onClick={handleClick} className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4335A7] to-[#FF7F3E] rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
