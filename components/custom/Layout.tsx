import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  Calculator,
  Code,
  LayoutIcon,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  // Use Next.js's usePathname hook instead of browser's location
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard/dashboard",
      icon: LayoutIcon,
    },
    {
      name: "Ask NEXUS",
      href: "/dashboard/ask",
      icon: Brain,
    },

    {
      name: "Data Structures",
      href: "/dashboard/courses/dsa",
      icon: Code,
    },
    {
      name: "Calculus",
      href: "/dashboard/courses/calculus",
      icon: Calculator,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex h-screen w-64 flex-col fixed inset-y-0">
          <div className="flex flex-col flex-1 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800">
            <div className="flex h-16 items-center gap-2 px-6 border-b border-gray-800">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-xl">NEXUS</span>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="p-3 border-t border-gray-800">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white"
                  >
                    <User className="h-5 w-5" />
                    <span>Student Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
          <div className="flex h-16 items-center gap-4 px-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-xl">NEXUS</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:pl-64">
          <div className="pt-16 lg:pt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
