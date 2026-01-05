'use client'
import { useState, useEffect } from "react";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";



export default function Home() {
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
        title="Hi, I'm Simona"
        subtitle="把这世上唯一版本的自己做好 就够好"
        enableTyping={true}
      />

      {/* 项目展示 */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white mb-12">作品展示</h2>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
            {/* 项目内容 */}
            <div className='text-left space-y-8 lg:col-span-6'>
              <div className='inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium dark:bg-indigo-900/30 dark:text-indigo-300'>
                Android应用
              </div>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight'>
                锁屏背单词
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
                一款基于Android手机平台的背单词软件，利用手机解锁记忆单词。锁屏背单词力争帮大家合理地利用好碎片时间，把原本无用的时间变得有用，把没有意义的事情（解锁）变得有意义。
              </p>
              <div className='flex flex-wrap gap-3'>
                {['Java', 'Android', 'SQLite', 'Material Design'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-4 pt-4'>
                <a href='#' className='px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors w-full sm:w-auto'>
                  立即体验
                </a>
              </div>
            </div>
            
            {/* 项目展示区 */}
            <div className='relative lg:col-span-6'>
              {/* Background Blob */}
              <div className='absolute -inset-4 bg-indigo-200/50 dark:bg-indigo-900/20 rounded-3xl z-0 blur-2xl'></div>
              
              {/* Browser Window */}
              <div className='relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
                {/* Mac-style window header */}
                <div className='h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-400'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                  <div className='w-3 h-3 rounded-full bg-green-400'></div>
                  <div className='ml-4 text-sm text-gray-500 dark:text-gray-400'>lockword.example.com</div>
                </div>
                
                {/* Browser Content (Single Image) */}
                <div className='relative h-auto overflow-hidden bg-white dark:bg-gray-900 group pt-1'>
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
                    alt="锁屏背单词预览" 
                    className="w-full object-top transition-transform duration-800 group-hover:scale-[1.03]"
                  />
                  {/* Inner Shadow */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 笔记展示 */}
      <section className='bg-zinc-50 dark:bg-gray-900 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
            
            {/* 左侧：浏览器展示 */}
            <div className='relative lg:col-span-7 order-last lg:order-first'>
              <div className='absolute -inset-4 bg-blue-200/50 dark:bg-blue-900/20 rounded-3xl z-0 blur-2xl'></div>
              <div className='relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
                <div className='h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-400'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                  <div className='w-3 h-3 rounded-full bg-green-400'></div>
                  <div className='ml-4 text-sm text-gray-500 dark:text-gray-400'>note.example.com</div>
                </div>
                <div className='relative h-auto overflow-hidden bg-white dark:bg-gray-900 group pt-1'>
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
                    alt="个人博客预览"
                    className="w-full object-top transition-transform duration-800 group-hover:scale-[1.03]"
                  />
                  {/* Inner Shadow */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"></div>
                </div>
              </div>
            </div>

            {/* 右侧：内容 */}
            <div className='text-left space-y-8 lg:col-span-5'>
              <div className='inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300'>
                个人博客
              </div>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight'>
                个人技术博客
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
                基于现代 Web 技术栈构建的个人博客平台，专注于技术文章分享和知识沉淀。支持本地搜索、代码高亮、标签分类等功能。采用响应式设计，提供优秀的阅读体验。
              </p>
              <div className='flex flex-wrap gap-2'>
                {['Vue3', 'VitePress', 'ElementPlus', 'Cloudflare'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-4 pt-4'>
                <a href='#' className='px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto'>
                  访问博客
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 关于部分 */}
      <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-12 text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">你好，我是 Simona</h2>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-10">
              一名热衷于技术的开发者，享受探索新技术、解决复杂问题，并将创意转化为实际产品的过程。我拥有扎实的开发经验，熟练掌握现代技术栈，始终致力于通过技术解决现实问题，为用户创造价值。
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-10">
              在中后台管理系统、数据可视化大屏以及移动应用开发等领域，我积累了丰富的项目实践经验。
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-10">
              技术之外，我也热爱阅读与旅行。始终相信“读万卷书，行万里路”，保持好奇与持续学习，是我不断成长的重要源泉。
            </p>
            
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll whitespace-nowrap gap-3 min-w-max">
                {techStackItems}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
