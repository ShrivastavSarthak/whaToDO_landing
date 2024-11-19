"use client"
import { TiTick } from "react-icons/ti";

const cardData = [
  {
    id: 1,
    name: "Basic",
    service: ["service 1", "service 2", "service 3", "service 4"],
    buttonText: "Free",
  },
  {
    id: 2,
    name: "Advance",
    service: ["service 1", "service 2", "service 3", "service 4"],
    buttonText: "$2 / month",
  },
  {
    id: 3,
    name: "Pro",
    service: ["service 1", "service 2", "service 3", "service 4"],
    buttonText: "$5 / month",
  },
];

export default function ServiceSection() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <div className="h-full bg-slate-950 p-4 flex gap-5  justify-center items-center">
        {cardData.map((item, _) => (
          <div
            key={item.id}
            className="py-4 px-2 h-full w-[20rem] rounded-xl border-2 bg-black border-gray-600 flex flex-col justify-between items-center"
          >
            <h1 className="text-[2.5rem] font-semibold text-gray-400 dark:text-white ">
              {item.name}
            </h1>
            <div className=" flex flex-col  w-full h-full  ">
              {item.service.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center  gap-8 mt-4"
                >
                  <TiTick />
                  <p className="text-[1rem] font-semibold text-gray-400 dark:text-white">
                    {service}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={handleClick}
              className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
