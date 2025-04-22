import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded mt-2 inline-block">
        {project.status}
      </span>
    </div>
  );
}
