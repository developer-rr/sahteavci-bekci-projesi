import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const productLinks = [
  { label: "Özellikler", path: "/ozellikler" },
  { label: "Fiyatlar", path: "/fiyatlandirma" },
  { label: "Karşılaştırma", path: "/karsilastirma" },
  { label: "SSS", path: "/sss" },
];

const companyLinks = [
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Blog", path: "/blog" },
  { label: "İletişim", path: "/iletisim" },
];

const legalLinks = [
  { label: "Gizlilik Politikası", path: "/yasal/gizlilik" },
  { label: "Kullanım Koşulları", path: "/yasal/kosullar" },
  { label: "KVKK", path: "/yasal/kvkk" },
  { label: "Çerez Politikası", path: "/yasal/cerezler" },
  { label: "İade Politikası", path: "/yasal/iade" },
];

const securityBadges = [
  { icon: "🔐", label: "Şifreli veriler" },
  { icon: "🇪🇺", label: "Avrupa şirketi" },
  { icon: "📋", label: "KVKK uyumlu" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <Shield className="h-5 w-5 text-primary" />
              SahteAvcı
            </div>
            <p className="text-sm text-slate-400 mb-4">Markanızın Dijital Bekçisi</p>
            <div className="flex gap-3">
              <a href="#" aria-label="X / Twitter" className="text-slate-400 hover:text-white transition-colors text-sm">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors text-sm">in</a>
            </div>
          </div>

          {/* Ürün */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Ürün</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Şirket</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Yasal</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Güvenlik */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Güvenlik</h4>
            <ul className="space-y-3">
              {securityBadges.map((b) => (
                <li key={b.label} className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{b.icon}</span>
                  <span>{b.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>🇹🇷 KVKK haklarınızı kullanmak için: destek@sahteavci.com</span>
          <span>© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA</span>
        </div>
      </div>
    </footer>
  );
}
