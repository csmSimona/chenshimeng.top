import BrowserWindow from './BrowserWindow';

interface ProjectShowcaseProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  techs: string[];
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  browserUrl: string;
  backgroundColor: string;
  accentColor: string;
  reverse?: boolean;
}

export default function ProjectShowcase({
  id,
  title,
  subtitle,
  description,
  techs,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  browserUrl,
  backgroundColor,
  accentColor,
  reverse = false,
}: ProjectShowcaseProps) {
  // 根据accentColor获取对应的颜色类
  const getAccentClasses = () => {
    switch (accentColor) {
      case 'indigo':
        return {
          badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
          blob: 'bg-indigo-200/50 dark:bg-indigo-900/20',
          button: 'bg-indigo-600 hover:bg-indigo-700'
        };
      case 'blue':
        return {
          badge: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
          blob: 'bg-blue-200/50 dark:bg-blue-900/20',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'green':
        return {
          badge: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
          blob: 'bg-green-200/50 dark:bg-green-900/20',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'red':
        return {
          badge: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
          blob: 'bg-red-200/50 dark:bg-red-900/20',
          button: 'bg-red-600 hover:bg-red-700'
        };
      default:
        return {
          badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
          blob: 'bg-indigo-200/50 dark:bg-indigo-900/20',
          button: 'bg-indigo-600 hover:bg-indigo-700'
        };
    }
  };

  const accentClasses = getAccentClasses();

  return (
    <section id={id} className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {id === 'projects' && (
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white mb-12">作品展示</h2>
        )}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          {/* 内容区域 */}
          <div className={`text-left space-y-8 ${reverse ? 'lg:col-span-5 lg:order-last' : 'lg:col-span-6'}`}>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${accentClasses.badge}`}>
              {subtitle}
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight'>
              {title}
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
              {description}
            </p>
            <div className='flex flex-wrap gap-3'>
              {techs.map((tech) => (
                <span key={tech} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex flex-wrap gap-4 pt-4'>
              <a 
                href={buttonLink} 
                target="_blank"
                className={`px-6 py-3 ${accentClasses.button} text-center text-white rounded-full font-medium transition-colors w-full sm:w-auto`}
              >
                {buttonText}
              </a>
            </div>
          </div>
          
          {/* 图片展示区 */}
          <div className={`relative ${reverse ? 'lg:col-span-7 lg:order-first' : 'lg:col-span-6'}`}>
            {/* Background Blob */}
            <div className={`absolute -inset-4 ${accentClasses.blob} rounded-3xl z-0 blur-2xl`}></div>
            
            {/* Browser Window */}
            <BrowserWindow 
              src={imageSrc} 
              alt={imageAlt} 
              url={browserUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}