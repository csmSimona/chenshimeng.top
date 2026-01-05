'use client'
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Book, Code, Image as ImageIcon, User, ChevronDown, Github } from "lucide-react";

interface CoverProps {
  title: string;
  subtitle: string;
  enableTyping?: boolean;
}

export default function Cover({ title, subtitle, enableTyping = false }: CoverProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const textIndexRef = useRef(0);

  useEffect(() => {
    // 重置打字效果状态
    setTypedText("");
    setIsTyping(false);
    textIndexRef.current = 0;
    
    // 实现获取随机壁纸的功能（使用picsum图库）
    const fetchRandomImage = () => {
      console.log('Fetching random image...');
      
      if (!panelRef.current) {
        console.error('Panel element not found');
        return;
      }
      
      try {
        // 使用picsum随机图片API，每次刷新都换一张
        const imgUrl = 'https://picsum.photos/1920/1080?random';
        
        console.log('Selected random image URL:', imgUrl);
        
        // 设置背景图片
        panelRef.current.style.backgroundImage = `url(${imgUrl})`;
        panelRef.current.style.backgroundPosition = "center center";
        panelRef.current.style.backgroundRepeat = "no-repeat";
        panelRef.current.style.backgroundColor = "#666";
        panelRef.current.style.backgroundSize = "cover";
      } catch (error) {
        console.error('Error setting random image:', error);
        
        // 备用方案：使用静态图片URL
        const fallbackUrl = 'https://picsum.photos/id/1005/1920/1080';
        console.log('Using fallback image URL:', fallbackUrl);
        panelRef.current.style.backgroundImage = `url(${fallbackUrl})`;
        panelRef.current.style.backgroundPosition = "center center";
        panelRef.current.style.backgroundRepeat = "no-repeat";
        panelRef.current.style.backgroundColor = "#666";
        panelRef.current.style.backgroundSize = "cover";
        
        // 同时设置overlay的背景，以便伪元素能继承
        const overlayRef = panelRef.current.querySelector('.panel-cover--overlay') as HTMLElement;
        if (overlayRef) {
          overlayRef.style.backgroundImage = `url(${fallbackUrl})`;
          overlayRef.style.backgroundPosition = "center center";
          overlayRef.style.backgroundRepeat = "no-repeat";
          overlayRef.style.backgroundSize = "cover";
        }
      }
    };

    // 启动获取随机图片
    fetchRandomImage();

    // 实现元素渐入动效 - 使用setTimeout确保DOM已完全渲染
    let time = 0;
    const duration = 150;
    
    setTimeout(() => {
      const iUpElements = document.querySelectorAll(".iUp");

      iUpElements.forEach((element) => {
        setTimeout(() => {
          element.classList.add("up");
        }, time);
        time += duration;
      });
    }, 0);

    // 实现打字效果
    if (enableTyping) {
      const typeText = () => {
        if (textIndexRef.current < subtitle.length) {
          const currentChar = subtitle.charAt(textIndexRef.current);
          setTypedText(prev => prev + currentChar);
          textIndexRef.current++;
          typingRef.current = setTimeout(typeText, 100);
        }
      };

      // 启动打字效果（延迟一段时间，确保渐入动画完成）
      setTimeout(() => {
        setIsTyping(true);
        // 立即添加第一个字符，确保它能显示
        const firstChar = subtitle.charAt(0);
        setTypedText(firstChar);
        textIndexRef.current = 1;
        // 然后继续打字效果
        typingRef.current = setTimeout(typeText, 100);
      }, time + 300);
    }

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [subtitle, enableTyping]);

  return (
    <div id="panel" ref={panelRef} className="panel-cover">
      <div className="panel-cover--overlay"></div>
      <div className="panel-main">
        <div className="panel-main__inner panel-inverted">
          <div className="panel-main__content">
            <h1 className="panel-cover__title panel-title iUp">
              <a href="#" title="name">{title}</a>
            </h1>
            <p className="panel-cover__subtitle panel-subtitle iUp">
              {enableTyping ? (
                <>
                  <span>{typedText}</span>
                  <span className={`typing-cursor ${isTyping ? 'visible' : ''}`}></span>
                </>
              ) : (
                subtitle
              )}
            </p>
            <hr className="panel-cover__divider iUp" />
            <div className="navigation-wrapper iUp">
              <div>
                <nav className="cover-navigation cover-navigation--primary">
                  <ul className="navigation flex flex-col gap-3 sm:flex-row justify-center">
                    <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="/">
                          <HomeIcon className="h-4 w-4" />
                          首页
                        </a>
                      </Button>
                    </li>
                    <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="http://doc.chenshimeng.top" target="_blank">
                          <Book className="h-4 w-4" />
                          文档
                        </a>
                      </Button>
                    </li>
                    <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="/projects">
                          <Code className="h-4 w-4" />
                          项目
                        </a>
                      </Button>
                    </li>
                    <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="/gallery">
                          <ImageIcon className="h-4 w-4" />
                          图库
                        </a>
                      </Button>
                    </li>
                    <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="/about">
                          <User className="h-4 w-4" />
                          关于
                        </a>
                      </Button>
                    </li>
                    {/* <li className="navigation__item">
                      <Button variant="ghost" className="blog-button text-white hover:text-primary px-4 py-2 rounded-full flex items-center gap-2" asChild>
                        <a href="https://github.com/csmSimona" target="_blank">
                          <Github className="h-4 w-4" />
                          Github
                        </a>
                      </Button>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down flex justify-center items-center flex-col">
        <a href="https://github.com/csmSimona" target="_blank" className="mb-2">
          <svg t="1767619386538" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2761" width="22" height="22"><path d="M512 12.672c-282.88 0-512 229.248-512 512 0 226.261333 146.688 418.133333 350.08 485.76 25.6 4.821333 34.986667-11.008 34.986667-24.618667 0-12.16-0.426667-44.373333-0.64-87.04-142.421333 30.890667-172.458667-68.693333-172.458667-68.693333C188.672 770.986667 155.008 755.2 155.008 755.2c-46.378667-31.744 3.584-31.104 3.584-31.104 51.413333 3.584 78.421333 52.736 78.421333 52.736 45.653333 78.293333 119.850667 55.68 149.12 42.581333 4.608-33.109333 17.792-55.68 32.426667-68.48-113.706667-12.8-233.216-56.832-233.216-253.013333 0-55.893333 19.84-101.546667 52.693333-137.386667-5.76-12.928-23.04-64.981333 4.48-135.509333 0 0 42.88-13.738667 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52 0.256 87.04 5.888 128 17.28 97.28-66.218667 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581333 5.12 135.509333 32.64 35.84 52.48 81.493333 52.48 137.386667 0 196.693333-119.68 240-233.6 252.586667 17.92 15.36 34.56 46.762667 34.56 94.72 0 68.522667-0.64 123.562667-0.64 140.202666 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512" fill="#ffffff" p-id="2762"></path></svg>
        </a>
        <a className="scroll-down-arrow flex items-center justify-center">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}