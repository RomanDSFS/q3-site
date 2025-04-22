import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

export default function HomePage() {
  return (
    <MotionWrapper>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Q3</h1>
        <p className="text-lg text-gray-600 mb-6">
        We create, launch and develop ideas at the intersection of technology and art
        </p>
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            All projects
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Our projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects as Project[]).slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
