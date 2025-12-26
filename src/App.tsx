import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocLayout } from "@/components/layout/DocLayout";
import NotFound from "./pages/NotFound";

// Documentation pages
import Overview from "./pages/docs/Overview";
import QuickStart from "./pages/docs/installation/QuickStart";
import Dependencies from "./pages/docs/installation/Dependencies";
import Binary from "./pages/docs/installation/Binary";
import Build from "./pages/docs/installation/Build";
import Doctor from "./pages/docs/installation/Doctor";
import MergePDF from "./pages/docs/pdf/Merge";
import DeletePDF from "./pages/docs/pdf/Delete";
import SplitPDF from "./pages/docs/pdf/Split";
import ExtractPDF from "./pages/docs/pdf/Extract";
import CompressPDF from "./pages/docs/pdf/Compress";
import ConvertPDF from "./pages/docs/pdf/Convert";
import Img2PDF from "./pages/docs/image/Img2PDF";
import CompressImage from "./pages/docs/image/Compress";
import ConvertImage from "./pages/docs/image/Convert";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/pdfx-docs">
        <Routes>
          <Route element={<DocLayout />}>
            <Route path="/" element={<Overview />} />
            {/* Installation */}
            <Route path="/installation/quick-start" element={<QuickStart />} />
            <Route path="/installation/dependencies" element={<Dependencies />} />
            <Route path="/installation/binary" element={<Binary />} />
            <Route path="/installation/build" element={<Build />} />
            <Route path="/installation/doctor" element={<Doctor />} />
            {/* PDF Operations */}
            <Route path="/pdf/merge" element={<MergePDF />} />
            <Route path="/pdf/delete" element={<DeletePDF />} />
            <Route path="/pdf/split" element={<SplitPDF />} />
            <Route path="/pdf/extract" element={<ExtractPDF />} />
            <Route path="/pdf/compress" element={<CompressPDF />} />
            <Route path="/pdf/convert" element={<ConvertPDF />} />
            {/* Image Operations */}
            <Route path="/image/img2pdf" element={<Img2PDF />} />
            <Route path="/image/compress" element={<CompressImage />} />
            <Route path="/image/convert" element={<ConvertImage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
