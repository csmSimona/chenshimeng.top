'use client'

import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import {
  Code2,
  Cpu,
  Layers,
  Palette,
  Rocket,
  Type,
} from "lucide-react";

const techStack = [
  { name: "HTML5", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
  { name: "CSS3", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "JavaScript ES6+", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
  { name: "Tailwind CSS", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
  { name: "React", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Next.js", color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300" },
  { name: "Vue", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Webpack", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
  { name: "Vite", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
  { name: "uni-app", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300" },
  { name: "PixiJS", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300" },
  { name: "Three.js", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
  { name: "TypeScript", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "Node.js", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Express", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
  { name: "Python", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "LangChain", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300" },
];

const introTexts = [
  "资深前端研发，深耕中后台系统、数据可视化、移动端 H5 及小程序全流程项目落地",
  "具备前端工程化基建、通用组件体系搭建能力，拥有全栈协作与自动化部署实战经验",
  "擅长借助 AI 赋能研发，熟练运用 AI 编程与大模型工具，持续提升开发效率与代码质量",
  "保持长期学习与技术迭代，目前持续深耕 AI 应用开发方向，不断拓展技术边界",
];

const siteTechs = [
  {
    title: "前端框架",
    text: "Next.js 16.1.1 - 作为站点的应用框架，承载页面路由、静态生成和整体渲染能力。",
    icon: Code2,
  },
  {
    title: "样式框架",
    text: "Tailwind CSS - 用于快速构建响应式界面，并保持页面风格、间距和状态样式的一致性。",
    icon: Palette,
  },
  {
    title: "开发语言",
    text: "TypeScript - 为组件、数据结构和页面逻辑提供类型约束，提升维护体验。",
    icon: Type,
  },
  {
    title: "构建工具",
    text: "Turbopack - 用于本地开发与构建流程，提升项目启动和编译效率。",
    icon: Cpu,
  },
  {
    title: "UI组件",
    text: "自定义组件 + lucide-react - 结合站点视觉风格封装基础组件，并使用图标增强操作识别度。",
    icon: Layers,
  },
  {
    title: "部署方式",
    text: "静态部署 - 适配 Vercel、Netlify 等现代托管平台，便于持续发布和访问。",
    icon: Rocket,
  },
];

const references = [
  {
    title: "hexo-theme-fluid",
    href: "https://github.com/fluid-dev/hexo-theme-fluid",
    description: "Material Design风格Hexo主题",
    note: "从中借鉴了打字效果的实现方式，为网站添加了动态文字展示功能",
  },
  {
    title: "home.github.io",
    href: "https://github.com/dmego/home.github.io",
    description: "个人主页模板",
    note: "参考了点击切换首页封面的交互设计，增强了网站的视觉体验",
  },
];

export default function About() {
  const techStackItems = [...techStack, ...techStack].map((tech, index) => (
    <span
      key={`${tech.name}-${index}`}
      className={`rounded-full px-4 py-2 text-sm font-semibold ${tech.color}`}
    >
      {tech.name}
    </span>
  ));

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover
        title="关于"
        enableTyping={false}
      />

      <main className="bg-zinc-50 px-4 py-16 dark:bg-gray-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <section id="about" className="overflow-hidden rounded-2xl border border-blue-100/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-gray-900 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-10">
            <div className="min-w-0 space-y-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
                  你好，我是 Simona
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-300">
                  关注前端系统建设、复杂业务交互与 AI 应用开发，持续把工程能力沉淀到真实项目中。
                </p>
              </div>

              <div className="min-w-0 space-y-5 text-center">
                <div className="mx-auto w-fit max-w-full space-y-4 text-left">
                  {introTexts.map((text) => (
                    <div
                      key={text}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-500 dark:bg-blue-300" />
                      <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative w-full min-w-0 overflow-hidden border-t border-gray-100 pt-5 dark:border-white/10">
                  <div className="flex min-w-max animate-scroll gap-3 whitespace-nowrap">
                    {techStackItems}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900 md:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mt-4 text-3xl font-bold text-gray-950 dark:text-white">网站介绍</h2>
              <p className="mt-6 text-left text-base leading-8 text-gray-600 dark:text-gray-300 md:text-center">
                基于 Next.js、TypeScript 和 Tailwind CSS 构建的个人网站，用来集中展示我的项目作品、技术文档、图库、技术栈与个人背景。站点采用响应式设计，项目页和图库页加入了更具交互感的展示方式，希望在保持清晰阅读体验的同时，也呈现一些前端视觉与工程实践。
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-white">技术栈</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {siteTechs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-xl border border-gray-100 bg-zinc-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/60 dark:border-white/10 dark:bg-gray-950/60 dark:hover:border-blue-300/20 dark:hover:bg-blue-500/10"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{item.title}</h4>
                      </div>
                      <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-white">参考网站</h3>
              <ol className="mt-5 space-y-4">
                {references.map((reference) => (
                  <li
                    key={reference.href}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <a
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                    >
                      <span>
                        <strong className="text-blue-600 dark:text-blue-300">{reference.title}</strong>
                        {" - "}
                        {reference.description}
                      </span>
                    </a>
                    <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">{reference.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
