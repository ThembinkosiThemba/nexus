"use client";

import {
  Brain,
  Calculator,
  Code,
  Layout,
  BookOpen,
  GraduationCap,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/custom/Layout";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="grid gap-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Welcome back, Student</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Course Progress</h3>
                    <p className="text-sm text-gray-400">
                      2 of 6 courses completed
                    </p>
                  </div>
                </div>
                <Progress value={33} className="bg-gray-800" />
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Study Streak</h3>
                    <p className="text-sm text-gray-400">5 days in a row</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((day) => (
                    <div
                      key={day}
                      className="h-2 flex-1 rounded-full bg-blue-600"
                      style={{ opacity: 1 - (5 - day) * 0.2 }}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-600/20 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Practice Problems</h3>
                    <p className="text-sm text-gray-400">85% success rate</p>
                  </div>
                </div>
                <Progress value={85} className="bg-gray-800" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/dashboard/courses/dsa"
                className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-600/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                      Data Structures & Algorithms
                    </h3>
                    <p className="text-sm text-gray-400">
                      12 topics • 48 practice problems
                    </p>
                  </div>
                </div>
                <Progress value={65} className="bg-gray-800" />
              </Link>

              <Link
                href="/dashboard/courses/calculus"
                className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-600/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Calculator className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-purple-400 transition-colors">
                      Calculus
                    </h3>
                    <p className="text-sm text-gray-400">
                      8 topics • 32 practice problems
                    </p>
                  </div>
                </div>
                <Progress value={40} className="bg-gray-800" />
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <Button
                variant="outline"
                className="h-auto p-4 bg-gray-900/50 border-gray-800 hover:border-purple-600/50"
              >
                <div className="flex flex-col items-center gap-2">
                  <Brain className="h-6 w-6 text-purple-400" />
                  <span>Ask NEXUS</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 bg-gray-900/50 border-gray-800 hover:border-blue-600/50"
              >
                <div className="flex flex-col items-center gap-2">
                  <Layout className="h-6 w-6 text-blue-400" />
                  <span>Practice Mode</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 bg-gray-900/50 border-gray-800 hover:border-green-600/50"
              >
                <div className="flex flex-col items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-green-400" />
                  <span>Exam Prep</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 bg-gray-900/50 border-gray-800 hover:border-gray-600/50"
              >
                <div className="flex flex-col items-center gap-2">
                  <Settings className="h-6 w-6 text-gray-400" />
                  <span>Settings</span>
                </div>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
