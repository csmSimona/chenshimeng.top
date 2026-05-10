'use client'
import Link from "next/link";
import { useMemo, useState } from "react";
import { Book, ChevronLeft, ChevronRight, Code, Earth, ExternalLink, Github, Home as HomeIcon, Image as ImageIcon, LayoutGrid } from "lucide-react";
import { motion, type PanInfo } from "motion/react";
import { Button } from "@/components/ui/button";

const navigationButtonClass =
  'inline-flex h-9 items-center gap-1 rounded-full border border-blue-100/80 bg-white/90 px-3 text-xs font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 sm:gap-2 sm:px-4 sm:text-sm dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-[0_10px_28px_rgba(96,165,250,0.14)] dark:hover:border-blue-300/40 dark:hover:bg-blue-400/15 dark:hover:text-blue-100'

const controlButtonClass =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-wait disabled:opacity-60 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300"

type Project = {
  id: number;
  name: string;
  summary: string;
  description: string;
  techs: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
};

type CardMotion = {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
};

type ExitStartMotion = Pick<CardMotion, "x" | "y" | "z" | "scale" | "rotateY" | "rotateZ" | "opacity">;

const cardSpring = {
  type: "spring" as const,
  stiffness: 150,
  damping: 24,
  mass: 1.05,
};

const getStackMotion = (stackIndex: number): CardMotion => {
  const offset = Math.min(stackIndex, 3);
  const direction = offset % 2 === 0 ? -1 : 1;

  return {
    x: direction * offset * 96,
    y: offset * 20 - 6,
    z: -offset * 140,
    scale: 1 - offset * 0.035,
    rotateY: direction * offset * 7,
    rotateZ: direction * offset * 3.4,
    opacity: stackIndex === 0 ? 1 : stackIndex < 4 ? 0.55 : 0,
  };
};

const getSwipeReleaseMotion = (direction: 1 | -1, distance = 128): ExitStartMotion => ({
  x: direction * distance,
  y: 18,
  z: -130,
  scale: 0.96,
  rotateY: direction * -10,
  rotateZ: direction * 3,
  opacity: 1,
});

const projects: Project[] = [
  {
    id: 1,
    name: "个人网站",
    summary: "个人展示与作品聚合站点",
    description:
      "基于 Next.js、TypeScript 和 Tailwind CSS 构建的个人网站，旨在展示个人作品、个人文档、图库、技术栈和专业背景，并使用 React Three Fiber 打造沉浸式图库交互。",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Three.js"],
    image: "/projects/personal-site.jpg",
    imageAlt: "个人网站产品截图",
    githubUrl: "https://github.com/csmSimona/chenshimeng.top",
    liveUrl: "https://chenshimeng.top/",
  },
  {
    id: 2,
    name: "个人文档",
    summary: "技术文档与学习笔记站点",
    description:
      "基于 VitePress 构建的个人技术文档站点，沉淀前端知识、算法笔记、开发记录与实践总结，提供清晰导航、代码高亮和响应式阅读体验。",
    techs: ["VitePress", "Vue3", "TypeScript", "Markdown"],
    image: "/projects/docs.png",
    imageAlt: "个人文档产品截图",
    githubUrl: "https://github.com/csmSimona/csmSimona.github.io",
    liveUrl: "https://doc.chenshimeng.top/",
  },
  {
    id: 3,
    name: "OfferMate（面一下）",
    summary: "AI 智能模拟面试平台",
    description:
      "面向技术求职者的 AI 智能模拟面试平台，支持根据目标岗位、工作年限、JD 和简历生成个性化模拟面试。系统通过语音交互、简历深挖、自适应追问和结构化报告生成，模拟真实技术面试流程，帮助用户完成面试训练闭环。",
    techs: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Zod",
      "ECharts",
      "Monaco Editor",
      "Web Speech API",
      "Whisper API",
      "LangChain",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/projects/offermate.png",
    imageAlt: "OfferMate 项目产品图",
    githubUrl: "https://github.com/csmSimona/OfferMate",
  },
  {
    id: 4,
    name: "ai-application-playground（AI 应用实验场）",
    summary: "AI 应用聚合工具",
    description:
      "基于 Next.js 构建的 AI 应用练习场，用于快速体验多种常见 AI 应用场景。支持用户在页面中自行配置 API Key、Base URL 和模型名称。",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "OpenAI Compatible API", "Anthropic API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop",
    imageAlt: "ai-application-playground 项目产品图",
    githubUrl: "https://github.com/csmSimona/ai-application-playground",
    liveUrl: "https://ai-application-playground.vercel.app/",
  },
  {
    id: 5,
    name: "bilingual-epub-ebook（双语 EPUB 电子书合成器）",
    summary: "中英对照电子书生成工具",
    description:
      "上传中文和英文 EPUB 后，自动生成可下载的中英对照电子书与对齐报告，适合双语阅读、语言学习和电子书内容处理场景。",
    techs: ["Next.js", "React", "TypeScript", "Node.js", "JSZip", "fast-xml-parser", "htmlparser2", "EPUB", "XHTML", "OPF", "NCX"],
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&h=600&fit=crop",
    imageAlt: "双语 EPUB 电子书合成器产品图",
    githubUrl: "https://github.com/csmSimona/bilingual-epub-ebook",
    liveUrl: "https://bilingual-epub-ebook.vercel.app/",
  },
  {
    id: 6,
    name: "云服务图片管理SaaS应用",
    summary: "云服务图片管理 SaaS 应用",
    description:
      "面向开发者和小型团队的图片上传与托管 SaaS 平台，支持多应用管理、对象存储配置、拖拽/粘贴上传、API Key 接入和 Stripe 订阅升级，并沉淀了可复用的前端上传组件 SDK。",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "tRPC", "NextAuth", "Drizzle ORM", "PostgreSQL / Neon", "S3 对象存储", "Uppy", "Stripe", "pnpm workspace"],
    image: "/projects/image-saas.png",
    imageAlt: "云服务图片管理 SaaS 应用产品图",
    githubUrl: "https://github.com/csmSimona/image-sass-project",
  },
  {
    id: 7,
    name: "低代码数据可视化大屏搭建平台",
    summary: "可视化大屏低代码编辑器",
    description:
      "基于 Vue3 的低代码数据可视化开发平台，主要用于快速搭建和管理可视化大屏。系统包含大屏列表、大屏编辑器和预览页面，支持通过拖拽或双击的方式将图表、地图、文本、按钮、滚动表格等组件添加到画布中。",
    techs: ["Vue3", "Vite", "TypeScript", "Pinia", "Naive UI", "Tailwind CSS", "ECharts", "Axios", "Monaco Editor", "vue3-sketch-ruler"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
    imageAlt: "低代码数据可视化开发平台产品图",
    githubUrl: "https://github.com/csmSimona/vue-lowcode-cockpit-admin",
  },
  {
    id: 8,
    name: "yummy-food",
    summary: "美食菜谱类 WebApp",
    description:
      "一个以菜谱分享、烹饪交流和健康饮食资讯为核心的美食社区应用。用户可以浏览和搜索菜谱，查看详细制作步骤，收藏、评论菜谱，也可以发布自己的菜谱和动态，与其他用户互动交流。",
    techs: ["React", "Redux", "React Router", "styled-components", "antd-mobile", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=600&fit=crop",
    imageAlt: "美食食谱类 WebApp 产品图",
    githubUrl: "https://github.com/csmSimona/yummy-food",
  },
  {
    id: 9,
    name: "锁屏背单词",
    summary: "Android 碎片化记忆应用",
    description:
      "一款基于 Android 平台的背单词软件，通过手机解锁场景触发单词记忆，把高频但零散的碎片时间转化为轻量学习流程。",
    techs: ["Java", "Android", "SQLite", "Material Design"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop",
    imageAlt: "锁屏背单词产品图",
    githubUrl: "https://github.com/csmSimona/SorkWord",
  },
];

function ProjectCardContent({
  isTopCard,
  project,
}: {
  isTopCard: boolean;
  project: Project;
}) {
  return (
    <div className="flex flex-1 flex-col gap-5 p-5 md:p-6 lg:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <span className="inline-flex max-w-full rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-950 dark:bg-blue-950/45 dark:text-blue-300">
            {project.summary}
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white md:text-3xl">
            {project.name}
          </h3>
        </div>

        <div className="flex gap-2">
          {isTopCard && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} 线上地址`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 text-gray-300 dark:border-gray-800 dark:text-gray-600">
              <ExternalLink className="h-4 w-4" />
            </span>
          )}

          {isTopCard && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub 地址`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/60 dark:hover:text-blue-300"
            >
              <Github className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 text-gray-300 dark:border-gray-800 dark:text-gray-600">
              <Github className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>

      <div className="grid flex-1 gap-4 md:grid-cols-[1.15fr_0.85fr] md:items-stretch lg:gap-5">
        <div className="relative h-full overflow-hidden rounded-xl border border-gray-100 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/10] h-full w-full object-cover object-top md:aspect-auto"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
        </div>

        <div className="grid h-full min-h-[15rem] grid-rows-2 rounded-xl md:min-h-0">
          <div className="min-h-0 overflow-y-auto rounded-t-xl px-1 pb-4 pr-2">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 md:text-[15px]">
              {project.description}
            </p>
          </div>

          <div className="min-h-0 overflow-y-auto rounded-b-xl border-t border-slate-200/80 px-1 pt-4 pr-2 dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
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

function BackgroundProjectCard({ project }: { project: Project }) {
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

function ProjectPreviewCard({
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

function ProjectCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [exitDirection, setExitDirection] = useState<1 | -1>(-1);
  const [exitSource, setExitSource] = useState<"button" | "drag">("button");
  const [exitStart, setExitStart] = useState<ExitStartMotion>(() => getSwipeReleaseMotion(-1, 0));
  const [exitingProject, setExitingProject] = useState<Project | null>(null);
  const [enteringProjectId, setEnteringProjectId] = useState<number | null>(null);

  const orderedProjects = useMemo(
    () => {
      const stack: Project[] = [];

      for (let index = 0; stack.length < projects.length && index < projects.length; index += 1) {
        const project = projects[(activeIndex + index) % projects.length];
        if (project.id !== exitingProject?.id) stack.push(project);
      }

      return stack;
    },
    [activeIndex, exitingProject?.id],
  );

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

    if (swipePower < 90) return;
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
    <div className="mx-auto w-full max-w-6xl">
      <div className="relative min-h-[980px] touch-pan-y [perspective:1600px] sm:min-h-[760px] md:min-h-[600px] lg:h-[calc(100vh-8rem)] lg:min-h-0 lg:max-h-[660px]">
        {exitingProject ? (
          <motion.article
            key={`exiting-${exitingProject.id}`}
            className="absolute inset-x-0 top-4 z-40 mx-auto flex min-h-[790px] w-[calc(100%-1rem)] max-w-4xl cursor-grabbing flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl [transform-style:preserve-3d] [backface-visibility:hidden] dark:border-gray-800 dark:bg-gray-900 sm:min-h-[620px] sm:w-[calc(100%-3rem)] md:top-8 md:min-h-[460px] md:w-[calc(100%-10rem)] lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:max-h-[500px]"
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
          const motionState = stackMotion;

          return (
            <motion.article
              key={project.id}
              aria-hidden={!isTopCard}
              inert={!isTopCard}
              drag={isTopCard && !isAnimating && !isPreviewing ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={handleDragEnd}
              whileDrag={{
                scale: 0.96,
                z: -130,
                rotateY: 10,
                rotateZ: 2,
              }}
              className={`absolute inset-x-0 top-4 mx-auto flex min-h-[790px] w-[calc(100%-1rem)] max-w-4xl cursor-grab flex-col overflow-hidden rounded-2xl border shadow-2xl [transform-style:preserve-3d] [backface-visibility:hidden] active:cursor-grabbing sm:min-h-[620px] sm:w-[calc(100%-3rem)] md:top-8 md:min-h-[460px] md:w-[calc(100%-10rem)] lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:max-h-[500px] ${
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
              animate={motionState}
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

        <div className="absolute inset-x-0 bottom-4 z-[30] flex justify-center px-5 sm:bottom-5 lg:bottom-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPreviousProject}
              disabled={isAnimating || isPreviewing}
              aria-label="上一个项目"
              className={controlButtonClass}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={showNextProject}
              disabled={isAnimating || isPreviewing}
              aria-label="下一个项目"
              className={controlButtonClass}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPreviewing((previewing) => !previewing)}
              disabled={isAnimating}
              aria-label="预览所有项目"
              className={controlButtonClass}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black lg:h-screen w-screen overflow-hidden">
      <div className="pointer-events-none fixed left-1/2 top-4 z-50 flex w-full -translate-x-1/2 justify-center px-2 sm:top-6">
        <nav className="pointer-events-auto cover-navigation cover-navigation--primary max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="navigation flex w-max flex-row flex-nowrap items-center justify-center gap-1 rounded-2xl !p-1.5 sm:gap-2 sm:!p-2">
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/">
                  <HomeIcon className="h-4 w-4" />
                  首页
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <a href="http://doc.chenshimeng.top" target="_blank" rel="noreferrer">
                  <Book className="h-4 w-4" />
                  文档
                </a>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/projects">
                  <Code className="h-4 w-4" />
                  项目
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/gallery">
                  <ImageIcon className="h-4 w-4" />
                  图库
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/about">
                  <Earth className="h-4 w-4" />
                  关于
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <main className="flex min-h-screen items-start bg-zinc-50 px-3 pb-24 pt-24 dark:bg-gray-950 sm:px-6 lg:h-screen lg:min-h-0 lg:items-center lg:px-8 lg:pb-10 lg:pt-24">
        <section id="projects" className="mx-auto w-full max-w-7xl">
          <ProjectCardStack />
        </section>
      </main>
    </div>
  );
}
