import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Background from "@/components/Sections/Background";
import Faq from "@/components/Sections/Faq";
import Models from "@/components/Sections/Models";
import Price from "@/components/Sections/Price";
import Team from "@/components/Sections/Team";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Background />
        <Models />
        <Price />
        <Team />
        <Faq />
      </main>
      <VideoModal />
      <Footer />
    </>
  );
}
