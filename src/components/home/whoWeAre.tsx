import parentImage1 from "@/public/whoWeAre/ParentImage1.svg";
import parentImage2 from "@/public/whoWeAre/ParentImage2.svg";
import parentImage3 from "@/public/whoWeAre/ParentImage3.svg";
import parentImage4 from "@/public/whoWeAre/ParentImage4.svg";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import Image from "next/image";

export interface Content {
  title: string;
  image: string;
  description: string;
  content: React.ReactNode;
}

const content = [
  {
    title: "Parental Monitoring",
    image: parentImage1,
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={parentImage1}
          width={500}
          height={500}
          // className="h-full w-full object-cover"
          alt="image1"
        />
      </div>
    ),
  },
  {
    title: "Task Creation Made Easy",
    image: parentImage2,
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={parentImage2}
          width={400}
          height={40}
          // className="h-full w-full object-cover"
          alt="image1"
        />
      </div>
    ),
  },
  {
    title: "Progress Tracking",
    image: parentImage3,
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={parentImage3}
          width={450}
          height={450}
          // className="h-full w-full object-cover"
          alt="image1"
        />
      </div>
    ),
  },
  {
    title: "Overwrite on Demand",
    image: parentImage4,
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={parentImage4}
          width={450}
          height={450}
          // className="h-full w-full object-cover"
          alt="image1"
        />
      </div>
    ),
  },
];

export default function WhoWeAre() {
  return (
    <>
      <div className="block md:hidden sm:block xs:block bg-[#4335A7] p-1 text-[#FFF6E9]">
        <div className="relative  w-full  ">
          <h1 className="font-bold text-center sticky top-0 bg-[#4335A7]">
            Who are we?
          </h1>
          {content.map((item: Content, index: number) => (
            <div className="bg-[#FF7F3E] p-2  w-full rounded-lg mb-3 flex flex-col items-center justify-center">
              <Image src={item.image} height={200} width={200} alt="image" />
              <div>
                <h3 className="font-semibold text-[#4335A7]">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block sm:hidden xs:block">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
