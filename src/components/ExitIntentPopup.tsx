import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

const STORAGE_KEY = "sahteavci_exit_dismissed";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
  }, []);

  useEffect(() => {
    try { if (sessionStorage.getItem(STORAGE_KEY)) return; } catch {}

    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
        document.removeEventListener("mouseout", handler);
      }
    };
    const t = setTimeout(() => document.addEventListener("mouseout", handler), 3000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", handler);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-card rounded-2xl border border-border shadow-xl max-w-md w-full p-6 md:p-8 z-10">
        <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Bekleyin! Özel Teklif</h2>
        <p className="text-muted-foreground text-sm mb-5">Şimdi abone olun, PRO planında 14 gün ücretsiz deneyin.</p>

        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <Input type="email" placeholder="E-posta adresiniz" value={email} onChange={e => setEmail(e.target.value)} />

          <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer">
            <Checkbox checked={consent} onCheckedChange={v => setConsent(!!v)} className="mt-0.5" />
            <span>KVKK ve iletişim onayını kabul ediyorum</span>
          </label>

          <Button variant="cta" className="w-full" disabled={!email || !consent}>14 Günü Başlat</Button>
        </form>

        <button onClick={dismiss} className="block mx-auto mt-4 text-muted-foreground text-sm hover:text-foreground transition-colors">
          Hayır, teşekkürler
        </button>
      </div>
    </div>
  );
}
