import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function SplitPDF() {
  return (
    <DocPage
      title="Split PDF"
      description="Extract pages into separate PDF files."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 split <input.pdf> --pages <ranges>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "--pages",
              description: "Pages to extract as individual files",
              required: true,
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
            ["1,3,5", "Pages 1, 3, and 5"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Split first 3 pages"
            code="./pdfx-linux-amd64 split report.pdf --pages 1-3"
          />
          <p className="text-sm text-muted-foreground">
            Creates: <code className="font-mono bg-muted px-1 rounded">report_page_1.pdf</code>, 
            <code className="font-mono bg-muted px-1 rounded ml-1">report_page_2.pdf</code>, 
            <code className="font-mono bg-muted px-1 rounded ml-1">report_page_3.pdf</code>
          </p>
        </div>
        <div className="space-y-4 mt-6">
          <CodeBlock
            title="Split specific pages"
            code="./pdfx-linux-amd64 split document.pdf --pages 1,5,n"
          />
        </div>
      </DocSection>

      <DocSection title="Output Naming">
        <p>
          Output files are named using the pattern: <code className="font-mono bg-muted px-1 rounded">{`{input}_page_{number}.pdf`}</code>
        </p>
      </DocSection>
    </DocPage>
  );
}
