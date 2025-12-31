'use client'
import Cover from "@/components/Cover";

export default function Docs() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="文档"
        subtitle="这里是文档页面"
        enableTyping={false}
      />
    </div>
  );
}