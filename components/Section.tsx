interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  dark,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "pb-32 md:pb-36 xl:pb-48" : "";
  const isMarginTop = marginTop ? "pt-20 md:pt-24 xl:pt-28" : "";
  const isDark = dark ? "dark" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} ${isDark} px-4 md:px-10 xl:mx-auto xl:px-16   bg-background text-foreground`}
    >
      <div className="2xl:max-w-[1600px] mx-auto">{children}</div>
    </section>
  );
};

export default Section;
