import { Idea } from "@/types";

export default function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{idea.title}</h3>
      <div className="text-sm text-gray-600 mt-2">Complexity: {idea.complexity}</div>
      <div className="mt-2 space-x-2">
        {idea.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-400 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
