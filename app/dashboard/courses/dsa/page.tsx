import { ArrowLeft, Brain, Code, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DSACourse() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-800/50 py-4 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Course Materials
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Practice Problems
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow grid-pattern">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="bg-blue-600/20 p-2 rounded-md">
                <Code className="h-5 w-5 text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold font-heading">Data Structures & Algorithms</h1>
            </div>

            <p className="text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Master the fundamentals of DSA with interactive explanations and practice problems.
            </p>

            <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search topics or ask a question..."
                className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-md py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg shadow-blue-900/5"
              />
            </div>

            <div className="space-y-6">
              <div
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg shadow-gray-950/20 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  Topics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                      Arrays & Linked Lists
                    </h3>
                    <p className="text-sm text-gray-400">
                      Fundamental data structures for storing collections of elements
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">Stacks & Queues</h3>
                    <p className="text-sm text-gray-400">LIFO and FIFO data structures and their applications</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">Trees & Graphs</h3>
                    <p className="text-sm text-gray-400">Hierarchical and network data structures</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                      Sorting & Searching
                    </h3>
                    <p className="text-sm text-gray-400">Algorithms for organizing and finding data</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                      Dynamic Programming
                    </h3>
                    <p className="text-sm text-gray-400">
                      Solving complex problems by breaking them down into simpler subproblems
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">Greedy Algorithms</h3>
                    <p className="text-sm text-gray-400">Making locally optimal choices at each stage</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg shadow-gray-950/20 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-400" />
                  Ask NEXUS
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-md">
                    <p className="text-sm text-gray-300 mb-2">What&apos;s the difference between a stack and a queue?</p>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600/20 p-2 rounded-md shrink-0 mt-1">
                        <Brain className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">
                          A stack is a LIFO (Last In, First Out) data structure where elements are added and removed
                          from the same end, like a stack of plates. Common operations include push (add) and pop
                          (remove).
                          <br />
                          <br />A queue is a FIFO (First In, First Out) data structure where elements are added at one
                          end and removed from the other, like people waiting in line. Common operations include enqueue
                          (add) and dequeue (remove).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder="Ask about data structures and algorithms..."
                      className="w-full bg-gray-800/80 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-none"
                    ></textarea>
                    <Button className="absolute right-3 bottom-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0">
                      Ask
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

