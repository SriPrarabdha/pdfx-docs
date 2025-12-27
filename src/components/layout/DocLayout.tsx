import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DocSidebar } from "./DocSidebar";
import {
  Menu,
  X,
  Github,
  Sparkles,
  Bug,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-6 gap-2">
          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm">
              <span className="text-white font-extrabold text-sm tracking-tight">
                px
              </span>
            </div>


            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight">
                pdfx
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Developer Documentation
              </span>
            </div>

            {/* Version / Badge */}
            <span className="hidden md:inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3" />
              v0.1.3
            </span>
          </div>

          {/* Right side actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* GitHub button */}
            <a
              href="https://github.com/SriPrarabdha/pdfx/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full",
                "border border-border px-4 py-1.5",
                "text-sm font-semibold",
                "hover:bg-accent hover:text-accent-foreground",
                "transition-all duration-200",
                "shadow-sm hover:shadow"
              )}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            {/* Optional CTA */}
            <Button
              size="sm"
              className="hidden sm:inline-flex font-semibold"
              onClick={() =>
                window.open(
                  "https://github.com/SriPrarabdha/pdfx/",
                  "_blank"
                )
              }
            >
              ⭐ Star
            </Button>

            <a
              href="https://github.com/SriPrarabdha/pdfx/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 rounded-full",
                "border border-border px-4 py-1.5",
                "text-sm font-semibold",
                "text-muted-foreground",
                "hover:bg-accent hover:text-accent-foreground",
                "transition-all duration-200",
                "shadow-sm hover:shadow"
              )}
            >
              <Bug className="h-4 w-4" />
              Report a bug
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
          className={cn(
            "fixed lg:sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-72",
            "border-r border-border bg-card",
            "transition-transform duration-200 ease-in-out",
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          )}
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
