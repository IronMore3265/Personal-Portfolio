import Link from "next/link";

interface ProjectCardProps {
  href: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
  className?: string;
}

export default function ProjectCard({
  href,
  icon,
  tag,
  title,
  description,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 dark:bg-surface-container-high ${className}`}
    >
      <div className="flex items-start gap-5">
        <span className="material-symbols-outlined text-4xl text-primary shrink-0">
          {icon}
        </span>
        <div>
          <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
            {tag}
          </span>
          <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
            {title}
          </h3>
          <p className="text-body-md text-on-surface-variant text-sm">
            {description}
          </p>
        </div>
      </div>
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
        arrow_outward
      </span>
    </Link>
  );
}
