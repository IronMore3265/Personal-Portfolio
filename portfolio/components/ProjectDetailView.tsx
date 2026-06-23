import type { ReactNode } from "react";

export interface ProjectDetail {
  subtitle: string;
  role: string;
  overview: string;
  keyFeatures: string[];
  contribution: string[];
  outcomes: string[];
  tools: string[];
}

export function parseBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-body-md text-on-surface-variant">
          <span className="text-primary mt-0.5 shrink-0 select-none">—</span>
          <span className="text-justify">{parseBold(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailView({ detail }: { detail: ProjectDetail }) {
  return (
    <>
      {/* Tool chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {detail.tools.map((tool) => (
          <span
            key={tool}
            className="text-label-mono text-xs px-3 py-1 bg-surface-variant text-on-surface-variant border border-outline-variant"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <section>
          <h3 className="text-label-mono text-on-surface mb-3">Overview</h3>
          <p className="text-body-md text-on-surface-variant">{detail.overview}</p>
        </section>

        {/* Key Features */}
        <section>
          <h3 className="text-label-mono text-on-surface mb-3">Key Features</h3>
          <BulletList items={detail.keyFeatures} />
        </section>

        {/* My Contribution */}
        <section>
          <h3 className="text-label-mono text-on-surface mb-3">My Contribution</h3>
          <BulletList items={detail.contribution} />
        </section>

        {/* Outcomes */}
        <section>
          <h3 className="text-label-mono text-on-surface mb-3">Outcomes</h3>
          <BulletList items={detail.outcomes} />
        </section>
      </div>
    </>
  );
}
