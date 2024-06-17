"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import HumansFactors from '../Graphs/HumanFactors';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import useOnScreen from '@/app/hooks/useOnView';

const Background = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.8 });

  useEffect(() => {
    const element = ref.current;
    if (isVisible) {
      gsap.to(element, { opacity: 1, y: 0, duration: 1 });
    } else {
      gsap.to(element, { opacity: 0, y: 20, duration: 1 });
    }
  }, [isVisible, ref]);

  return (
    <Section marginTop={true}>
      <div className="flex flex-row justify-center xl:hidden">
        <span className="mb-2 rounded-full border-4 border-primary px-3 text-lg font-extrabold">
          1
        </span>
      </div>

      <SectionHeader
        title="Human factors are primarily responsible for"
        titleHighlight="road accidents"
        classname="xl:hidden mx-auto"
        textPosition="text-center items-center"
      />
      <div
        ref={ref}
        className="flex flex-col gap-y-6 md:flex-row md:items-center lg:gap-x-16"
        style={{ opacity: 0, transform: 'translateY(20px)' }}
      >
        <div className="md:w-1/2 lg:w-[600px]">
          <div className="hidden flex-row justify-start xl:flex">
            <span className="mb-2 rounded-full border-4 border-primary px-4 text-2xl font-extrabold">
              1
            </span>
          </div>
          <SectionHeader
            title="Human factors are primarily responsible for"
            titleHighlight="road accidents"
            classname="hidden xl:flex"
            textPosition="text-left xl:items-start"
          />
          <p className="text-center text-sm md:text-left md:text-md">
            Addressing human factors in road accidents is crucial for enhancing
            safety. Understanding and mitigating human errors can significantly
            reduce accident rates, saving lives and preventing injuries on the
            road.
          </p>
        </div>
        <div className="w-[350px] xl:mx-auto 2xl:w-[609px]">
          <HumansFactors />
        </div>
      </div>
    </Section>
  );
};

export default Background;
