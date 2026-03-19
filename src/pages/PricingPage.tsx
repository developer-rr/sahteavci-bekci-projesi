import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  { name: "Ücretsiz", price: "₺0", period: "/ay", features: ["Temel tarama", "Günlük 10 kontrol", "1 pazaryeri"], cta: "Başla", highlight: false },
  { name: "Pro", price: "₺299", period: "/ay", features: ["Sınırsız tarama", "Tüm pazaryerleri", "Otomatik raporlama", "Öncelikli destek"], cta: "Pro'ya Geç", highlight: true },
  { name: "Enterprise", price: "İletişim", period: "", features: ["Özel entegrasyon", "API erişimi", "Dedike hesap yöneticisi", "SLA garantisi"], cta: "İletişime Geç", highlight: false },
];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Fiyatlandırma" subtitle="İhtiyacınıza uygun planı seçin." />
      <Section variant="alt">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div key={t.name} className={`bg-card rounded-lg border p-8 flex flex-col ${t.highlight ? "border-primary shadow-lg ring-1 ring-primary/20" : "border-border"}`}>
              <h3 className="font-bold text-foreground text-xl mb-1">{t.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={t.highlight ? "cta" : "outline"} className="w-full">{t.cta}</Button>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-8 text-center">Fiyatlar ve özellikler değişiklik gösterebilir. Detaylı bilgi için iletişime geçin.</p>
      </Section>
    </>
  );
}
