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
        <div className="flex justify-center items-center gap-4">
          <a href="https://github.com/csmSimona" target="_blank" className="mb-4">
            <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
          </a>

          <a href="mailto:simonacsm@163.com" target="_blank" className="mb-4">
            <img src="/email.svg" alt="Email" className="h-6 w-6" />
          </a>
        </div>
        <a className="scroll-down-arrow flex items-center justify-center">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}