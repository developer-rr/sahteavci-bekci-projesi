import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CookieBanner from "@/components/CookieBanner";

const LEGAL_PREFIX = "/yasal";

export default function Layout() {
  const { pathname } = useLocation();
  const isLegal = pathname.startsWith(LEGAL_PREFIX);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {!isLegal && <StickyCTA />}
      {!isLegal && <ExitIntentPopup />}
      <CookieBanner />
    </div>
  );
}
