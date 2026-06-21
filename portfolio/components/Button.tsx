import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "inverse";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-inverse-surface dark:hover:bg-surface-container-highest",
  secondary:
    "border border-outline text-primary hover:bg-surface-container dark:text-on-surface",
  inverse:
    "bg-on-primary text-primary hover:bg-surface-container-highest dark:bg-surface dark:text-on-surface",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className = "",
  onClick,
  type = "button",
  target,
}: ButtonProps) {
  const baseClasses =
    "inline-flex justify-center items-center px-8 py-4 font-display font-bold tracking-wide transition-all duration-300 group";

  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
