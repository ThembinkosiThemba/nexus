import { Sparkles } from "lucide-react";

const StudentsCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-gray-300">Trusted by Students</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Learning Revolution
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Students from top universities around the world use NEXUS to enhance
            their learning experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-gray-900/50 p-4 rounded-lg h-16 w-full flex items-center justify-center"
            >
              <div className="h-8 w-24 bg-gray-800 rounded-md animate-pulse-slow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsCTA;
