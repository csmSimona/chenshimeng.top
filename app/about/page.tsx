'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";

export default function About() {

  // 技术栈数据
  const techStack = [
    // 前端基础
    { name: "HTML5", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "CSS3", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "JavaScript ES6+", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "Tailwind CSS", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
    // 前端框架
    { name: "React", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Next.js", color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300" },
    { name: "Vue", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    // 工程化
    { name: "Webpack", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Vite", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
    // 跨端框架
    { name: "uni-app", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300" },
    // 可视化
    { name: "PixiJS", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300" },
    { name: "Three.js", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    // 类型系统
    { name: "TypeScript", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    // 后端
    { name: "Node.js", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Express", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
    // AI与数据
    { name: "Python", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "LangChain", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300" },
  ];

  // 生成技术栈展示项（复制数组实现无缝滚动）
  const techStackItems = [...techStack, ...techStack].map((tech, index) => (
    <span 
      key={`${tech.name}-${index}`} 
      className={`px-4 py-2 rounded-full text-sm font-semibold ${tech.color}`}
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


      {/* 中间内容部分 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 关于部分 */}
        <section id="about" className="mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-12 text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">你好，我是 Simona</h2>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-4">
              资深前端研发，深耕中后台系统、数据可视化、移动端 H5 及小程序全流程项目落地
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-4">
              具备前端工程化基建、通用组件体系搭建能力，拥有全栈协作与自动化部署实战经验
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-4">
              擅长借助 AI 赋能研发，熟练运用 AI 编程与大模型工具，持续提升开发效率与代码质量
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-4">
              保持长期学习与技术迭代，目前持续深耕 AI 应用开发方向，不断拓展技术边界
            </p>
            
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll whitespace-nowrap gap-3 min-w-max">
                {techStackItems}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-12 max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">网站介绍</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                基于 Next.js、TypeScript 和 Tailwind CSS 构建的个人网站，旨在展示个人作品、个人文档、图库、技术栈和专业背景，并使用 React Three Fiber 打造沉浸式图库交互。网站采用响应式设计，适配各种屏幕尺寸，提供优雅的用户体验和流畅的交互效果。
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">技术栈</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">⚛️</span>
                    前端框架
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Next.js 16.1.1 - 基于React的全栈框架，支持服务端渲染和静态生成</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">🎨</span>
                    样式框架
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Tailwind CSS - 实用优先的CSS框架，提供丰富的原子类和响应式设计支持</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">🔤</span>
                    开发语言
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">TypeScript - JavaScript的超集，提供类型安全和更好的开发体验</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">🛠️</span>
                    构建工具
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Turbopack - 新一代JavaScript打包工具，提供更快的构建速度</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">🧩</span>
                    UI组件
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">自定义组件 + lucide-react - 基于Tailwind CSS构建的响应式UI组件系统</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="mr-2">🚀</span>
                    部署方式
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">静态部署 - 支持Vercel、Netlify等现代静态网站托管平台</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">参考网站</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:opacity-80 flex items-start">
                    <span className="mr-2 mt-1">📦</span>
                    <div>
                      <strong>hexo-theme-fluid</strong> - Material Design风格Hexo主题
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">从中借鉴了打字效果的实现方式，为网站添加了动态文字展示功能</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dmego/home.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:opacity-80 flex items-start">
                    <span className="mr-2 mt-1">🏠</span>
                    <div>
                      <strong>home.github.io</strong> - 个人主页模板
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">参考了点击切换首页封面的交互设计，增强了网站的视觉体验</p>
                    </div>
                  </a>
                </li>
                {/* <li>
                  <a href="https://github.com/weizwz/weiz-home?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:opacity-80 flex items-start">
                    <span className="mr-2 mt-1">✨</span>
                    <div>
                      <strong>weiz-home</strong> - 简洁优雅的个人主页展示
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">借鉴了首页的作品展示、关于我页面布局以及项目页面的项目展示样式设计</p>
                    </div>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}