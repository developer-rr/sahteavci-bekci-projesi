import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

const STORAGE_KEY = "sahteavci_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { tr } = useLang();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {}
  }, []);

  const respond = (choice: "accepted" | "rejected") => {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)] animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-foreground text-sm flex-1">
          {tr("cookie.text")}{" "}
          <Link to="/yasal/cerezler" className="text-primary underline underline-offset-2 hover:text-primary/80">{tr("cookie.policy")}</Link>{" "}
          {tr("cookie.suffix")}
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => {}} className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">{tr("cookie.settings")}</button>
          <Button variant="outline" size="sm" onClick={() => respond("rejected")}>{tr("cookie.decline")}</Button>
          <Button variant="cta" size="sm" onClick={() => respond("accepted")}>{tr("cookie.accept")}</Button>
        </div>
      </div>
    </div>
  );
}
