import Head from "@/components/home/head";
import Service from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WhoWeAre from "@/components/home/whoWeAre";
import Work from "@/components/home/work";
import CallToAction from "@/components/home/cta";
export default function Home() {
  return (
    <>
      <Head />
      <WhoWeAre/>
      <Work/>
      <Testimonials/>
      <Service />
      <CallToAction/>
      {/* <About />  */}
    </>
  );
}
