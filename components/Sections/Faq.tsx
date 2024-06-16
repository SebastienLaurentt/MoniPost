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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is MoniPost free for academics purposes ? </AccordionTrigger>
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
        <AccordionTrigger>How can i ask more questions ?  </AccordionTrigger>
          <AccordionContent>
            You can ask more questions by contacting us at monipost@contact.com.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default Faq;
