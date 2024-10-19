import { BackgroundBeams } from "@/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
        <div className="flex">
          <h1 className="relative z-10 text-lg md:text-4xl h-16  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Welcome to the whaTodo Landing Page
          </h1>
          <h1 className="text-lg md:text-4xl h-10">🚀</h1>
        </div>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We will create the best open source project ever!!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
