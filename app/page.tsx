import Hero from "@/components/Hero";
import Faq from "@/components/Sections/Faq";
import Price from "@/components/Sections/Price";
import Supports from "@/components/Sections/Supports";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <Supports /> */}
      <Price />
      <Faq />
    </main>
  );
}
