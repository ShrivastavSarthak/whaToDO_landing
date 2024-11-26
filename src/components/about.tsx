"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function About() {
  return (
    <div className="h-[100vh] flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className=" mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-full "
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
      </MaskContainer>
    </div>
  );
}
