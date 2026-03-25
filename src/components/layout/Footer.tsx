import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { tr } = useLang();

  const productLinks = [
    { key: "footer.features", path: "/ozellikler" },
    { key: "footer.pricing", path: "/fiyatlandirma" },
    { key: "footer.compare", path: "/karsilastirma" },
    { key: "footer.faq", path: "/sss" },
  ];

  const companyLinks = [
    { key: "footer.about", path: "/hakkimizda" },
    { key: "footer.blog", path: "/blog" },
    { key: "footer.contact", path: "/iletisim" },
  ];

  const legalLinks = [
    { key: "footer.privacy", path: "/yasal/gizlilik" },
    { key: "footer.terms", path: "/yasal/kosullar" },
    { key: "footer.kvkk", path: "/yasal/kvkk" },
    { key: "footer.cookies", path: "/yasal/cerezler" },
    { key: "footer.refund", path: "/yasal/iade" },
  ];

  const securityBadges = [
    { icon: "🔐", key: "footer.encrypted" },
    { icon: "🇪🇺", key: "footer.european" },
    { icon: "📋", key: "footer.kvkk_badge" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <Shield className="h-5 w-5 text-primary" />
              SahteAvcı
            </div>
            <p className="text-sm text-slate-400 mb-4">{tr("footer.slogan")}</p>
            <div className="flex gap-3">
              <a href="#" aria-label="X / Twitter" className="text-slate-400 hover:text-white transition-colors text-sm">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors text-sm">in</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{tr("footer.product")}</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{tr(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{tr("footer.company")}</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{tr(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{tr("footer.legal")}</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{tr(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{tr("footer.security")}</h4>
            <ul className="space-y-3">
              {securityBadges.map((b) => (
                <li key={b.key} className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{b.icon}</span>
                  <span>{tr(b.key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>{tr("footer.kvkk_line")}</span>
          <span>© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA</span>
        </div>
      </div>
    </footer>
  );
}
