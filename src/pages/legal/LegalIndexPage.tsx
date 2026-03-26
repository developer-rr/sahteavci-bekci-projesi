import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft, FileText } from "lucide-react";

const links = [
  { to: "/yasal/gizlilik", tr: "Gizlilik Politikası", en: "Privacy Policy" },
  { to: "/yasal/kosullar", tr: "Kullanım Koşulları", en: "Terms of Service" },
  { to: "/yasal/kvkk", tr: "KVKK Aydınlatma Metni", en: "KVKK Data Subject Rights Notice" },
  { to: "/yasal/cerezler", tr: "Çerez Politikası", en: "Cookie Policy" },
  { to: "/yasal/iade", tr: "İade Politikası", en: "Refund Policy" },
];

export default function LegalIndexPage() {
  const { lang } = useLang();
  const isTR = lang === "tr";

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {isTR ? "Geri" : "Back"}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          {isTR ? "Yasal Belgeler" : "Legal Documents"}
        </h1>

        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors group"
              >
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {isTR ? link.tr : link.en}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
