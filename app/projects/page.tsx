import { ProjectCardStack } from "./_components/ProjectCardStack";
import { ProjectsNavigation } from "./_components/ProjectsNavigation";

export default function Projects() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-zinc-50 font-sans dark:bg-black lg:h-screen lg:overflow-hidden">
      <ProjectsNavigation />

      <main className="flex min-h-screen items-center overflow-x-hidden bg-zinc-50 px-3 pb-20 pt-24 dark:bg-gray-950 sm:px-6 sm:pb-24 md:pb-10 lg:h-screen lg:min-h-0 lg:px-8 lg:pt-24">
        <section id="projects" className="mx-auto w-full max-w-7xl">
          <ProjectCardStack />
        </section>
      </main>
    </div>
  );
}
