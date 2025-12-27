import { DocPage, DocSection, FlagsList, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function CompressImage() {
  return (
    <DocPage
      title="Compress Images"
      description="Reduce image file size with configurable quality levels."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 img-compress <image> --level <good|better|best> -o <output>" />
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
              description: "Output image file",
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

      <DocSection title="Supported Formats">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Input</h4>
            <div className="flex flex-wrap gap-2">
              {[".jpg", ".jpeg", ".png", ".webp"].map((ext) => (
                <span key={ext} className="px-2 py-1 text-sm font-mono rounded bg-muted">
                  {ext}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Output</h4>
            <div className="flex flex-wrap gap-2">
              {[".jpg", ".png"].map((ext) => (
                <span key={ext} className="px-2 py-1 text-sm font-mono rounded bg-muted">
                  {ext}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Maximum compression"
            code="./pdfx-linux-amd64 img-compress photo.jpg --level best -o photo_small.jpg"
          />
          <CodeBlock
            title="Balanced compression"
            code="./pdfx-linux-amd64 img-compress screenshot.png -o screenshot_compressed.png"
          />
        </div>
      </DocSection>
    </DocPage>
  );
}
