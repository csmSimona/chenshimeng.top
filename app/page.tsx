'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover
        title="Hi, I'm Simona"
        subtitle="把这世上唯一版本的自己做好 就够好"
        enableTyping={true}
      />

      {/* 中间内容部分 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 项目展示 */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">我的项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">项目 {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">项目标题 {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">这是项目 {item} 的简短描述，介绍项目的主要功能和特点。</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">查看详情</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* 关于部分 */}
        <section id="about" className="mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">关于我</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                你好，我是Simona，一名热爱技术的开发者。我喜欢探索新的技术，解决复杂的问题，并将创意转化为实际的产品。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                我擅长前端开发、后端开发和移动应用开发，拥有丰富的项目经验。我相信技术可以改变世界，让生活变得更加美好。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                除了技术，我还喜欢阅读、旅行和摄影。我认为保持好奇心和持续学习是成长的关键。
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
