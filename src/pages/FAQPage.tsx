import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";

const faqs = [
  { q: "SahteAvcı nedir?", a: "SahteAvcı, pazaryerlerinde sahte ürünleri tespit eden bir Chrome eklentisidir." },
  { q: "Hangi pazaryerlerini destekliyorsunuz?", a: "Şu anda Trendyol ve Hepsiburada desteklenmektedir." },
  { q: "Ücretsiz plan ne içerir?", a: "Ücretsiz plan ile günlük 10 ürün kontrolü yapabilirsiniz." },
  { q: "Verilerim güvende mi?", a: "Evet, tüm veriler şifreli olarak saklanmaktadır." },
];

export default function FAQPage() {
  return (
    <>
      <PageHero title="Sıkça Sorulan Sorular" subtitle="SahteAvcı hakkında merak edilenler." />
      <Section variant="alt">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
              <p className="text-muted-foreground text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
