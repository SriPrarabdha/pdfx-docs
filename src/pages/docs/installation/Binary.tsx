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
          href="https://github.com/SriPrarabdha/pdfx/releases"
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
sudo chmod +x pdfx-linux-amd64

# Move to your prefered location
mv pdfx-linux-amd64 ~/Desktop

# Verify installation
./pdfx-linux-amd64 --help`}
        />
      </DocSection>

      <DocSection title="Windows">
        <p className="mb-4">
          Download the Windows executable and add it to your PATH:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Download <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">pdfx.exe</code> from GitHub Releases</li>
          <li>Move it to a any folder like <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">Desktop\pdfx-windows-amd64.exe</code></li>
          <li>Right-click inside that folder and select <strong>"Open in Terminal" </strong> , then run the command <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">.\pdfx-windows-amd64.exe --help</code></li>
        </ol>
      </DocSection>

      <DocSection title="Verify Dependencies">
        <p className="mb-4">
          After installation, verify dependencies works:
        </p>
        <CodeBlock code=".\pdfx-windows-amd64.exe doctor" />
      </DocSection>
    </DocPage>
  );
}
