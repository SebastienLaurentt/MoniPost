import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const PosturalArgument = () => {
  return (
    <Section marginTop={true} marginBottom={true}>
      <div className="flex flex-row justify-center 2xl:hidden">
        <span className="mb-2 rounded-full border-4 border-primary px-3 text-lg font-extrabold">
          3
        </span>
      </div>
      <SectionHeader
        title="Postural data offers a"
        titleHighlight="better model"
        classname="2xl:hidden mx-auto"
        textPosition="text-center"
      />
      <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-16">
        <div className="lg:w-3/4">
          <div className="hidden flex-row justify-start 2xl:flex ">
            <span className="mb-2 rounded-full border-4 border-primary px-4 text-2xl font-extrabold">
              3
            </span>
          </div>
          <SectionHeader
            title="Postural data offers a"
            titleHighlight="better model"
            classname="hidden 2xl:flex"
            textPosition="text-left"
          />
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
