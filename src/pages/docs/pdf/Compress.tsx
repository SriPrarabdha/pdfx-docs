import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function CompressPDF() {
  return (
    <DocPage
      title="Compress PDF"
      description="Reduce PDF file size with configurable quality levels."
    >
      <DocSection title="Usage">
        <CodeBlock code="pdfx compress <input.pdf> --level <good|better|best> -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "--level",
              description: "Compression level",
              defaultValue: "better",
            },
            {
              name: "-o, --output",
              description: "Output PDF file",
              defaultValue: "compressed.pdf",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Compression Levels">
        <DocTable
          headers={["Level", "Quality", "File Size"]}
          rows={[
            ["good", "High quality", "Moderate compression"],
            ["better", "Balanced (default)", "Good compression"],
            ["best", "Lower quality", "Smallest file size"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Maximum compression"
            code="pdfx compress large.pdf --level best -o small.pdf"
          />
          <CodeBlock
            title="Balanced compression (default)"
            code="pdfx compress document.pdf -o document_compressed.pdf"
          />
          <CodeBlock
            title="High quality compression"
            code="pdfx compress photos.pdf --level good -o photos_compressed.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Requirements">
        <p>
          This command requires <strong>Ghostscript</strong> to be installed. 
          Run <code className="font-mono bg-muted px-1 rounded">pdfx doctor</code> to verify.
        </p>
      </DocSection>
    </DocPage>
  );
}
