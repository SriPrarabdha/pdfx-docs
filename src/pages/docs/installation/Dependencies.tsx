// import { DocPage, DocSection, DocTable } from "@/components/docs/DocPage";
// import { CodeBlock } from "@/components/docs/CodeBlock";

// export default function Dependencies() {
//   return (
//     <DocPage
//       title="External Dependencies"
//       description="pdfx relies on a few external tools for specific operations."
//     >
//       <DocSection title="Required Dependencies">
//         <p className="mb-4">
//           The following tools are required for full pdfx functionality:
//         </p>
//         <DocTable
//           headers={["Tool", "Used For", "Required?"]}
//           rows={[
//             ["Ghostscript", "PDF compression", "Yes, for compress command"],
//             ["Pandoc", "Markdown/HTML to PDF conversion", "Yes, for convert command"],
//             ["LibreOffice", "Office documents to PDF conversion", "Yes, for convert command"],
//           ]}
//         />
//       </DocSection>

//       <DocSection title="Linux Installation">
//         <CodeBlock
//           title="Ubuntu/Debian"
//           code="sudo apt install ghostscript pandoc libreoffice"
//         />
//         <div className="mt-4">
//           <CodeBlock
//             title="Fedora"
//             code="sudo dnf install ghostscript pandoc libreoffice"
//           />
//         </div>
//         <div className="mt-4">
//           <CodeBlock
//             title="Arch Linux"
//             code="sudo pacman -S ghostscript pandoc libreoffice-fresh"
//           />
//         </div>
//       </DocSection>

//       <DocSection title="macOS Installation">
//         <CodeBlock
//           code={`brew install ghostscript pandoc
// brew install --cask libreoffice`}
//         />
//       </DocSection>

//       <DocSection title="Windows Installation">
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-3">Option 1: Package Manager (Recommended)</h3>
//           <p className="mb-4">
//             Using Chocolatey or Scoop:
//           </p>
//           <CodeBlock
//             title="Chocolatey"
//             code={`choco install ghostscript pandoc
// choco install libreoffice`}
//           />
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-3">Option 2: Manual Installation</h3>
          
//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">1. Install LibreOffice (for DOCX, PPT to PDF)</h4>
//             <ul className="list-disc list-inside space-y-2 mb-3">
//               <li>Download from: <a href="https://www.libreoffice.org/donate/dl/win-x86_64/25.8.4/en-US/LibreOffice_25.8.4_Win_x86-64.msi" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LibreOffice 25.8.4</a></li>
//               <li>Double-click the .msi file to install</li>
//               <li>Add <code className="bg-gray-100 px-2 py-1 rounded">C:\Program Files\LibreOffice\program</code> to system PATH</li>
//               <li>Verify: <code className="bg-gray-100 px-2 py-1 rounded">soffice --version</code></li>
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">2. Install Pandoc (for TXT, MD to PDF)</h4>
//             <ul className="list-disc list-inside space-y-2 mb-3">
//               <li>Download from: <a href="https://github.com/jgm/pandoc/releases/tag/3.8.3" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pandoc 3.8.3</a></li>
//               <li>Double-click the installer to install</li>
//               <li>Verify: <code className="bg-gray-100 px-2 py-1 rounded">pandoc --version</code></li>
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">3. Install MiKTeX (required for Pandoc PDF conversion)</h4>
//             <ul className="list-disc list-inside space-y-2 mb-3">
//               <li>Download from: <a href="https://miktex.org/download" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MiKTeX</a></li>
//               <li>Install and update packages using MiKTeX Console</li>
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">4. Install Ghostscript (for PDF compression)</h4>
//             <ul className="list-disc list-inside space-y-2 mb-3">
//               <li>Download from: <a href="https://github.com/ArtifexSoftware/ghostpdl-downloads/releases" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ghostscript Releases</a></li>
//               <li>Install the downloaded file</li>
//               <li>Add <code className="bg-gray-100 px-2 py-1 rounded">C:\Program Files\gs\gs10.06.0\bin</code> to system PATH</li>
//             </ul>
//           </div>
//         </div>
//       </DocSection>
//     </DocPage>
//   );
// }

import { DocPage, DocSection, DocTable } from "@/components/docs/DocPage";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Dependencies() {
  return (
    <DocPage
      title="External Dependencies"
      description="pdfx relies on a few external tools for specific, optional operations."
    >
      {/* Special Note */}
      <div className="mb-10 rounded-xl border border-amber-300/40 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-4 text-sm text-foreground">
        <p className="font-semibold mb-2">⚠️ Important Note</p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>pdfx works perfectly even without installing any of the dependencies listed below . </strong>
           Core PDF operations such as merging, splitting, deleting pages, and image conversion / compression 
          do <em>not</em> require external tools.
        </p>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          External dependencies are only needed for <strong>DOCX / PPTX to PDF conversion</strong>,
          <strong>Markdown / HTML to PDF conversion</strong>, and <strong>PDF compression</strong>.
        </p>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          On <strong>Linux</strong> and <strong>macOS</strong>, installing all dependencies in one step is usually
          straightforward and recommended. On <strong>Windows</strong>, you may prefer a manual setup and install
          only the tools required for the features you plan to use.
        </p>
      </div>

      <DocSection title="Required Dependencies">
        <p className="mb-4">
          The following tools are required only for specific features:
        </p>
        <DocTable
          headers={["Tool", "Used For", "Required?"]}
          rows={[
            ["Ghostscript", "PDF compression", "Optional (only for compress command)"],
            ["Pandoc", "Markdown / HTML to PDF conversion", "Optional (only for convert command)"],
            ["LibreOffice", "DOCX / PPTX to PDF conversion", "Optional (only for convert command)"],
          ]}
        />
      </DocSection>

      <DocSection title="Linux Installation">
        <p className="mb-4 text-muted-foreground">
          On Linux, installing all dependencies together is usually the easiest approach.
        </p>
        <CodeBlock
          title="Ubuntu / Debian"
          code="sudo apt install ghostscript pandoc libreoffice"
        />
        <div className="mt-4">
          <CodeBlock
            title="Fedora"
            code="sudo dnf install ghostscript pandoc libreoffice"
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            title="Arch Linux"
            code="sudo pacman -S ghostscript pandoc libreoffice-fresh"
          />
        </div>
      </DocSection>

      <DocSection title="macOS Installation">
        <p className="mb-4 text-muted-foreground">
          Homebrew makes dependency management simple on macOS.
        </p>
        <CodeBlock
          code={`brew install ghostscript pandoc
brew install --cask libreoffice`}
        />
      </DocSection>

      <DocSection title="Windows Installation">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Option 1: Package Manager
          </h3>
          <p className="mb-4 text-muted-foreground">
            If you use a Windows package manager, this is the quickest way to get started.
          </p>
          <CodeBlock
            title="Chocolatey"
            code={`choco install ghostscript pandoc
choco install libreoffice`}
          />
        </div>

          <h3 className="text-lg font-semibold mb-2">
            Option 2: Manual Installation (Recommended)
          </h3>
          <p className="mb-6 text-muted-foreground">
            Manual installation allows you to install only the dependencies required for the
            features you intend to use.
          </p>
        <div className="rounded-xl border border-border bg-card p-6">

          {/* Step 4 */}
          <div className="mb-6 rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">
              1. Ghostscript (PDF Compression)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Download from{" "}
                <a
                  href="https://github.com/ArtifexSoftware/ghostpdl-downloads/releases"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ghostscript Releases
                </a>
              </li>
              <li>Run the installer</li>
              <li>
                Add{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  C:\Program Files\gs\gs10.06.0\bin
                </code>{" "}
                to PATH
              </li>
            </ul>
          </div>

          {/* Step 1 */}
          <div className="mb-6 rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">
              2. LibreOffice (DOCX / PPTX → PDF)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Download from{" "}
                <a
                  href="https://www.libreoffice.org/donate/dl/win-x86_64/25.8.4/en-US/LibreOffice_25.8.4_Win_x86-64.msi"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LibreOffice 25.8.4
                </a>
              </li>
              <li>Run the installer</li>
              <li>
                Add{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  C:\Program Files\LibreOffice\program
                </code>{" "}
                to PATH
              </li>
              <li>
                Verify with{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  soffice --version
                </code>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-6 rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">
              3. Pandoc (Markdown / Text → PDF)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Download from{" "}
                <a
                  href="https://github.com/jgm/pandoc/releases/tag/3.8.3"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pandoc 3.8.3
                </a>
              </li>
              <li>Run the installer</li>
              <li>
                Verify with{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  pandoc --version
                </code>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="mb-6 rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">
              4. MiKTeX (Required for Pandoc PDF output)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Download from{" "}
                <a
                  href="https://miktex.org/download"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MiKTeX
                </a>
              </li>
              <li>Install and update packages using MiKTeX Console</li>
            </ul>
          </div>

          
        </div>
      </DocSection>
    </DocPage>
  );
}
