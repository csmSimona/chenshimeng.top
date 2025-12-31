'use client'
import Cover from "@/components/Cover";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="图库"
        subtitle="这里是图库页面"
        enableTyping={false}
      />
    </div>
  );
}