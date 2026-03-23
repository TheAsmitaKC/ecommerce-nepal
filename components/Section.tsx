interface SectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

function Section({ label, title, children, className, bgColor }: SectionProps) {
  return (
    <div className={`section_spacing ${bgColor ?? ""}`}>
      <div className={`flex flex-col gap-9 wrapper ${className ?? ""}`}>
        <div>
          <p className="text-[16px] text-primary uppercase text-center">
            {label}
          </p>
          <h1 className="text-center text-[32px] font-semibold">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Section;
