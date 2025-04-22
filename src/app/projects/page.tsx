"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import MotionWrapper from "@/components/MotionWrapper";
import { Project } from "@/types";

const statuses = ["all", "idea", "in-progress", "launched", "acquired"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p: Project) => p.status === filter);

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Projects Q3</h1>
        <div className="flex gap-2 mb-6 flex-wrap">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded border ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {status === "all" ? "All" : status}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
