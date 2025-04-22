import IdeaCard from "@/components/IdeaCard";
import ideas from "@/data/ideas.json";
import MotionWrapper from "@/components/MotionWrapper";
import { Idea  } from "@/types";

export default function IdeasPage() {
  return (
    <MotionWrapper>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Идеи для стартапов</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(ideas as Idea[]).map((idea, index) => (
            <IdeaCard key={index} idea={idea} />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
