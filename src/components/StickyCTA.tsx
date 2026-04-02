import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { tr } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-background shadow-[0_2px_8px_rgba(0,0,0,0.08)] animate-fade-in hidden md:block">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <p className="text-foreground text-sm font-medium">
          {tr("sticky.text")} — <span className="text-muted-foreground">{tr("sticky.free")}</span>
        </p>
        <Button variant="cta" size="sm" asChild>
          <a href="https://chromewebstore.google.com/detail/sahteavc%C4%B1-%E2%80%94-marka-koruma/kbpadejggjidclkppdinhhhpccdmpppf" target="_blank" rel="noopener noreferrer">{tr("sticky.btn")}</a>
        </Button>
      </div>
    </div>
  );
}
