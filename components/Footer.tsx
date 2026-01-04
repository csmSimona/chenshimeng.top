export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Simona's Blog</h3>
            <p className="text-gray-400">记录生活，分享技术</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">项目</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">图库</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">关于</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">联系方式</h3>
            <p className="text-gray-400">邮箱：example@example.com</p>
            <p className="text-gray-400">GitHub：github.com/simona</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Simona's Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}