'use client'
import Cover from "@/components/Cover";

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="项目"
        subtitle="这里是项目页面"
        enableTyping={false}
      />
    </div>
  );
}