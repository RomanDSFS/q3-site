import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import MotionWrapper from "@/components/MotionWrapper";
import { Project } from "@/types";

export default function ProjectsPage() {
  return (
    <MotionWrapper>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Проекты</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects as Project[]).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
