import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface CourseCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  topics: string[];
  href: string;
  color: "blue" | "purple" | "indigo";
}

export function CourseCard({
  icon,
  iconBg,
  title,
  description,
  topics,
  href,
  color,
}: CourseCardProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-600/10",
      border: "border-blue-800/20",
      hover: "hover:border-blue-700/30",
      dot: "bg-blue-400",
      text: "text-blue-400",
      hover_text: "hover:text-blue-300",
    },
    purple: {
      bg: "bg-purple-600/10",
      border: "border-purple-800/20",
      hover: "hover:border-purple-700/30",
      dot: "bg-purple-400",
      text: "text-purple-400",
      hover_text: "hover:text-purple-300",
    },
    indigo: {
      bg: "bg-indigo-600/10",
      border: "border-indigo-800/20",
      hover: "hover:border-indigo-700/30",
      dot: "bg-indigo-400",
      text: "text-indigo-400",
      hover_text: "hover:text-indigo-300",
    },
  };

  const styles = colorMap[color];

  return (
    <div
      className={`${styles.bg} rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] border ${styles.border} ${styles.hover} shadow-lg shadow-gray-950/50 hover:shadow-xl`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`${iconBg} p-2 rounded-md`}>{icon}</div>
          <h3 className="text-xl font-bold font-heading">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="space-y-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <span className={`h-1.5 w-1.5 ${styles.dot} rounded-full`}></span>
              <span>{topic}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={href}
            className={`${styles.text} ${styles.hover_text} text-sm font-medium flex items-center gap-1 group`}
          >
            Explore course{" "}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
