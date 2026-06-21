interface ExperienceRowProps {
  date: string;
  title: string;
  company: string;
  bullets: string[];
  className?: string;
}

export default function ExperienceRow({ date, title, company, bullets, className = "" }: ExperienceRowProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 border-t border-outline-variant/30 py-10 group hover:bg-surface-variant/50 dark:hover:bg-white/5 transition-colors ${className}`}>
      <div className="md:w-1/4 text-label-mono text-primary dark:text-primary-fixed-dim uppercase tracking-widest pt-2">
        {date}
      </div>
      <div className="md:w-3/4">
        <h3 className="text-headline-md mb-2 text-on-surface">{title}</h3>
        <p className="text-body-lg text-on-surface-variant mb-6">{company}</p>
        <ul className="space-y-4 text-body-md text-on-surface-variant">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start">
              <span className="material-symbols-outlined text-sm mr-3 mt-1 text-primary dark:text-primary-fixed-dim">
                check_circle
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
