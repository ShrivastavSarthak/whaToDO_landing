import { CardStack } from "@/ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, I want to use them in my project. Framer motion
        is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away because yolo.
        Instead, I would like to call it X.com so that it can easily be confused
        with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
        The second rule of Fight club is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#4335A7]">
      <div className="mx-auto py-10 container ">
        <h3 className="text-center text-[#FFF6E9] font-extrabold">
          Testimonials Section
        </h3>
        <h5 className="text-center text-[#FF7F3E] font-bold mb-5">
          Loved by Families Everywhere
        </h5>
        <div className="flex items-center justify-center mt-[10%]">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}
