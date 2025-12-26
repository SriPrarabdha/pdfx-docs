import { DocPage, DocSection } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Binary() {
  return (
    <DocPage
      title="Binary Download"
      description="Download pre-built binaries for your operating system."
    >
      <DocSection title="Download Latest Release">
        <p className="mb-4">
          The easiest way to install pdfx is to download the pre-built binary from GitHub Releases.
        </p>
        <a
          href="https://github.com/yourusername/pdfx/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors mb-6"
        >
          View Releases on GitHub
        </a>
      </DocSection>

      <DocSection title="Linux / macOS">
        <CodeBlock
          code={`# Download the binary for your platform
# Make it executable
chmod +x pdfx

# Move to a directory in your PATH
sudo mv pdfx /usr/local/bin/

# Verify installation
pdfx --help`}
        />
      </DocSection>

      <DocSection title="Windows">
        <p className="mb-4">
          Download the Windows executable and add it to your PATH:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Download <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">pdfx.exe</code> from GitHub Releases</li>
          <li>Move it to a folder like <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">C:\Program Files\pdfx</code></li>
          <li>Add that folder to your system PATH</li>
          <li>Open a new terminal and run <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">pdfx --help</code></li>
        </ol>
      </DocSection>

      <DocSection title="Verify Installation">
        <p className="mb-4">
          After installation, verify everything works:
        </p>
        <CodeBlock code="pdfx doctor" />
      </DocSection>
    </DocPage>
  );
}
