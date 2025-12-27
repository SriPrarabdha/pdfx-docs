import { DocPage, DocSection, FlagsList } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function MergePDF() {
  return (
    <DocPage
      title="Merge PDFs"
      description="Combine multiple PDF files into a single document."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 merge <pdf1> <pdf2> [pdf3 ...] -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "-o, --output",
              description: "Output PDF file",
              defaultValue: "merged.pdf",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Merge two PDFs"
            code="./pdfx-linux-amd64 merge document1.pdf document2.pdf -o combined.pdf"
          />
          <CodeBlock
            title="Merge multiple PDFs"
            code="./pdfx-linux-amd64 merge a.pdf b.pdf c.pdf d.pdf -o all.pdf"
          />
          <CodeBlock
            title="Merge with wildcard (shell expansion)"
            code="./pdfx-linux-amd64 merge chapter_*.pdf -o book.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Notes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>PDFs are merged in the order they are provided</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>All input files must be valid PDF documents</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>The output file will be overwritten if it already exists</span>
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
