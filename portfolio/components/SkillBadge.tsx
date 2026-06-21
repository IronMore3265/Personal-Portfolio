import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon: string;
  className?: string;
}

export default function SkillBadge({ name, icon, className = "" }: SkillBadgeProps) {
  return (
    <div
      className={`group flex items-center gap-4 p-3 border border-outline-variant bg-surface-container-low hover:border-primary transition-colors duration-300 dark:bg-surface-container dark:border-outline-variant ${className}`}
    >
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
    </div>
  );
}
