import { Brain, Code, Calculator, ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 blur-3xl rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
            New
          </span>
          <span className="text-sm text-gray-300">
            Introducing NEXUS for students
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Learn Like Never Before
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          AI-powered learning that simplifies complex course material, helping
          you understand deeply and prepare effectively for exams.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-purple-900/20 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30"
            asChild
          >
            <Link href="/get-started">
              <span className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white transition-all transform hover:scale-105"
            asChild
          >
            <Link href="/demo">Watch Demo</Link>
          </Button>
        </div>

        <div
          className="relative mx-auto max-w-5xl animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};
export default Hero;

export function HeroIllustration() {
  return (
    <div className="relative bg-gray-900/80 backdrop-blur-sm p-1 rounded-lg shadow-2xl shadow-purple-900/10">
      <div className="bg-gray-950 rounded-md p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-heading">
              Ask anything about your courses
            </h2>
            <p className="text-gray-400 mb-6">
              NEXUS understands your course material and provides clear, concise
              explanations tailored to your learning style.
            </p>
            <div className="gradient-border bg-gray-900/80 rounded-md p-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600/20 p-2 rounded-md">
                  <Brain className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-2">
                    Explain the concept of dynamic programming and when to use
                    it.
                  </p>
                  <div className="h-2 w-24 bg-gray-800 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur-md"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-gray-400">NEXUS AI</div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div
                    className="flex items-start gap-3 animate-float"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="bg-blue-600/20 p-2 rounded-md shrink-0">
                      <Code className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md text-xs text-gray-300">
                      <p> What and how do I implement a binary search tree?</p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 animate-float"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="bg-purple-600/20 p-2 rounded-md shrink-0">
                      <Brain className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-md text-xs text-gray-300">
                      <p>
                        A binary search tree is a data structure where each node
                        has at most two children, with all left descendants less
                        than the node and all right descendants greater.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="bg-indigo-600/20 p-2 rounded-md shrink-0">
                      <Calculator className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md text-xs text-gray-300">
                      <p>What&apos;s the derivative of sin(x²)?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
