import { DocPage, DocSection, FlagsList } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ConvertImage() {
  return (
    <DocPage
      title="Convert Image Format"
      description="Convert images between different formats."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 img-convert <image> -o <output>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "-o, --output",
              description: "Output image file (format determined by extension)",
              required: true,
            },
          ]}
        />
      </DocSection>

      <DocSection title="Supported Conversions">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Input Formats</h4>
            <div className="flex flex-wrap gap-2">
              {[".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif"].map((ext) => (
                <span key={ext} className="px-2 py-1 text-sm font-mono rounded bg-muted">
                  {ext}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Output Formats</h4>
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
            title="WebP to PNG"
            code="./pdfx-linux-amd64 img-convert image.webp -o image.png"
          />
          <CodeBlock
            title="PNG to JPG"
            code="./pdfx-linux-amd64 img-convert screenshot.png -o screenshot.jpg"
          />
          <CodeBlock
            title="BMP to PNG"
            code="./pdfx-linux-amd64 img-convert legacy.bmp -o modern.png"
          />
        </div>
      </DocSection>

      <DocSection title="Notes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Output format is determined by the file extension</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Converting to JPG will remove transparency (replaced with white)</span>
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
