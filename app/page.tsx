import Hero from "@/components/Hero";
import Supports from "@/components/Sections/Supports";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <Supports />
    </main>
  );
}
