import { CardStack } from "@/ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Jane Doe",
    designation: "Mother of Two",
    content: (
      <p>
        This child care service has been a lifesaver for our family. The staff is incredibly attentive and caring. Highly recommend!
      </p>
    ),
  },
  {
    id: 1,
    name: "John Smith",
    designation: "Father of Three",
    content: (
      <p>
        The child monitoring system gives us peace of mind knowing that our kids are safe and well taken care of. We couldn't be happier with the service.
      </p>
    ),
  },
  {
    id: 2,
    name: "Emily Johnson",
    designation: "Working Mom",
    content: (
      <p>
        Balancing work and parenting is tough, but this service makes it so much easier. The caregivers are professional and trustworthy.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#4335A7] min-h-[25rem] px-2">
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
