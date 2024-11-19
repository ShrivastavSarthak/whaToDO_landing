import { cn } from "@/lib/utils";
import { CardStack } from "@/ui/card-stack";
import { ContainerScroll } from "@/ui/container-scroll-animation";
import ServiceSection from "../serviceSection";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

export default function Service() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-gray-400 dark:text-white">
                  What are <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Services
                  </span>
                </h1>
              </>
            }
          >
            <ServiceSection />
          </ContainerScroll>
        </div>
      </div>
      <div className="block sm:block xs:block md:hidden lg:hidden xl:hidden">
        <div className="h-[40rem] flex items-start justify-center w-full mt-10 px-3">
          <CardStack items={CARDS} />
        </div>
      </div>
    </>
  );
}
