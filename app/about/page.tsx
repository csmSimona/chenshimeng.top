'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="关于"
        subtitle="关于我"
        enableTyping={false}
      />


      {/* 中间内容部分 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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