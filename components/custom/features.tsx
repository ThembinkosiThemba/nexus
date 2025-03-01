import { Brain, Sparkles, Code } from "lucide-react";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30 blur-3xl rounded-full bg-gradient-to-bl from-indigo-900/20 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-gray-300">Why Choose NEXUS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The <span className="gradient-text">Smarter</span> Way to Study
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Our platform uses advanced AI to adapt to your learning style and
            help you master complex subjects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-purple-400" />}
            iconBg="bg-purple-600/20"
            title="Deep Understanding"
            description="Our AI doesn't just provide answers; it helps you build a strong conceptual foundation."
          />

          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-blue-400" />}
            iconBg="bg-blue-600/20"
            title="Interactive Learning"
            description="Engage with material through conversational AI that adapts to your learning style."
          />

          <FeatureCard
            icon={<Code className="h-6 w-6 text-indigo-400" />}
            iconBg="bg-indigo-600/20"
            title="Exam Preparation"
            description="Practice with tailored questions and get detailed feedback to ace your exams."
          />
        </div>
      </div>
    </section>
  );
};
export default Features;

export function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg shadow-gray-950/50 group">
      <div
        className={`${iconBg} p-3 rounded-md w-fit mb-4 transition-all duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
