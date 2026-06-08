'use client'

import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../types";

export function ProjectCardContent({
  isTopCard,
  project,
}: {
  isTopCard: boolean;
  project: Project;
}) {
  return (
    <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-5 md:min-h-0 md:flex-1 md:gap-5 md:p-6 lg:p-7">
      <div className="flex shrink-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="inline-flex max-w-full rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold leading-none text-blue-700 dark:border-blue-950 dark:bg-blue-950/45 dark:text-blue-300 sm:px-3 sm:text-xs">
            {project.summary}
          </span>
          <h3 className="mt-2 line-clamp-2 text-lg font-bold tracking-tight text-gray-950 dark:text-white sm:text-2xl md:mt-3 md:text-3xl">
            {project.name}
          </h3>
        </div>

        <div className="flex shrink-0 gap-1.5 sm:gap-2">
          {isTopCard && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} 线上地址`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300 sm:h-10 sm:w-10"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-300 dark:border-gray-800 dark:text-gray-600 sm:h-10 sm:w-10">
              <ExternalLink className="h-4 w-4" />
            </span>
          )}

          {isTopCard && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub 地址`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300 sm:h-10 sm:w-10"
            >
              <Github className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-300 dark:border-gray-800 dark:text-gray-600 sm:h-10 sm:w-10">
              <Github className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-3 md:min-h-0 md:flex-1 md:grid-cols-[1.15fr_0.85fr] md:items-stretch lg:gap-5">
        <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-800 md:min-h-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/9] w-full object-cover object-top md:h-full md:aspect-auto"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
        </div>

        <div className="grid rounded-xl md:min-h-0 md:grid-rows-[minmax(0,1fr)_auto]">
          <div className="rounded-t-xl px-1 pb-3 md:min-h-0 sm:pb-4">
            <p className="line-clamp-4 text-xs leading-5 text-gray-600 dark:text-gray-300 sm:text-sm sm:leading-7 md:line-clamp-none md:text-[15px]">
              {project.description}
            </p>
          </div>

          <div className="rounded-b-xl border-t border-slate-200/80 px-1 pt-3 dark:border-gray-800 md:min-h-0 sm:pt-4">
            <div className="flex max-h-20 flex-wrap gap-1.5 overflow-hidden sm:max-h-none sm:gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BackgroundProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col gap-4 p-5 opacity-45 dark:opacity-35 md:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-white/45 pb-4 dark:border-white/10">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-blue-700 dark:text-blue-100">
            {project.summary}
          </p>
          <h4 className="mt-2 truncate text-xl font-bold text-slate-900 dark:text-white">
            {project.name}
          </h4>
        </div>
        <div className="flex shrink-0 gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/50 bg-white/55 text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-blue-100">
            <ExternalLink className="h-4 w-4" />
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/50 bg-white/55 text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-blue-100">
            <Github className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="grid flex-1 gap-4 md:grid-cols-[0.6fr_1fr] md:items-start">
        <div className="relative min-h-32 overflow-hidden rounded-xl border border-white/45 bg-white/35 shadow-sm dark:border-white/10 dark:bg-white/10">
          <img
            src={project.image}
            alt=""
            className="h-full min-h-32 w-full object-cover object-top opacity-80 grayscale"
          />
          <div className="absolute inset-0 bg-blue-50/20 dark:bg-blue-950/25" />
        </div>

        <div className="space-y-3">
          <p className="line-clamp-3 text-sm leading-6 text-slate-700 dark:text-blue-50/75">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techs.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/50 bg-white/45 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-blue-50/75"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreviewCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (index: number) => void;
}) {
  const rotations = [-8, 6, -4, 8, -6, 4, -7, 5, -3];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(index)}
      className="group relative flex h-44 w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-xl transition hover:z-20 hover:shadow-2xl sm:w-64 dark:border-gray-800 dark:bg-gray-900"
      initial={{ opacity: 0, y: 28, scale: 0.86, rotateZ: rotations[index % rotations.length] }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateZ: rotations[index % rotations.length] }}
      whileHover={{ scale: 1.06, rotateZ: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay: index * 0.025 }}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-24 w-full object-cover object-top opacity-85 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
      />
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="truncate text-xs font-medium text-gray-400">
            {project.summary}
          </p>
          <h4 className="mt-1 line-clamp-1 text-sm font-bold text-gray-950 dark:text-white">
            {project.name}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techs.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
