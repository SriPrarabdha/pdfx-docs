import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Image, Shield, Zap, Terminal } from "lucide-react";

export default function Overview() {
  return (
    <DocPage
      title="pdfx Documentation"
      description="A fast, privacy-friendly command-line tool for working with PDFs, images, and documents entirely on your machine."
    >
      {/* Hero Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 mb-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Terminal className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Local-first PDF processing</h2>
            <p className="text-muted-foreground">
              No uploads. No tracking. No shady websites. Just one binary and predictable commands.
            </p>
          </div>
        </div>
      </div>

      <DocSection title="Why pdfx?">
        <p className="mb-4">
          Every time you fill a form or submit documents, you end up needing to merge PDFs, 
          delete or reorder pages, compress files under size limits, or convert images to PDF.
        </p>
        <p className="mb-4">
          The usual solution? Uploading <strong>sensitive documents</strong> (IDs, contracts, resumes) 
          to random websites.
        </p>
        <p>
          <strong>pdfx</strong> is a local alternative to tools like SmallPDF / iLovePDF — 
          but transparent, scriptable, and privacy-first.
        </p>
      </DocSection>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <FeatureCard
          icon={<Shield className="h-5 w-5" />}
          title="100% Private"
          description="All processing happens locally. Your files never leave your machine."
        />
        <FeatureCard
          icon={<Zap className="h-5 w-5" />}
          title="Fast & Scriptable"
          description="Designed for CLI workflows. Automate with shell scripts easily."
        />
        <FeatureCard
          icon={<FileText className="h-5 w-5" />}
          title="PDF Operations"
          description="Merge, split, extract, delete pages, and compress PDFs."
        />
        <FeatureCard
          icon={<Image className="h-5 w-5" />}
          title="Image Operations"
          description="Convert images to PDF, compress, and change formats."
        />
      </div>

      <DocSection title="Quick Example">
        <p className="mb-4">Here's a taste of what you can do with pdfx:</p>
        <div className="space-y-4">
          <CodeBlock
            title="Merge multiple PDFs"
            code="./pdfx-linux-amd64 merge a.pdf b.pdf c.pdf -o merged.pdf"
          />
          <CodeBlock
            title="Delete specific pages"
            code="./pdfx-linux-amd64 delete report.pdf --pages 1,3-5,n -o cleaned.pdf"
          />
          <CodeBlock
            title="Compress a PDF"
            code="./pdfx-linux-amd64 compress large.pdf --level best -o small.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Get Started">
        <p className="mb-4">Ready to start using pdfx? Follow these links:</p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/installation/quick-start"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Installation Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/pdf/merge"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors font-medium"
          >
            PDF Operations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </DocSection>

      <DocSection title="Security & Privacy">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> No internet access required
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> No uploads
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> No data collection or telemetry
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> No background services
          </li>
        </ul>
        <p className="mt-4 font-medium">You own your data. Always.</p>
      </DocSection>
    </DocPage>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
