"use client";

import { useEffect } from "react";
import ProjectDetailView from "./ProjectDetailView";
import type { ProjectDetail } from "./ProjectDetailView";

export type { ProjectDetail };

interface ProjectModalProps {
  title: string;
  detail: ProjectDetail;
  onClose: () => void;
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

        <ProjectDetailView detail={detail} />
      </div>
    </div>
  );
}
