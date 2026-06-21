import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background border-t border-outline-variant transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter max-w-[1440px] mx-auto gap-6">
        <div className="text-headline-md font-bold text-primary">
          Nabil F.R.
        </div>
        <div className="flex gap-6">
          <Link
            href="https://linkedin.com/in/nabilfuad19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-mono text-on-surface-variant hover:text-primary transition-colors underline"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:nabil.buet20@gmail.com"
            className="text-label-mono text-on-surface-variant hover:text-primary transition-colors underline"
          >
            Email
          </Link>
        </div>
        <div className="text-label-mono text-on-surface-variant">
          Personal portfolio © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
