import { ArrowLeft, Brain, Calculator, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CalculusCourse() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-800/50 py-4 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Course Materials
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Practice Problems
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow grid-pattern">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="bg-purple-600/20 p-2 rounded-md">
                <Calculator className="h-5 w-5 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold font-heading">Calculus</h1>
            </div>

            <p
              className="text-gray-400 mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Understand calculus concepts with step-by-step explanations and
              visual aids.
            </p>

            <div
              className="relative mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search topics or ask a question..."
                className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-md py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg shadow-purple-900/5"
              />
            </div>

            <div className="space-y-6">
              <div
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg shadow-gray-950/20 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-purple-400" />
                  Topics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Limits & Continuity
                    </h3>
                    <p className="text-sm text-gray-400">
                      Understanding the behavior of functions as they approach
                      specific values
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Derivatives
                    </h3>
                    <p className="text-sm text-gray-400">
                      Rates of change and slopes of tangent lines
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Integration
                    </h3>
                    <p className="text-sm text-gray-400">
                      Finding areas and accumulation of quantities
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Applications of Derivatives
                    </h3>
                    <p className="text-sm text-gray-400">
                      Optimization, related rates, and curve sketching
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Series & Sequences
                    </h3>
                    <p className="text-sm text-gray-400">
                      Convergence, divergence, and power series
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer group">
                    <h3 className="font-medium mb-2 group-hover:text-purple-400 transition-colors">
                      Multivariable Calculus
                    </h3>
                    <p className="text-sm text-gray-400">
                      Functions of several variables, partial derivatives, and
                      multiple integrals
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-lg shadow-gray-950/20 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-400" />
                  Ask NEXUS
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-md">
                    <p className="text-sm text-gray-300 mb-2">
                      How do I find the derivative of $$f(x) = x^2 \sin(x)$$?
                    </p>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600/20 p-2 rounded-md shrink-0 mt-1">
                        <Brain className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">
                          To find the derivative of $$f(x) = x^2 \sin(x)$$, we
                          need to use the product rule since we have a product
                          of two functions.
                          <br />
                          <br />
                          The product rule states that if $$f(x) = g(x) \cdot
                          h(x)$$, then $$f&apos;(x) = g&apos;(x) \cdot h(x) + g(x) \cdot
                          h&apos;(x)$$.
                          <br />
                          <br />
                          Let $$g(x) = x^2$$ and $$h(x) = \sin(x)$$
                          <br />
                          Then $$g&apos;(x) = 2x$$ and $$h&apos;(x) = \cos(x)$$
                          <br />
                          <br />
                          Applying the product rule:
                          <br />
                          $$f&apos;(x) = 2x \cdot \sin(x) + x^2 \cdot \cos(x)$$
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder="Ask about calculus concepts..."
                      className="w-full bg-gray-800/80 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-none"
                    ></textarea>
                    <Button className="absolute right-3 bottom-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
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
  );
}
