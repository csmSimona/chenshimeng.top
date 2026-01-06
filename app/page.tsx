'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  // 项目数据数组
  const projects = [
    {
      id: "projects",
      title: "个人文档",
      subtitle: "技术文档",
      description: "基于 VitePress 构建的个人技术文档站点，专注于前端技术分享、学习笔记和开发实践总结。提供清晰的分类导航、代码高亮和响应式设计，打造优质的阅读体验。",
      techs: ['VitePress', 'Vue3', 'TypeScript', 'Markdown'],
      buttonText: "访问文档",
      buttonLink: "http://doc.chenshimeng.top/",
      imageSrc: "/docs.png",
      imageAlt: "个人文档预览",
      browserUrl: "doc.chenshimeng.top",
      backgroundColor: "bg-zinc-50 dark:bg-gray-900",
      accentColor: "blue",
      reverse: false
    },
    {
      title: "锁屏背单词",
      subtitle: "Android应用",
      description: "一款基于Android手机平台的背单词软件，利用手机解锁记忆单词。锁屏背单词力争帮大家合理地利用好碎片时间，把原本无用的时间变得有用，把没有意义的事情（解锁）变得有意义。",
      techs: ['Java', 'Android', 'SQLite', 'Material Design'],
      buttonText: "立即体验",
      buttonLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      imageAlt: "锁屏背单词预览",
      browserUrl: "lockword.example.com",
      backgroundColor: "bg-white dark:bg-gray-950",
      accentColor: "indigo",
      reverse: true
    },
  ];

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

      {/* 项目展示区域 */}
      {projects.map((project, index) => (
        <ProjectShowcase
          key={index}
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          techs={project.techs}
          buttonText={project.buttonText}
          buttonLink={project.buttonLink}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          browserUrl={project.browserUrl}
          backgroundColor={project.backgroundColor}
          accentColor={project.accentColor}
          reverse={project.reverse}
        />
      ))}

      {/* 关于部分 */}
      <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
