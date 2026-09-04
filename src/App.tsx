import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ImageSettingsProvider } from "@/contexts/ImageSettingsContext";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import AcademicWork from "./pages/AcademicWork.tsx";
import EducationalApps from "./pages/EducationalApps.tsx";
import StudentPortal from "./pages/StudentPortal.tsx";
import Media from "./pages/Media.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ImageSettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academic-work" element={<AcademicWork />} />
              <Route path="/educational-apps" element={<EducationalApps />} />
              <Route path="/student-portal" element={<StudentPortal />} />
              <Route path="/media" element={<Media />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ImageSettingsProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
