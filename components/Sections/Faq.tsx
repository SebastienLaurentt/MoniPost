import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Faq = () => {
  return (
    <Section marginTop={true} marginBottom={true}>
      <SectionHeader title="Frequently Asked" titleHighlight=" Questions" />
      <Accordion type="single" collapsible className="w-full md:px-8 xl:px-24">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is MoniPost free for academics purposes ? </AccordionTrigger>
          <AccordionContent>
            Yes, MoniPost is free for academics purposes. Please, contact us for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger>Is MoniPost free for academics purposes ? </AccordionTrigger>
          <AccordionContent>
            Yes, MoniPost is free for academics purposes. Please, contact us for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger>Is MoniPost free for academics purposes ? </AccordionTrigger>
          <AccordionContent>
            Yes, MoniPost is free for academics purposes. Please, contact us for more information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default Faq;
