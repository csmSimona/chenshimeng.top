'use client'
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";

export default function Projects() {
  // Mock data for projects section
  const mockProducts = [
    {
      id: 1,
      title: "锁屏背单词",
      subtitle: "Android移动应用",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      imageAlt: "锁屏背单词应用截图",
      link: "#",
    },
    {
      id: 2,
      title: "个人博客",
      subtitle: "技术文章分享",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      imageAlt: "个人博客网站截图",
      link: "#",
    },
    {
      id: 3,
      title: "电商平台",
      subtitle: "在线购物系统",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",
      imageAlt: "电商平台网站截图",
      link: "#",
    },
    {
      id: 4,
      title: "任务管理工具",
      subtitle: "高效任务管理",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      imageAlt: "任务管理工具截图",
      link: "#",
    },
    {
      id: 5,
      title: "数据分析平台",
      subtitle: "数据可视化分析",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "数据分析平台截图",
      link: "#",
    },
    {
      id: 6,
      title: "社交媒体应用",
      subtitle: "社交网络平台",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      imageAlt: "社交媒体应用截图",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="项目"
        enableTyping={false}
      />
      
      {/* 中间内容部分 */}
      <main>
        {/* 项目展示 */}
        <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white mb-12">我的项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <div key={product.id} className="md:px-3">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full p-6 md:p-8">
                    <div>
                      <h3 className="text-xl text-gray-500 dark:text-gray-400 text-center font-bold mb-1">
                        {product.subtitle}
                      </h3>
                      <h3 className="text-xl text-center font-bold mb-4 text-gray-900 dark:text-white">
                        {product.title}
                      </h3>
                      <a
                        href={product.link}
                        target="_blank"
                        className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center justify-center group"
                      >
                        进一步了解
                        <span className='ml-2 text-lg transform group-hover:translate-x-1 transition-transform inline-block align-middle'>→</span>
                      </a>
                    </div>
                    <div className="mt-8 rounded-xl">
                      <div className="w-full aspect-8/5 rounded-md overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}