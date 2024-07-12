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
  const isMarginBottom = marginBottom ? "pb-24 md:pb-28 xl:pb-32" : "";
  const isMarginTop = marginTop ? "pt-12 md:pt-16" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} bg-background px-4 text-foreground md:px-10 xl:mx-auto xl:px-16`}
    >
      <div className="mx-auto xl:max-w-screen-xl">{children}</div>
    </section>
  );
};

export default Section;
