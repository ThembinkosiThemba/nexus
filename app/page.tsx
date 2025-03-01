import { ArrowRight, Brain, Calculator, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";
import { CourseCard } from "@/components/custom/courses";
import { FeatureCard } from "@/components/custom/features";
import { HeroIllustration } from "@/components/custom/hero";
import { Database, FileText, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow grid-pattern">
        <section className="py-20 md:py-22 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 blur-3xl rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                New
              </span>
              <span className="text-sm text-gray-300">
                Introducing NEXUS for university students
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Learn Like Never Before
            </h1>
            <p
              className="text-xl md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Retrieval Aurgmented Generation (RAG) to simplify your complex
              course material and learning strategies, helping you understand
              deeply and prepare effectively for exams.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white transition-all transform hover:scale-105"
                asChild
              >
                <Link href="/demo">Watch Demo</Link>
              </Button>
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
            </div>

            <div
              className="relative mx-auto max-w-5xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <HeroIllustration />
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-transparent h-32"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Featured Courses</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Master Complex Subjects{" "}
                <span className="gradient-text">Effortlessly</span>
              </h2>
              <p className="text-gray-400 text-center max-w-2xl">
                A curation of university courses which our platform will
                effectively breaks down difficult concepts into
                easy-to-understand explanations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <CourseCard
                icon={<Code className="h-5 w-5 text-blue-400" />}
                iconBg="bg-blue-600/20"
                title="Data Structures & Algorithms"
                description="Master the fundamentals of DSA with interactive explanations and practice problems."
                topics={[
                  "Lists, Queues, Stacks",
                  "Graph Algorithms",
                  "Time & Space Complexity",
                ]}
                href="/courses/dsa"
                color="blue"
              />

              <CourseCard
                icon={<Calculator className="h-5 w-5 text-purple-400" />}
                iconBg="bg-purple-600/20"
                title="Calculus"
                description="Understand calculus concepts with step-by-step explanations and visual aids."
                topics={[
                  "Limits & Continuity",
                  "Differentiation & Integration",
                  "Series & Sequences",
                ]}
                href="/courses/calculus"
                color="purple"
              />
            </div>
          </div>
        </section>

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
                It becomes easier for you to learn and to study if your learning
                is tailored to what you want
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard
                icon={<Brain className="h-6 w-6 text-purple-400" />}
                iconBg="bg-purple-600/20"
                title="Deep Understanding"
                description="Detailed answers which helps you build a strong conceptual foundation."
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

        <section id="technology" className="py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-30 blur-3xl rounded-full bg-gradient-to-tl from-indigo-900/20 to-transparent z-0"></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
                <Database className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Our Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                How We <span className="gradient-text">Extract Knowledge</span>{" "}
                From Your Materials
              </h2>
              <p className="text-gray-400 text-center max-w-2xl">
                Our advanced RAG (Retrieval Augmented Generation) system
                processes course materials to deliver personalized learning
                experiences
              </p>
            </div>

            <div className="relative">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols- gap-8 items-center">
                  <div className="space-y-6">
                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-600/20 p-2 rounded-md shrink-0">
                          <FileText className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">
                            Unstructured Data
                          </h3>
                          <p className="text-sm text-gray-400">
                            We ingest your course materials, lecture notes,
                            textbooks, and more
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600/20 p-2 rounded-md shrink-0">
                          <Layers className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Embedding Model</h3>
                          <p className="text-sm text-gray-400">
                            Content is processed and transformed into semantic
                            vectors
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-600/20 p-2 rounded-md shrink-0">
                          <Database className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Vector Database</h3>
                          <p className="text-sm text-gray-400">
                            Knowledge is stored in a searchable format for quick
                            retrieval
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-600/20 p-2 rounded-md shrink-0">
                          <Code className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Reranker</h3>
                          <p className="text-sm text-gray-400">
                            Intelligent system that finds the most relevant
                            information for your questions
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-600/20 p-2 rounded-md shrink-0">
                          <FileText className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Relevant Files</h3>
                          <p className="text-sm text-gray-400">
                            The system identifies the exact content needed to
                            answer your question
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600/20 p-2 rounded-md shrink-0">
                          <Brain className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">
                            Factual Responses
                          </h3>
                          <p className="text-sm text-gray-400">
                            Our LLM delivers accurate, tailored explanations
                            based on your course materials
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-12 text-center">
                  <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                    This advanced technology allows us to provide accurate,
                    contextual answers to your questions, creating a
                    personalized learning experience that adapts to your
                    specific course materials.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-purple-900/20"
                    asChild
                  >
                    <Link href="/technology">
                      <span className="flex items-center gap-2">
                        Learn More About Our Technology{" "}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900/50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30 blur-3xl rounded-full bg-gradient-to-tr from-purple-900/20 to-transparent z-0"></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    Get Started Today
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transform Your Learning Experience
                </h2>
                <p className="text-gray-400 mb-8">
                  Be one of students to use NEXUS and simplify complex concepts
                  and have a better understanding of what your are learning.
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
                            input approaches a specific value. For example,
                            consider f(x) = (x² - 1)/(x - 1) as x approaches
                            1...
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

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">
                  Trusted by Students
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the Learning Revolution
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Students from top universities around the world use NEXUS to
                enhance their learning experience
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
      </main>

      <Footer />
    </div>
  );
}
