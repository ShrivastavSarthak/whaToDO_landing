import { Meteors } from "@/ui/meteors";

const plans = [
  {
    planName: "free_plan",
    planFor: "Basic Plan",
    price: "$0",
    features: [
      "Basic TODO App",
      "No realtime data",
      "Limited interaction",
      "Up to 5 tasks per day",
      "Add 1 parent",
    ],
    description:
      "Perfect for beginners! Get started with our basic plan that offers essential features to help children achieve their goals. Enjoy a simple and easy-to-use TODO app with limited tasks per day.",
  },
  {
    planName: "premium_plan",
    planFor: "Advanced Plan",
    price: "$5",
    features: [
      "Advanced TODO App",
      "Realtime data synchronization",
      "Unlimited tasks",
      "Add up to 2 parents",
      "Motivational rewards",
      "Priority support",
      "Customizable themes",
    ],
    description:
      "Unlock the full potential with our Advanced Plan! Enjoy unlimited tasks, real-time data synchronization, and motivational rewards to keep children engaged. Plus, get priority support and customizable themes for a personalized experience.",
  },
];

export default function Service() {
  return (
    <div className=" bg-[#FFF6E9]">
      <div className=" container mx-auto flex flex-col justify-center items-center p-5">
        <h1 className="font-bold text-[#4335A7]">Our Services</h1>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[10rem] w-full  mt-10">
          {plans.map((plan, index) => (
            <div key={index} className="w-full relative h-full text-[#FFF6E9]">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-2xl bg-gray-900 border border-gray-800 px-6 py-10 h-full overflow-hidden rounded-3xl flex flex-col justify-between items-center transition-transform transform hover:scale-101 hover:shadow-3xl">
                <div className="w-full mx-2 flex flex-col justify-between items-center h-full">
                  <div className="w-full flex flex-col justify-between items-center mb-4">
                    <h1 className="text-4xl font-extrabold text-white mb-2">
                      {plan.planFor}
                    </h1>
                    <h1 className="text-3xl font-bold text-white">
                      {plan.price}
                    </h1>
                  </div>
                  <div className="w-full flex-grow">
                    <ul className="text-white">
                      {plan.features.map((feature, index) => (
                        <h6 key={index} className="flex items-center my-2">
                          <div className="w-4 h-4 bg-white rounded-full mr-2" />
                          {feature}
                        </h6>
                      ))}
                    </ul>
                  </div>
                  <p className="text-white mt-4 text-justify">
                    {plan.description}
                  </p>
                  <button className="text-white mt-6 bg-[#4335A7] hover:bg-[#80C4E9] hover:text-[#FFF6E9] px-4 py-2 rounded-full transition-colors">
                    I will choose this plan
                  </button>
                </div>
                <Meteors number={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
