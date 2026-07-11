interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center md:text-left">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold/90">{eyebrow}</p>
      <h2 className="font-display text-3xl text-pearl sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-pearl/70 sm:text-lg">{description}</p>
    </div>
  );
}
