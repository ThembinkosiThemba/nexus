"use client";

import type React from "react";
import { useState } from "react";
import {
  Brain,
  SendHorizontal,
  Copy,
  RefreshCcw,
  Book,
  Sparkles,
  Calculator,
  Code2,
  FileUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DashboardLayout } from "@/components/custom/Layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
  timestamp: Date;
  context?: {
    course?: string;
    topic?: string;
    type?: string;
  };
}

const courses = [
  { id: "calculus", name: "Calculus", icon: Calculator },
  { id: "dsa", name: "Data Structures & Algorithms", icon: Code2 },
  { id: "physics", name: "Physics", icon: Sparkles },
];

const questionTypes = [
  { id: "explain", name: "Explain Concept", icon: Brain },
  { id: "solve", name: "Solve Problem", icon: Calculator },
  { id: "compare", name: "Compare & Contrast", icon: Code2 },
  { id: "example", name: "Give Example", icon: Sparkles },
];

const initialMessages: Message[] = [
  {
    role: "system",
    content:
      "Hello! I'm NEXUS, your AI learning assistant. I can help you understand complex concepts, solve problems, and prepare for exams. You can ask me anything about your courses, and I'll provide detailed, personalized explanations. Try asking about a specific concept or upload your course materials for more context.",
    timestamp: new Date(),
  },
];

const AskPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedContext, setSelectedContext] = useState<{
    course?: string;
    topic?: string;
    type?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
      context: selectedContext,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      let response = "";

      // Demo response for "who are you"
      if (input.toLowerCase().includes("who are you")) {
        response =
          "I am NEXUS, an advanced AI learning assistant designed to help students master complex subjects. I can explain concepts, solve problems, and provide personalized learning experiences across various subjects like Mathematics, Computer Science, Physics, and more. I use advanced natural language processing and knowledge retrieval systems to provide accurate, contextual answers based on your course materials and learning needs.";
      } else {
        response = `I understand your question about ${input}. Let me help explain that concept based on ${
          selectedContext.course
            ? `your ${selectedContext.course} course`
            : "general knowledge"
        }...`;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date(),
          context: selectedContext,
        },
      ]);
      setIsLoading(false);
    }, 1000);

    setInput("");
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const regenerateResponse = (index: number) => {
    setMessages((prev) => prev.slice(0, index));
    setIsLoading(true);
    // Simulate regenerating response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Here's a different perspective on your question...",
          timestamp: new Date(),
          context: selectedContext,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <TooltipProvider>
      <DashboardLayout>
        <div className="flex flex-col h-[calc(100vh-4rem)] lg:h-screen">
          <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm p-4">
            <div className="max-w-3xl mx-auto flex gap-2 flex-wrap">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-700">
                    <Book className="h-4 w-4 mr-2" />
                    {selectedContext.course || "Select Course"}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {courses.map((course) => (
                    <DropdownMenuItem
                      key={course.id}
                      onClick={() =>
                        setSelectedContext((prev) => ({
                          ...prev,
                          course: course.name,
                        }))
                      }
                    >
                      <course.icon className="h-4 w-4 mr-2" />
                      {course.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-700">
                    <Brain className="h-4 w-4 mr-2" />
                    {selectedContext.type || "Question Type"}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {questionTypes.map((type) => (
                    <DropdownMenuItem
                      key={type.id}
                      onClick={() =>
                        setSelectedContext((prev) => ({
                          ...prev,
                          type: type.name,
                        }))
                      }
                    >
                      <type.icon className="h-4 w-4 mr-2" />
                      {type.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="border-gray-700">
                <FileUp className="h-4 w-4 mr-2" />
                Upload Context
              </Button>

              {Object.values(selectedContext).filter(Boolean).length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedContext({})}
                  className="ml-auto text-gray-400 hover:text-gray-300"
                >
                  Clear Context
                </Button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.length === 1 ? (
                <div className="text-center py-12">
                  <div className="bg-purple-600/20 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    Ask NEXUS Anything
                  </h2>
                  <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Get help with your coursework, ask questions about concepts,
                    or get step-by-step explanations.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                    <Button
                      variant="outline"
                      className="border-gray-700"
                      onClick={() => setInput("Who are you?")}
                    >
                      Who are you?
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700"
                      onClick={() =>
                        setInput(
                          "Can you explain the concept of derivatives in calculus?"
                        )
                      }
                    >
                      Explain derivatives
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700"
                      onClick={() =>
                        setInput("What's the difference between BFS and DFS?")
                      }
                    >
                      Compare BFS & DFS
                    </Button>
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${
                      message.role === "assistant" || message.role === "system"
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    {(message.role === "assistant" ||
                      message.role === "system") && (
                      <div className="bg-purple-600/20 p-2 rounded-lg h-fit">
                        <Brain className="h-5 w-5 text-purple-400" />
                      </div>
                    )}
                    <div className="flex flex-col gap-2 max-w-[80%]">
                      <div
                        className={`rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-purple-600 text-white ml-auto"
                            : "bg-gray-900/50 border border-gray-800"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>

                      <div
                        className={`flex gap-2 text-xs text-gray-400 ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        {message.context &&
                          Object.values(message.context).filter(Boolean)
                            .length > 0 && (
                            <span className="flex gap-1">
                              {message.context.course && (
                                <Badge
                                  variant="outline"
                                  className="h-5 text-xs"
                                >
                                  {message.context.course}
                                </Badge>
                              )}
                              {message.context.type && (
                                <Badge
                                  variant="outline"
                                  className="h-5 text-xs"
                                >
                                  {message.context.type}
                                </Badge>
                              )}
                            </span>
                          )}
                        {(message.role === "assistant" ||
                          message.role === "system") && (
                          <div className="flex gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-5 w-5 text-gray-400 hover:text-gray-300"
                                  onClick={() =>
                                    copyToClipboard(message.content)
                                  }
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Copy to clipboard</TooltipContent>
                            </Tooltip>

                            {message.role === "assistant" && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-5 w-5 text-gray-400 hover:text-gray-300"
                                    onClick={() => regenerateResponse(index)}
                                  >
                                    <RefreshCcw className="h-3 w-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Regenerate response
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="bg-purple-600/20 p-2 rounded-lg h-fit">
                    <Brain className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 max-w-[80%]">
                    <div className="flex gap-2">
                      <div
                        className="h-2 w-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="h-2 w-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="h-2 w-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm p-4">
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto flex gap-4"
            >
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about any concept..."
                className="min-h-[60px] bg-gray-800/50 border-gray-700 resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                className="h-[60px] w-[60px] bg-purple-600 hover:bg-purple-700"
                disabled={isLoading}
              >
                <SendHorizontal className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </TooltipProvider>
  );
};

export default AskPage;
