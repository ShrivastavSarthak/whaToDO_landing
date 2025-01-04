export default function CallToAction() {
  return (
    <>
      <div className="bg-[#80C4E9]">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center p-5">
            <h1 className="font-bold text-[#4335A7]">Ready to Get Started?</h1>
            <p className="text-[#FFF6E9] mt-5">
              Join us today and start your journey to a better future for your
              children.
            </p>
            <button className="text-[#FFF6E9] mt-5 bg-[#4335A7] hover:bg-[#80C4E9] hover:text-[#FFF6E9] px-4 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
