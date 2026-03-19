import { Shield, Eye, Search, Lock, BarChart3, Bell, Scale, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";

const homeSections = [
  { id: "problem", title: "Problem" },
  { id: "how-it-works", title: "Nasıl Çalışır" },
  { id: "features", title: "Özellikler" },
  { id: "pricing", title: "Fiyatlar" },
  { id: "testimonials", title: "Referanslar" },
  { id: "faq", title: "SSS" },
  { id: "security", title: "Güvenlik" },
  { id: "newsletter", title: "Bülten" },
  { id: "final-cta", title: "Son CTA" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-32 pb-16">
        <div className="max-w-3xl">
          <Pill variant="primary" className="mb-6">Chrome Eklentisi</Pill>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Pazaryerlerindeki Sahte Ürünleri{" "}
            <span className="text-primary">Saniyeler İçinde</span>{" "}
            Tespit Edin.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Trendyol ve Hepsiburada'da markanızı koruyun. SahteAvcı ile fikri mülkiyet ihlallerini otomatikleştirin, itibarınızı güvence altına alın.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href="#">Ücretsiz Yükle</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">Nasıl Çalışır?</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Placeholder sections */}
      {homeSections.map((s, i) => (
        <Section key={s.id} id={s.id} variant={i % 2 === 0 ? "alt" : "default"}>
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon id={s.id} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
          </div>
          <p className="text-muted-foreground">Bu bölümün içeriği hazırlanıyor.</p>
        </Section>
      ))}
    </>
  );
}

function SectionIcon({ id }: { id: string }) {
  const iconClass = "h-6 w-6 text-primary";
  switch (id) {
    case "problem": return <Eye className={iconClass} />;
    case "how-it-works": return <Search className={iconClass} />;
    case "features": return <Shield className={iconClass} />;
    case "pricing": return <BarChart3 className={iconClass} />;
    case "testimonials": return <FileCheck className={iconClass} />;
    case "faq": return <Scale className={iconClass} />;
    case "security": return <Lock className={iconClass} />;
    case "newsletter": return <Bell className={iconClass} />;
    case "final-cta": return <Shield className={iconClass} />;
    default: return null;
  }
}
