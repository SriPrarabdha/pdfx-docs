import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Build() {
  return (
    <DocPage
      title="Build from Source"
      description="Compile pdfx from source code using Go."
    >
      <DocSection title="Prerequisites">
        <p className="mb-4">
          You need Go 1.21 or later installed on your system.
        </p>
        <CodeBlock
          title="Check Go version"
          code="go version"
        />
      </DocSection>

      <DocSection title="Clone and Build">
        <CodeBlock
          code={`# Clone the repository
git clone https://github.com/yourusername/pdfx
cd pdfx

# Build the binary
go build

# Optionally, install to your GOPATH/bin
go install`}
        />
      </DocSection>

      <DocSection title="Install to PATH">
        <p className="mb-4">
          After building, move the binary to a directory in your PATH:
        </p>
        <CodeBlock code="sudo mv pdfx /usr/local/bin/" />
      </DocSection>

      <DocSection title="Verify Build">
        <CodeBlock
          code={`# Check version
pdfx --help

# Verify dependencies
pdfx doctor`}
        />
      </DocSection>
    </DocPage>
  );
}
