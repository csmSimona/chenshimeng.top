'use client'
import Cover from "@/components/Cover";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Cover 
        title="Hi, I'm Simona" 
        subtitle="把这世上唯一版本的自己做好 就够好"
        enableTyping={true}
      />
    </div>
  );
}
