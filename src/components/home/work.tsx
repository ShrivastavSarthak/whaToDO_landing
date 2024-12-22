import signup from "@/public/simpleSteps/signUp.svg";
import monitor from "@/public/simpleSteps/monitor.svg";
import todo from "@/public/simpleSteps/todo.svg";
import { WobbleCard } from "@/ui/wobble-card";
import Image from "next/image";



const cardData =[
  {
    key: 1,
    step:"Step 1",
    title:  "Sign Up",
    description: "Create a TaskNest account for your family.",
    image: signup
  },
  {
    key: 2,
    step:"Step 2",
    title: "Create Tasks",
    description: "Kids add tasks and parents oversee them.",
    image: todo
  },
  {
    key: 3,
    step:"Step 3",
    title: "Monitor & Adjust",
    description: "Track progress and tweak tasks seamlessly",
    image: monitor
  }
]


export default function Work() {
  return (
    <div className="bg-[#FF7F3E]">
      <div className="container mx-auto py-10">
        <h3 className="text-center text-[#FFF6E9] font-extrabold">
          How It Works Section?
        </h3>
        <h5 className="text-center text-[#4335A7] font-bold mb-5">
          Get Started in 3 Easy Steps
        </h5>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-24">
          {cardData.map((card, index) => (
              <WobbleCard>
                <div
                  key={index}
                >
                  <Image src={card.image} alt="signup" width={500} height={500} />
                  <div className="flex flex-col justify-start items-start">
                    <h5 className="text-center text-[#FFF6E9] font-bold">
                      {card.step}
                    </h5>
                    <p className="text-center text-[#80C4E9] font-bold">
                      {card.title}
                    </p>
                    <p className=" text-[#FFF6E9] text-left">
                      {card.description}
                    </p>
                  </div>
                </div>
              </WobbleCard>
            ))}
        </div>
      </div>
    </div>
  );
}
