import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="border-b border-gray-800/50 py-4 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md p-1.5 group-hover:shadow-md group-hover:shadow-purple-900/20 transition-all">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight font-heading">
            NEXUS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
          >
            Features
          </Link>
          <Link
            href="#courses"
            className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
          >
            Courses
          </Link>
          <Link
            href="#about"
            className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            asChild
          >
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button
            className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0"
            asChild
          >
            <Link href="/auth/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
