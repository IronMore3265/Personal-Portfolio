interface SectionHeadingProps {
  icon?: string;
  title: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ icon, title, className = "", light = false }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {icon && (
        <span className={`material-symbols-outlined text-4xl mb-4 block ${light ? "opacity-50" : "opacity-50"}`}>
          {icon}
        </span>
      )}
      <h2 className={`text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight ${light ? "text-on-primary dark:text-on-surface" : "text-primary dark:text-on-surface"}`}>
        {title}
      </h2>
    </div>
  );
}
