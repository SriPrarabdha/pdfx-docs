import { DocPage, DocSection, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Dependencies() {
  return (
    <DocPage
      title="External Dependencies"
      description="pdfx relies on a few external tools for specific operations."
    >
      <DocSection title="Required Dependencies">
        <p className="mb-4">
          The following tools are required for full pdfx functionality:
        </p>
        <DocTable
          headers={["Tool", "Used For", "Required?"]}
          rows={[
            ["Ghostscript", "PDF compression", "Yes, for compress command"],
            ["Pandoc", "Markdown/HTML to PDF conversion", "Yes, for convert command"],
            ["LibreOffice", "Office documents to PDF conversion", "Yes, for convert command"],
          ]}
        />
      </DocSection>

      <DocSection title="Linux Installation">
        <CodeBlock
          title="Ubuntu/Debian"
          code="sudo apt install ghostscript pandoc libreoffice"
        />
        <div className="mt-4">
          <CodeBlock
            title="Fedora"
            code="sudo dnf install ghostscript pandoc libreoffice"
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            title="Arch Linux"
            code="sudo pacman -S ghostscript pandoc libreoffice-fresh"
          />
        </div>
      </DocSection>

      <DocSection title="macOS Installation">
        <CodeBlock
          code={`brew install ghostscript pandoc
brew install --cask libreoffice`}
        />
      </DocSection>

      <DocSection title="Windows Installation">
        <p className="mb-4">
          On Windows, you can use Chocolatey or Scoop:
        </p>
        <CodeBlock
          title="Chocolatey"
          code={`choco install ghostscript pandoc
choco install libreoffice`}
        />
      </DocSection>

      <DocSection title="Verify Installation">
        <p className="mb-4">
          After installing, run the doctor command to verify everything is set up:
        </p>
        <CodeBlock code="pdfx doctor" />
      </DocSection>
    </DocPage>
  );
}
