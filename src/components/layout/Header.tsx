import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Özellikler", path: "/ozellikler" },
  { label: "Fiyatlar", path: "/fiyatlandirma" },
  { label: "Karşılaştırma", path: "/karsilastirma" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "SSS", path: "/sss" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-card/80 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-[72px] px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-foreground font-bold text-xl tracking-tight">
          <Shield className="h-6 w-6 text-primary" />
          SahteAvcı
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button variant="cta" size="default" asChild>
            <a href="#">Ücretsiz Yükle</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileOpen(false)} />
          <nav className="absolute right-0 top-0 h-full w-72 bg-card shadow-xl p-6 flex flex-col gap-2 animate-in slide-in-from-right">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button variant="cta" className="w-full" asChild>
                <a href="#">Ücretsiz Yükle</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
