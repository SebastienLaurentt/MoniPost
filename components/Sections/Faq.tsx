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
        textPosition="text-center"
      />
      <div className="flex flex-row items-center justify-center xl:gap-x-16">
        <div className="hidden xl:flex xl:w-1/3">
          <Image
            src="/images/faq.png"
            alt="DMS"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="xl:w-1/2">
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
            <AccordionItem value="item-1">
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
