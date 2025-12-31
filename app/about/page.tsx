'use client'
import Cover from "@/components/Cover";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="关于"
        subtitle="这里是关于页面"
        enableTyping={false}
      />
    </div>
  );
}