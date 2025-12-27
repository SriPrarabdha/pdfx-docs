import { DocPage, DocSection, FlagsList } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Img2PDF() {
  return (
    <DocPage
      title="Images to PDF"
      description="Convert one or more images into a PDF document."
    >
      <DocSection title="Usage">
        <CodeBlock code="./pdfx-linux-amd64 img2pdf <image1> <image2> [...] -o <output.pdf>" />
      </DocSection>

      <DocSection title="Flags">
        <FlagsList
          flags={[
            {
              name: "-o, --output",
              description: "Output PDF file",
              defaultValue: "output.pdf",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Supported Formats">
        <div className="flex flex-wrap gap-2">
          {[".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"].map((ext) => (
            <span
              key={ext}
              className="px-2 py-1 text-sm font-mono rounded bg-muted"
            >
              {ext}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection title="Examples">
        <div className="space-y-4">
          <CodeBlock
            title="Convert multiple images"
            code="./pdfx-linux-amd64 img2pdf a.jpg b.png -o images.pdf"
          />
          <CodeBlock
            title="Convert all JPGs in folder"
            code="./pdfx-linux-amd64 img2pdf *.jpg -o album.pdf"
          />
          <CodeBlock
            title="Create photo book"
            code="./pdfx-linux-amd64 img2pdf photo_001.jpg photo_002.jpg photo_003.jpg -o photobook.pdf"
          />
        </div>
      </DocSection>

      <DocSection title="Notes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Images are added to the PDF in the order provided</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Each image becomes a separate page</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Original image dimensions are preserved</span>
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
