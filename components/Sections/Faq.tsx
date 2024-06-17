import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Faq = () => {
  return (
    <Section marginTop={true} marginBottom={true}>
      <SectionHeader
        title="Frequently Asked"
        titleHighlight=" Questions"
        classname=" mx-auto"
        textPosition="text-center items-center"
      />
      <div className="flex flex-row items-center justify-center lg:gap-x-8 xl:gap-x-16">
        <div className="hidden lg:flex lg:w-1/3 xl:w-1/3">
          <Image
            src="/images/faq.png"
            alt="DMS"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is MoniPost free for academics purposes ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Yes, MoniPost is free for academics purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger> What is the data format ? </AccordionTrigger>
              <AccordionContent>
                The data format is a XXX file.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can i ask more questions ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                You can ask more questions by contacting us at
                monipost@contact.com.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
              <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
