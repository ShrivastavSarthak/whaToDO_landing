import Head from "@/components/home/head";
import Service from "@/components/home/services";
import WhoWeAre from "@/components/home/whoWeAre";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <>
      <Head />
      <WhoWeAre/>
      <Work/>
      <Service />
      {/* <About />  */}
    </>
  );
}
