interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-gold/90">{eyebrow}</p>
      <h2 className="font-display text-3xl text-pearl sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="text-sm leading-7 text-pearl/70 sm:text-base sm:leading-8">{description}</p>
    </div>
  );
}
