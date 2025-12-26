import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocPageProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function DocPage({ title, description, children, className }: DocPageProps) {
  return (
    <article className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      <header className="mb-8 not-prose">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </header>
      <div className="space-y-6">{children}</div>
    </article>
  );
}

interface DocSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function DocSection({ title, children, className }: DocSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      )}
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

interface DocTableProps {
  headers: string[];
  rows: string[][];
}

export function DocTable({ headers, rows }: DocTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-medium text-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground font-mono text-xs">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface FlagProps {
  name: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
}

export function FlagsList({ flags }: { flags: FlagProps[] }) {
  return (
    <div className="space-y-3">
      {flags.map((flag, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 p-3 rounded-lg bg-muted/30">
          <code className="text-sm font-mono text-primary shrink-0">{flag.name}</code>
          <div className="flex-1">
            <span className="text-sm text-muted-foreground">{flag.description}</span>
            {flag.required && (
              <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-destructive/10 text-destructive">
                required
              </span>
            )}
            {flag.defaultValue && (
              <span className="ml-2 text-xs text-muted-foreground">
                (default: <code className="font-mono">{flag.defaultValue}</code>)
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
