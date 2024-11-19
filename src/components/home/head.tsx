import { BackgroundBeams } from "@/ui/background-beams";
import { FlipWords } from "@/ui/flip-words";

export default function Head() {
  const words = [
    "Structure your day",
    "Oversee your child's schedule",
    "And enhance their productivity",
  ];

  return (
    <>
      <div className="h-screen w-full  bg-neutral-950  antialiased overflow-hidden">
        <div className="h-full flex justify-center items-center flex-col">
          <div className="text-5xl  h-[20%]  font-normal dark:text-neutral-400 text-center md:text-left">
            <FlipWords words={words} /> <br />
          </div>

          <button className=" mx-auto xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[70%] xs:w-[70%] mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Create your account
          </button>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
