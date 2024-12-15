"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function About() {
  return (
    <div className="h-[50vh] flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className=" mx-auto text-slate-800 text-center  text-4xl font-bold">
            Monitor your child's activities with balance—stay involved, set
            boundaries, and guide them without invading their privacy.
          </p>
        }
        className="h-full "
      >
        Trust grows when <span className="text-red-500">safety</span> and
        
        <span className="text-red-500">respect</span> go hand in hand.
      </MaskContainer>
    </div>
  );
}
