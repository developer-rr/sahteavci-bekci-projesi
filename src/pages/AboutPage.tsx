import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { Shield, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHero title="Hakkımızda" subtitle="SahteAvcı'nın arkasındaki ekip ve misyon." />
      <Section variant="alt">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Misyonumuz", desc: "Markaları dijital sahtekarlıktan korumak." },
            { icon: Target, title: "Vizyonumuz", desc: "Türkiye'nin en güvenilir marka koruma platformu olmak." },
            { icon: Users, title: "Ekibimiz", desc: "Deneyimli mühendisler ve hukuk uzmanlarından oluşan bir ekip." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-10 text-center">Detaylı içerik hazırlanıyor.</p>
      </Section>
    </>
  );
}
