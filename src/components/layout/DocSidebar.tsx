import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Download, FileText, Image, Terminal, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavSection {
  title: string;
  icon: React.ReactNode;
  items: NavItem[];
}

const navigationSections: NavSection[] = [
  {
    title: "Installation",
    icon: <Download className="h-4 w-4" />,
    items: [
      { title: "Quick Start", href: "/installation/quick-start" },
      { title: "Dependencies", href: "/installation/dependencies" },
      { title: "Binary Download", href: "/installation/binary" },
      { title: "Build from Source", href: "/installation/build" },
      { title: "Doctor Command", href: "/installation/doctor" },
    ],
  },
  {
    title: "PDF Operations",
    icon: <FileText className="h-4 w-4" />,
    items: [
      { title: "Merge PDFs", href: "/pdf/merge" },
      { title: "Delete Pages", href: "/pdf/delete" },
      { title: "Split PDF", href: "/pdf/split" },
      { title: "Extract Pages", href: "/pdf/extract" },
      { title: "Compress PDF", href: "/pdf/compress" },
      { title: "Convert to PDF", href: "/pdf/convert" },
    ],
  },
  {
    title: "Image Operations",
    icon: <Image className="h-4 w-4" />,
    items: [
      { title: "Images to PDF", href: "/image/img2pdf" },
      { title: "Compress Images", href: "/image/compress" },
      { title: "Convert Format", href: "/image/convert" },
    ],
  },
];

interface DocSidebarProps {
  onNavigate?: () => void;
}

export function DocSidebar({ onNavigate }: DocSidebarProps) {
  const location = useLocation();
  
  // Determine which sections should be open based on current path
  const getInitialOpenSections = () => {
    const openSections: Record<string, boolean> = {};
    navigationSections.forEach((section) => {
      const isActive = section.items.some((item) => location.pathname === item.href);
      openSections[section.title] = isActive;
    });
    // Default: open first section if none are active
    if (!Object.values(openSections).some(Boolean)) {
      openSections["Installation"] = true;
    }
    return openSections;
  };

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialOpenSections);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <nav className="h-full overflow-y-auto py-6 px-4">
      <div className="space-y-1">
        <NavLink
          to="/"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )
          }
        >
          <Terminal className="h-4 w-4" />
          Overview
        </NavLink>
      </div>

      <div className="mt-6 space-y-2">
        {navigationSections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <span className="flex items-center gap-3">
                {section.icon}
                {section.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  openSections[section.title] && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                openSections[section.title] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                {section.items.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Privacy Badge */}
      <div className="mt-8 mx-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
        <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <Check className="h-4 w-4" />
          100% Local
        </div>
        <p className="text-xs text-muted-foreground">
          All processing happens on your machine. No uploads, no tracking.
        </p>
      </div>
    </nav>
  );
}
