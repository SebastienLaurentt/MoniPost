import Hero from "@/components/Hero";
import Faq from "@/components/Sections/Faq";
import Supports from "@/components/Sections/Supports";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Supports />
      <Faq />
    </main>
  );
}
