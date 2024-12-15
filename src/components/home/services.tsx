import { Meteors } from "@/ui/meteors";

const plans = [
  {
    planName: "free_plan",
    planFor: "Basic Plan",
    price: "0",
    features: [
      "Basic TODO App",
      "No realtime data",
      "Not much Interaction",
      "Limited task per day",
      "Add 1 parent",
    ],
    description:
      "This plan is perfect for children. It offers basic editing and collaboration features, helps them to make there goal achieve.",
  },
  {
    planName: "premium_plan",
    planFor: "Advanced Plan",
    price: "$5",
    features: [
      "Advance TODO App",
      "Realtime data",
      "unlimited tasks",
      "Add 2 parents",
      "Add Reward to cheer up",
    ],
    description:
      "This plan is perfect for children. It offers basic editing and collaboration features, helps them to make there goal achieve.",
  },
];

export default function Service() {
  return (
    <div className=" bg-[#FFF6E9]">
      <div className=" container mx-auto flex flex-col justify-center items-center p-5">
        <h1 className="font-bold text-[#4335A7]">Our Services</h1>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 w-full  mt-10">
          {plans.map((plan, index) => (
            <div key={index} className=" w-full relative ">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                
                
                <Meteors number={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
