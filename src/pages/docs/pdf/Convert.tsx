import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ConvertPDF() {
  return (
    <DocPage
      title="Convert to PDF"
      description="Convert documents and text files to PDF format."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 convert <input.file> -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "-o, --output",
              description: "Output PDF file",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Supported Formats">
        <DocTable
          headers={["Format", "Extension", "Converter"]}
          rows={[
            ["Plain text", ".txt", "Pandoc"],
            ["Markdown", ".md", "Pandoc"],
            ["HTML", ".html", "Pandoc"],
            ["Word Document", ".docx", "LibreOffice"],
            ["PowerPoint", ".pptx", "LibreOffice"],
            ["Excel", ".xlsx", "LibreOffice"],
            ["OpenDocument", ".odt", "LibreOffice"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Convert Word document"
            code="./pdfx-linux-amd64 convert resume.docx -o resume.pdf"
          />
          <CodeBlock
            title="Convert Markdown file"
            code="./pdfx-linux-amd64 convert notes.md -o notes.pdf"
          />
          <CodeBlock
            title="Convert PowerPoint presentation"
            code="./pdfx-linux-amd64 convert slides.pptx -o slides.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Requirements">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Pandoc</strong> — for text, Markdown, and HTML files</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>LibreOffice</strong> — for Office documents</span>
          </li>
        </ul>
        <p className="mt-4">
          Run <code className="font-mono bg-muted px-1 rounded">./pdfx-linux-amd64 doctor</code> to verify these are installed.
        </p>
      </DocSection>
    </DocPage>
  );
}
