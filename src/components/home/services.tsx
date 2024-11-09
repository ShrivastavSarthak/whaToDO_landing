import { ContainerScroll } from "@/ui/container-scroll-animation";

export default function Service() {
  return (
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
        <h1>Hello world</h1>
      </ContainerScroll>
    </div>
  );
}
