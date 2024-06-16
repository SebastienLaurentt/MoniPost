import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const PosturalArgument = () => {
  return (
    <Section marginTop={true} marginBottom={true}>
      <SectionHeader
        title="Postural data offers a"
        titleHighlight="better model"
      />
      <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-16">
        <div className="lg:w-3/4">
          <p className="text-center text-sm md:text-md lg:text-left">
            To address the lack of data, we were able to establish a
            large-scale, high-quality annotated dataset within the
            vehicle&apos;s interior, leveraging 3D modeling. Through deep
            learning in artificial intelligence, we developed software aimed at
            estimating the driver&apos;s posture from an image, more accurately
            and reliably than the state of the art, to better understand the
            driver&apos;s condition.
          </p>
        </div>
        <div className="rounded-md">
          <Image
            src="/images/Posture.jpg"
            alt="DMS"
            width={1000}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default PosturalArgument;
