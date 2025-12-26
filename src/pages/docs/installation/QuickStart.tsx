import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function QuickStart() {
  return (
    <DocPage
      title="Quick Start"
      description="Get up and running with pdfx in under 2 minutes."
    >
      <DocSection title="1. Install Dependencies">
        <p className="mb-4">
          pdfx requires a few external tools for certain features. Install them first:
        </p>
        <div className="space-y-4">
          <CodeBlock
            title="Linux (apt)"
            code="sudo apt install ghostscript pandoc libreoffice"
          />
          <CodeBlock
            title="macOS (Homebrew)"
            code={`brew install ghostscript pandoc
brew install --cask libreoffice`}
          />
        </div>
      </DocSection>

      <DocSection title="2. Download pdfx">
        <p className="mb-4">
          Download the latest binary from GitHub Releases and add it to your PATH:
        </p>
        <CodeBlock
          code={`# Download from GitHub Releases
chmod +x pdfx
mv pdfx /usr/local/bin/`}
        />
      </DocSection>

      <DocSection title="3. Verify Installation">
        <p className="mb-4">
          Run the doctor command to verify everything is set up correctly:
        </p>
        <CodeBlock code="pdfx doctor" />
        <p className="mt-4">
          This will check that all external dependencies are available in your PATH.
        </p>
      </DocSection>

      <DocSection title="4. Start Using pdfx">
        <p className="mb-4">Try your first command:</p>
        <CodeBlock code="pdfx merge doc1.pdf doc2.pdf -o combined.pdf" />
      </DocSection>

      <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-medium mb-2">Next Steps</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/pdf/merge"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Learn PDF operations <ArrowRight className="h-3 w-3" />
          </Link>
          <Link
            to="/image/img2pdf"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Explore image operations <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </DocPage>
  );
}
