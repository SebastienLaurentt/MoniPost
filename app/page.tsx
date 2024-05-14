import Hero from "@/components/Hero";
import Background from "@/components/Sections/Background";
import Dms from "@/components/Sections/Dms";
import Faq from "@/components/Sections/Faq";
import PosturalArgument from "@/components/Sections/PosturalArgument";
import Price from "@/components/Sections/Price";
import Supports from "@/components/Sections/Supports";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <Supports /> */}
      <Background />
      <Dms />
      <PosturalArgument />
      <Price />
      <Faq />
    </main>
  );
}
