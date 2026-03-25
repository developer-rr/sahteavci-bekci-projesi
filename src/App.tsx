import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/lib/i18n";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import FeaturesPage from "@/pages/FeaturesPage";
import PricingPage from "@/pages/PricingPage";
import ComparisonPage from "@/pages/ComparisonPage";
import AboutPage from "@/pages/AboutPage";
import FAQPage from "@/pages/FAQPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/legal/PrivacyPage";
import TermsPage from "@/pages/legal/TermsPage";
import KVKKPage from "@/pages/legal/KVKKPage";
import CookiesPage from "@/pages/legal/CookiesPage";
import RefundPage from "@/pages/legal/RefundPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LangProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ozellikler" element={<FeaturesPage />} />
              <Route path="/fiyatlandirma" element={<PricingPage />} />
              <Route path="/karsilastirma" element={<ComparisonPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/sss" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/yasal/gizlilik" element={<PrivacyPage />} />
              <Route path="/yasal/kosullar" element={<TermsPage />} />
              <Route path="/yasal/kvkk" element={<KVKKPage />} />
              <Route path="/yasal/cerezler" element={<CookiesPage />} />
              <Route path="/yasal/iade" element={<RefundPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LangProvider>
  </QueryClientProvider>
);

export default App;
