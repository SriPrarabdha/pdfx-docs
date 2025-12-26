import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function DeletePDF() {
  return (
    <DocPage
      title="Delete Pages"
      description="Remove specific pages from a PDF document."
    >
      <DocSection title="Usage">
        <CodeBlock code="pdfx delete <input.pdf> --pages <ranges> -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "--pages",
              description: "Pages to delete (comma-separated ranges)",
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
            ["2-n", "Page 2 through last page"],
            ["1,3-5,n", "Multiple ranges"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Delete a single page"
            code="pdfx delete file.pdf --pages 3 -o out.pdf"
          />
          <CodeBlock
            title="Delete multiple pages"
            code="pdfx delete file.pdf --pages 1,4-6,n -o cleaned.pdf"
          />
          <CodeBlock
            title="Delete first and last page"
            code="pdfx delete document.pdf --pages 1,n -o trimmed.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Important Notes">
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm">
            <strong>Warning:</strong> The range <code className="font-mono bg-muted px-1 rounded">1-n</code> (delete all pages) 
            is not allowed and will result in an error.
          </p>
        </div>
      </DocSection>
    </DocPage>
  );
}
