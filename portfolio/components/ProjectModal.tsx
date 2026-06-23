"use client";

import { useEffect } from "react";
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

interface ProjectModalProps {
  title: string;
  detail: ProjectDetail;
  onClose: () => void;
}

function parseBold(text: string): ReactNode {
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
          <span>{parseBold(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ title, detail, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="bg-surface-container border border-outline-variant w-full max-w-2xl p-8 md:p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <h2 className="font-display font-bold text-headline-md text-on-surface mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-label-mono text-on-surface-variant mb-1">{detail.subtitle}</p>
          <p className="text-label-mono text-primary">{detail.role}</p>
        </div>

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
      </div>
    </div>
  );
}
