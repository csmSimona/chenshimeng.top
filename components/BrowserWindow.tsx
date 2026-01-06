import React from 'react';

interface BrowserWindowProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ 
  src, 
  alt, 
  url = 'example.com',
  className = '' 
}) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Mac-style window header */}
      <div className='h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2'>
        <div className='w-3 h-3 rounded-full bg-red-400'></div>
        <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
        <div className='w-3 h-3 rounded-full bg-green-400'></div>
        <div className='ml-4 text-sm text-gray-500 dark:text-gray-400'>{url}</div>
      </div>
      
      {/* Browser Content */}
      <div className='relative h-auto overflow-hidden bg-white dark:bg-gray-900 group pt-1'>
        <img 
          src={src} 
          alt={alt} 
          className="w-full object-top transition-transform duration-800 group-hover:scale-[1.03]"
        />
        {/* Inner Shadow */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"></div>
      </div>
    </div>
  );
};

export default BrowserWindow;
