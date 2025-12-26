import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DocSidebar } from "./DocSidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">px</span>
            </div>
            <span className="font-semibold text-lg">pdfx</span>
            <span className="hidden sm:inline text-muted-foreground text-sm ml-2">Documentation</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <a
              href="https://github.com/yourusername/pdfx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-72 
            border-r border-border bg-card
            transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <DocSidebar onNavigate={() => setSidebarOpen(false)} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container max-w-4xl py-8 px-6 lg:px-12">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
