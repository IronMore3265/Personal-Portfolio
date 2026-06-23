import Link from "next/link";

type CardVariant = "light" | "dark" | "featured";

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  variant?: CardVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

const variantStyles: Record<CardVariant, { card: string; tag: string; arrow: string; title: string; desc: string }> = {
  light: {
    card: "bg-surface-container border border-outline-variant hover:border-primary dark:bg-surface-container-high",
    tag: "bg-surface-variant dark:bg-surface-container-highest",
    arrow: "text-outline-variant group-hover:text-primary",
    title: "text-on-surface",
    desc: "text-on-surface-variant",
  },
  dark: {
    card: "bg-primary text-on-primary dark:bg-surface-container-highest dark:border dark:border-outline-variant",
    tag: "border border-on-primary dark:border-outline-variant",
    arrow: "text-on-primary/50 group-hover:text-on-primary dark:text-on-surface-variant",
    title: "text-on-primary dark:text-on-surface",
    desc: "text-primary-fixed-dim dark:text-on-surface-variant",
  },
  featured: {
    card: "bg-surface-container border border-outline-variant hover:border-primary dark:bg-surface-container-high",
    tag: "bg-primary text-on-primary dark:bg-surface-container-highest dark:text-on-surface",
    arrow: "text-outline-variant group-hover:text-primary",
    title: "text-on-surface",
    desc: "text-on-surface-variant",
  },
};

export default function ProjectCard({
  tag,
  title,
  description,
  variant = "light",
  href,
  onClick,
  className = "",
  colSpan = 1,
  rowSpan = 1,
}: ProjectCardProps) {
  const styles = variantStyles[variant];
  const interactive = href || onClick;

  const spanClasses = [
    colSpan === 2 ? "md:col-span-2" : "",
    rowSpan === 2 ? "md:row-span-2" : "",
  ].join(" ");

  const card = (
    <div
      onClick={onClick}
      className={`${spanClasses} ${styles.card} p-8 flex flex-col justify-between group transition-colors duration-300 ${interactive ? "cursor-pointer" : ""} ${className}`}
    >
      <div className="flex justify-between items-start">
        <span className={`${styles.tag} text-label-mono px-3 py-1 text-xs`}>
          {tag}
        </span>
        {interactive && (
          <span
            className={`material-symbols-outlined ${styles.arrow} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300`}
          >
            arrow_outward
          </span>
        )}
      </div>
      <div className="mt-auto pt-6">
        <h3 className={`font-display font-bold text-lg mb-2 ${styles.title}`}>{title}</h3>
        <p className={`text-body-md text-sm ${styles.desc}`}>{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="contents">
        {card}
      </Link>
    );
  }

  return card;
}
