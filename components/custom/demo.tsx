import { ArrowRight, Brain, Link, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const Demo = () => {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30 blur-3xl rounded-full bg-gradient-to-tr from-purple-900/20 to-transparent z-0"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Learning Experience
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of students who are already using NEXUS to simplify
              complex concepts and excel in their courses.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-purple-900/20 transition-all transform hover:scale-105"
              asChild
            >
              <Link href="/signup">
                <span className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="gradient-border bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-400" />
                Ask NEXUS
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/80 p-4 rounded-md">
                  <p className="text-sm text-gray-300">
                    Explain the concept of limits in calculus with a simple
                    example.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-md shrink-0 mt-1">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">
                        A limit describes the behavior of a function as its
                        input approaches a specific value. For example, consider
                        f(x) = (x² - 1)/(x - 1) as x approaches 1...
                      </p>
                      <div className="h-2 w-24 bg-gray-700 rounded-full animate-pulse-slow mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask about your course material..."
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Button
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white h-8 w-8 rounded-md"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
