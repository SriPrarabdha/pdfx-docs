import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Doctor() {
  return (
    <DocPage
      title="Doctor Command"
      description="Verify system dependencies and troubleshoot issues."
    >
      <DocSection title="Usage">
        <CodeBlock code="pdfx doctor" />
        <p className="mt-4">
          The doctor command checks if all required external tools are installed and available in your PATH.
        </p>
      </DocSection>

      <DocSection title="What It Checks">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Ghostscript</strong> — Required for PDF compression</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Pandoc</strong> — Required for Markdown/HTML to PDF conversion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>LibreOffice</strong> — Required for Office document conversion</span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Example Output">
        <CodeBlock
          code={`$ pdfx doctor
✓ ghostscript ... found
✓ pandoc ....... found
✓ libreoffice .. found

All dependencies are installed!`}
        />
      </DocSection>

      <DocSection title="Troubleshooting">
        <p className="mb-4">
          If a dependency is missing, install it using your package manager:
        </p>
        <CodeBlock
          title="Linux"
          code="sudo apt install ghostscript pandoc libreoffice"
        />
        <div className="mt-4">
          <CodeBlock
            title="macOS"
            code={`brew install ghostscript pandoc
brew install --cask libreoffice`}
          />
        </div>
      </DocSection>
    </DocPage>
  );
}
