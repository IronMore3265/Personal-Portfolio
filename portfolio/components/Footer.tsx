export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background border-t border-outline-variant transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter max-w-[1440px] mx-auto gap-6">
        <div className="text-headline-md font-bold text-primary">
          Nabil F.R.
        </div>
        <div className="text-label-mono text-on-surface-variant">
          Personal portfolio © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
