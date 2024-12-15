import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import image1 from "@/public/Icon1.svg";
import Image from "next/image";
import parentImage1 from "@/public/whoWeAre/ParentImage1.svg"
import parentImage2 from "@/public/whoWeAre/ParentImage2.svg"
import parentImage3 from "@/public/whoWeAre/ParentImage3.svg"
import parentImage4 from "@/public/whoWeAre/ParentImage4.svg"

const content = [
  {
    title: "Collaborative Editing",
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
    title: "Real time changes",
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
    title: "Version control",
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
    title: "Running out of content",
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
  return <StickyScroll content={content} />;
}
