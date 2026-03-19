import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { Shield, Eye, Zap, Lock } from "lucide-react";

const placeholderFeatures = [
  { icon: Shield, title: "Marka Koruması", desc: "Ürünlerinizin sahte kopyalarını otomatik olarak tespit edin." },
  { icon: Eye, title: "Gerçek Zamanlı İzleme", desc: "Pazaryerlerini 7/24 takip edin." },
  { icon: Zap, title: "Hızlı Raporlama", desc: "Tespit edilen ihlalleri tek tıkla raporlayın." },
  { icon: Lock, title: "Güvenli Veri", desc: "Tüm verileriniz şifreli olarak saklanır." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero title="Özellikler" subtitle="SahteAvcı'nın sunduğu tüm özellikler." />
      <Section variant="alt">
        <div className="grid md:grid-cols-2 gap-6">
          {placeholderFeatures.map((f) => (
            <div key={f.title} className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <f.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-8 text-center">Detaylı içerik hazırlanıyor.</p>
      </Section>
    </>
  );
}
