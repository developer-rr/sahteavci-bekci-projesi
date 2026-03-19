import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.06)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="text-foreground text-sm font-medium hidden sm:block">
          Markanızı korumaya başlayın — <span className="text-muted-foreground">Ücretsiz</span>
        </p>
        <Button variant="cta" size="sm" asChild>
          <a href="#">Şimdi Yükle</a>
        </Button>
      </div>
    </div>
  );
}
