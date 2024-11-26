import { About } from "@/components/about";
import Change from "@/components/change";
import Head from "@/components/home/head";
import Service from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Head />
      <Service />
      <Change />
      <About />
    </>
  );
}
