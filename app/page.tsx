import Hero from "@/components/Hero";
import Background from "@/components/Sections/Background";
import Models from "@/components/Sections/Models";
import Faq from "@/components/Sections/Faq";
import PosturalArgument from "@/components/Sections/PosturalArgument";
import Price from "@/components/Sections/Price";

export default function Home() {
  return (
    <main>
      <Hero />
      <Background />
      <Models />
      {/* <PosturalArgument /> */}
      <Price />
      <Faq />
    </main>
  );
}
