import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Build() {
  return (
    <DocPage
      title="Build from Source"
      description="Compile pdfx from source code using Go."
    >
      {/* Special Note */}
      <div className="mb-10 rounded-xl border border-amber-300/40 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-4 text-sm text-foreground">
        <p className="font-semibold mb-2">⚠️ Before you build from source</p>
        <p className="text-muted-foreground leading-relaxed">
          Building pdfx from source is intended for developers who want to
          contribute, customize the codebase, or experiment with internal
          changes.
        </p>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          If your goal is simply to <strong>use pdfx as a CLI tool</strong>,
          we strongly recommend downloading the <strong>prebuilt binary </strong>
          from the GitHub releases and getting started immediately—no Go setup
          or build steps required.
        </p>
      </div>

      <DocSection title="Prerequisites">
        <p className="mb-4">
          To build pdfx from source, you need Go 1.21 or later installed on your
          system.
        </p>
        <CodeBlock
          title="Check Go version"
          code="go version"
        />
      </DocSection>

      <DocSection title="Clone and Build">
        <CodeBlock
          code={`# Clone the repository
git clone https://github.com/SriPrarabdha/pdfx.git
cd pdfx

# Build the binary
go build

# Optionally, install to your GOPATH/bin
go install`}
        />
      </DocSection>

      <DocSection title="Verify Build">
        <CodeBlock
          code={`# Check available commands
pdfx --help

# Verify optional dependencies
pdfx doctor`}
        />
      </DocSection>
    </DocPage>
  );
}
