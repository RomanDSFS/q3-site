import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";

export default function HomePage() {
  return (
    <MotionWrapper>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Q3 </h1>
        <p className="text-lg text-gray-600 mb-8">
        We create, launch and develop ideas at the intersection of technology and the marketplace.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View projects
        </Link>
      </div>
    </MotionWrapper>
  );
}
