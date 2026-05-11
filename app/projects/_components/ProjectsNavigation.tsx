import Link from "next/link";
import { Book, Code, Earth, Home as HomeIcon, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationButtonClass =
  'inline-flex h-9 items-center gap-1 rounded-full border border-blue-100/80 bg-white/90 px-3 text-xs font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 sm:gap-2 sm:px-4 sm:text-sm dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-[0_10px_28px_rgba(96,165,250,0.14)] dark:hover:border-blue-300/40 dark:hover:bg-blue-400/15 dark:hover:text-blue-100';

export function ProjectsNavigation() {
  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-50 flex w-full -translate-x-1/2 justify-center px-2 sm:top-6">
      <nav className="pointer-events-auto cover-navigation cover-navigation--primary max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="navigation flex w-max flex-row flex-nowrap items-center justify-center gap-1 rounded-2xl !p-1.5 sm:gap-2 sm:!p-2">
          <li className="navigation__item shrink-0">
            <Button variant="ghost" className={navigationButtonClass} asChild>
              <Link href="/">
                <HomeIcon className="h-4 w-4" />
                首页
              </Link>
            </Button>
          </li>
          <li className="navigation__item shrink-0">
            <Button variant="ghost" className={navigationButtonClass} asChild>
              <a href="http://doc.chenshimeng.top" target="_blank" rel="noreferrer">
                <Book className="h-4 w-4" />
                文档
              </a>
            </Button>
          </li>
          <li className="navigation__item shrink-0">
            <Button variant="ghost" className={navigationButtonClass} asChild>
              <Link href="/projects">
                <Code className="h-4 w-4" />
                项目
              </Link>
            </Button>
          </li>
          <li className="navigation__item shrink-0">
            <Button variant="ghost" className={navigationButtonClass} asChild>
              <Link href="/gallery">
                <ImageIcon className="h-4 w-4" />
                图库
              </Link>
            </Button>
          </li>
          <li className="navigation__item shrink-0">
            <Button variant="ghost" className={navigationButtonClass} asChild>
              <Link href="/about">
                <Earth className="h-4 w-4" />
                关于
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
