import Image from "next/image";
import Link from "next/link";

interface SkillBadgeProps {
  name: string;
  icon: string;
  href?: string;
  className?: string;
}

export default function SkillBadge({ name, icon, href, className = "" }: SkillBadgeProps) {
  const content = (
    <>
      <div className="w-10 h-10 flex-shrink-0 relative">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <span className="font-display font-bold text-body-md text-on-surface">{name}</span>
    </>
  );

  const base = `group flex items-center gap-4 p-3 border border-outline-variant bg-surface-container-low hover:border-primary transition-colors duration-300 dark:bg-surface-container dark:border-outline-variant ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return <div className={base}>{content}</div>;
}
