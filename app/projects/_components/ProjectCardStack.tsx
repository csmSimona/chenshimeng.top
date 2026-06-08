'use client'

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { motion, type PanInfo } from "motion/react";
import { projects } from "../data";
import { cardSpring, getStackMotion, getSwipeReleaseMotion } from "../motion";
import type { ExitStartMotion, Project } from "../types";
import { BackgroundProjectCard, ProjectCardContent, ProjectPreviewCard } from "./ProjectCards";

const controlButtonClass =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-wait disabled:opacity-60 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300";

export function ProjectCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [exitDirection, setExitDirection] = useState<1 | -1>(-1);
  const [exitSource, setExitSource] = useState<"button" | "drag">("button");
  const [exitStart, setExitStart] = useState<ExitStartMotion>(() => getSwipeReleaseMotion(-1, 0));
  const [exitingProject, setExitingProject] = useState<Project | null>(null);
  const [enteringProjectId, setEnteringProjectId] = useState<number | null>(null);

  const orderedProjects = useMemo(() => {
    const stack: Project[] = [];

    for (let index = 0; stack.length < projects.length && index < projects.length; index += 1) {
      const project = projects[(activeIndex + index) % projects.length];
      if (project.id !== exitingProject?.id) stack.push(project);
    }

    return stack;
  }, [activeIndex, exitingProject?.id]);

  const showProject = (
    step: 1 | -1,
    startMotion?: ExitStartMotion,
    source: "button" | "drag" = "button",
    directionOverride?: 1 | -1,
  ) => {
    if (isAnimating) return;

    const nextExitDirection = directionOverride ?? (step === 1 ? -1 : 1);
    setExitDirection(nextExitDirection);
    setExitSource(source);
    setExitStart(startMotion ?? getSwipeReleaseMotion(nextExitDirection));
    setEnteringProjectId(null);
    setExitingProject(projects[activeIndex]);
    setIsAnimating(true);
    setActiveIndex((index) => (index + step + projects.length) % projects.length);
  };

  const showNextProject = () => showProject(1, getSwipeReleaseMotion(1), "button", 1);
  const showPreviousProject = () => {
    if (isAnimating) return;

    const previousIndex = (activeIndex - 1 + projects.length) % projects.length;
    setEnteringProjectId(projects[previousIndex].id);
    setIsAnimating(true);
    setActiveIndex(previousIndex);
  };

  const selectPreviewProject = (index: number) => {
    setActiveIndex(index);
    setEnteringProjectId(projects[index].id);
    setIsPreviewing(false);
    setIsAnimating(true);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeDistance = info.offset.x;
    const swipePower = Math.abs(info.velocity.x) * 0.24 + Math.abs(swipeDistance);

    if (swipePower < 56) return;
    const nextExitDirection = swipeDistance < 0 ? -1 : 1;
    const distance = Math.min(Math.max(Math.abs(swipeDistance), 96), 180);
    showProject(1, getSwipeReleaseMotion(nextExitDirection, distance), "drag", nextExitDirection);
  };

  const exitTarget = {
    x: exitDirection * 620,
    y: 36,
    z: -520,
    scale: 0.68,
    rotateY: exitDirection * -34,
    rotateZ: exitDirection * 8,
    opacity: 0,
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="relative touch-none [perspective:1600px] md:h-[calc(100dvh-9rem)] md:min-h-[600px] lg:h-[calc(100vh-8rem)] lg:min-h-0 lg:max-h-[660px]">
        {exitingProject ? (
          <motion.article
            key={`exiting-${exitingProject.id}`}
            className="absolute inset-x-0 top-0 z-40 mx-auto flex w-[calc(100%-0.25rem)] max-w-4xl cursor-grabbing touch-none flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl [transform-style:preserve-3d] [backface-visibility:hidden] dark:border-gray-800 dark:bg-gray-900 sm:w-[calc(100%-3rem)] md:top-8 md:h-[calc(100dvh-13rem)] md:w-[calc(100%-10rem)] lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:max-h-[500px]"
            initial={exitSource === "drag" ? exitStart : { x: 0, y: 0, z: 0, scale: 1, rotateY: 0, rotateZ: 0, opacity: 1 }}
            animate={exitSource === "button" ? {
              x: [0, exitStart.x, exitTarget.x],
              y: [0, exitStart.y, exitTarget.y],
              z: [0, exitStart.z, exitTarget.z],
              scale: [1, exitStart.scale, exitTarget.scale],
              rotateY: [0, exitStart.rotateY, exitTarget.rotateY],
              rotateZ: [0, exitStart.rotateZ, exitTarget.rotateZ],
              opacity: [1, 1, 0],
            } : exitTarget}
            transition={exitSource === "button"
              ? { duration: 0.86, ease: ["linear", [0.22, 1, 0.36, 1]], times: [0, 0.18, 1] }
              : { duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              setExitingProject(null);
              setIsAnimating(false);
            }}
          >
            <ProjectCardContent
              isTopCard
              project={exitingProject}
            />
          </motion.article>
        ) : null}

        {isPreviewing ? (
          <motion.div
            className="absolute inset-0 z-50 overflow-y-auto rounded-3xl bg-zinc-50/90 backdrop-blur-sm dark:bg-gray-950/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-full px-5 py-8 sm:grid sm:place-items-center sm:px-6 sm:py-10">
              <div className="grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectPreviewCard
                    key={project.id}
                    project={project}
                    index={index}
                    onSelect={selectPreviewProject}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        {orderedProjects.map((project, stackIndex) => {
          const visible = stackIndex < 4;
          const isTopCard = stackIndex === 0;
          const isEnteringProject = isTopCard && project.id === enteringProjectId;
          const stackMotion = getStackMotion(stackIndex);

          return (
            <motion.article
              key={project.id}
              aria-hidden={!isTopCard}
              inert={!isTopCard}
              drag={isTopCard && !isAnimating && !isPreviewing ? "x" : false}
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.24}
              onDragEnd={handleDragEnd}
              whileDrag={{
                scale: 0.96,
                z: -130,
                rotateY: 10,
                rotateZ: 2,
              }}
              className={`${isTopCard ? 'relative md:absolute' : 'absolute'} inset-x-0 top-0 mx-auto flex w-[calc(100%-0.25rem)] max-w-4xl cursor-grab touch-none flex-col overflow-hidden rounded-2xl border shadow-2xl [transform-style:preserve-3d] [backface-visibility:hidden] active:cursor-grabbing sm:w-[calc(100%-3rem)] md:top-8 md:h-[calc(100dvh-13rem)] md:w-[calc(100%-10rem)] lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:max-h-[500px] ${
                visible ? (isTopCard ? 'opacity-100' : 'opacity-0 md:opacity-100') : 'opacity-0'
              } ${
                isTopCard
                  ? 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
              }`}
              style={{
                zIndex: projects.length - stackIndex,
                filter: isTopCard ? undefined : `blur(${stackIndex * 0.7}px)`,
                pointerEvents: isTopCard ? undefined : "none",
              }}
              initial={isEnteringProject ? {
                x: 620,
                y: 36,
                z: -520,
                scale: 0.68,
                rotateY: -34,
                rotateZ: 8,
                opacity: 0,
              } : stackIndex === 0 ? { ...getStackMotion(1), opacity: 0.92 } : false}
              animate={stackMotion}
              transition={isEnteringProject ? {
                x: { type: "spring", stiffness: 120, damping: 24, mass: 1.15 },
                y: { type: "spring", stiffness: 120, damping: 24, mass: 1.15 },
                z: { type: "spring", stiffness: 120, damping: 24, mass: 1.15 },
                scale: { type: "spring", stiffness: 150, damping: 24, mass: 1 },
                rotateY: { type: "spring", stiffness: 120, damping: 24, mass: 1.15 },
                rotateZ: { type: "spring", stiffness: 120, damping: 24, mass: 1.15 },
                opacity: { duration: 0.18, ease: "linear" },
              } : cardSpring}
              onAnimationComplete={() => {
                if (isEnteringProject) {
                  setEnteringProjectId(null);
                  setIsAnimating(false);
                }
              }}
            >
              {isTopCard ? (
                <ProjectCardContent
                  isTopCard={isTopCard}
                  project={project}
                />
              ) : (
                <BackgroundProjectCard project={project} />
              )}
            </motion.article>
          );
        })}

      </div>

      {!isPreviewing ? (
        <div className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-5 pb-[max(0.125rem,env(safe-area-inset-bottom))] md:absolute md:bottom-5 md:mt-0 md:pb-0 lg:bottom-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPreviousProject}
              disabled={isAnimating}
              aria-label="上一个项目"
              className={controlButtonClass}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={showNextProject}
              disabled={isAnimating}
              aria-label="下一个项目"
              className={controlButtonClass}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPreviewing(true)}
              disabled={isAnimating}
              aria-label="预览所有项目"
              className={controlButtonClass}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
