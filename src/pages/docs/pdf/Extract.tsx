import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ExtractPDF() {
  return (
    <DocPage
      title="Extract Pages"
      description="Extract selected pages into a single new PDF file."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 extract <input.pdf> --pages <ranges> -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "--pages",
              description: "Pages to extract",
              required: true,
            },
            {
              name: "-o, --output",
              description: "Output PDF file",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Page Range Syntax">
        <DocTable
          headers={["Syntax", "Meaning"]}
          rows={[
            ["1", "Page 1"],
            ["3-5", "Pages 3, 4, 5 (inclusive)"],
            ["n", "Last page"],
            ["2,4-6", "Pages 2, 4, 5, and 6"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Extract specific pages"
            code="./pdfx-linux-amd64 extract report.pdf --pages 2,4-6 -o excerpt.pdf"
          />
          <CodeBlock
            title="Extract first 5 pages"
            code="./pdfx-linux-amd64 extract book.pdf --pages 1-5 -o preview.pdf"
          />
          <CodeBlock
            title="Extract last 3 pages"
            code="./pdfx-linux-amd64 extract document.pdf --pages n-2,n-1,n -o conclusion.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Difference from Split">
        <p>
          <strong>Extract</strong> creates a single PDF with all selected pages, 
          while <strong>Split</strong> creates separate PDF files for each page.
        </p>
      </DocSection>
    </DocPage>
  );
}
