import Hero from "@/components/Hero";
import Supports from "@/components/Sections/Supports";

export default function Home() {
  return (
    <main className=" h-full flex flex-col items-center">
      <Hero />
      <Supports />
    </main>
  );
}
