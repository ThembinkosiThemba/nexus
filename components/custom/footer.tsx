import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md p-1.5">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight font-heading">
              NEXUS
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <nav className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500/50"
              >
                Help
              </Link>
            </nav>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NEXUS Learning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
