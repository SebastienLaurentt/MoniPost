"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function NotFound() {
  const animation =
    "https://lottie.host/7c4474b3-301c-469b-9965-27d36312c7b2/r14C731qO0.json";
  return (
    <main>
      <Section
        marginBottom={false}
        marginTop={false}
        classname="text-center mt-20 md:mt-24 lg:mt-32 xl:mt-24 mx-auto"
      >
        <div className="mx-auto w-[320px] md:w-[400px] lg:w-[540px] ">
          <h1 className="mb-4 text-4xl leading-[48px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[64px] xl:text-5xl">
            The page does not exist!
          </h1>
          <p className="text-balance text-md md:text-lg lg:text-xl xl:text-md">
            It seems that you have taken the wrong path!
          </p>
        </div>
        <Player
          autoplay
          loop
          src={animation}
          className="size-[300px] md:size-[400px] lg:size-[600px] xl:size-[400px]"
        ></Player>
        <Button asChild variant="primary">
          <Link href="/">Go back </Link>
        </Button>
      </Section>
    </main>
  );
}
