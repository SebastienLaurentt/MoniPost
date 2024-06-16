interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "pb-32 md:pb-36 xl:pb-48" : "";
  const isMarginTop = marginTop ? "pt-20 md:pt-24 xl:pt-28" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} bg-background px-4 text-foreground md:px-10 xl:mx-auto xl:px-16`}
    >
      <div className="mx-auto xl:max-w-[1600px]">{children}</div>
    </section>
  );
};

export default Section;
