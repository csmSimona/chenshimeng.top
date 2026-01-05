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
              {/* <li><a href="https://www.yuque.com/erxiongbushixionger/cv3z9l/ykpr8bqqyc7iegwl?singleDoc# 《阅读记录》" target="_blank" className="text-gray-400 hover:text-white transition-colors">阅读记录</a></li>
              <li><a href="https://www.yuque.com/erxiongbushixionger/cv3z9l/xkgssy35ho8ds2v6?singleDoc# 《观影记录》" target="_blank" className="text-gray-400 hover:text-white transition-colors">观影记录</a></li>
              <li><a href="https://www.yuque.com/erxiongbushixionger/cv3z9l/zhzdzu2g23p0aw5z?singleDoc# 《拼图记录》" target="_blank" className="text-gray-400 hover:text-white transition-colors">拼图记录</a></li> */}
              <li><a href="http://doc.chenshimeng.top" target="_blank" className="text-gray-400 hover:text-white transition-colors">我的文档</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">我的项目</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">我的图库</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">关于</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">联系方式</h3>
            <p className="text-gray-400">邮箱：<a href="mailto:simonacsm@163.com" target="_blank">simonacsm@163.com</a></p>
            <p className="text-gray-400">GitHub：<a href="https://github.com/csmSimona" target="_blank">https://github.com/csmSimona</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">Released under the MIT License.</p>
          <p className="text-sm">Copyright © 2025-{new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025215771号</a></p>
        </div>
      </div>
    </footer>
  );
}