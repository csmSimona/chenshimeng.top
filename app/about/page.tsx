'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";

export default function About() {
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">网站介绍</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                这是一个基于现代Web技术栈构建的个人网站，旨在展示个人作品、个人文档、图库、技术栈和专业背景。网站采用响应式设计，适配各种屏幕尺寸，提供优雅的用户体验和流畅的交互效果。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                本项目融合了多种现代前端技术，包括Next.js框架、TypeScript语言、Tailwind CSS样式系统等，构建了一个功能完整、性能优良的个人展示平台。
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
                <li>
                  <a href="https://github.com/weizwz/weiz-home?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:opacity-80 flex items-start">
                    <span className="mr-2 mt-1">✨</span>
                    <div>
                      <strong>weiz-home</strong> - 简洁优雅的个人主页展示
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">借鉴了首页的作品展示、关于我页面布局以及项目页面的项目展示样式设计</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}