export function PatternGrid({ className = "" }: { className?: string }) {
  return <div className={`pattern-grid ${className}`} aria-hidden="true" />;
}

export function DiagonalLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-primary dark:bg-on-surface ${className}`}
      aria-hidden="true"
      style={{ height: "1px" }}
    />
  );
}

export function GradientBlob({ className = "" }: { className?: string }) {
  return <div className={`gradient-blob ${className}`} aria-hidden="true" />;
}
