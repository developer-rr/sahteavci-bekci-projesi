import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.5, ease: "easeOut" as const, delay } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const plans = [
  {
    name: "Ücretsiz",
    price: "₺0",
    period: "/ay",
    sub: "",
    desc: "Temel ihtiyaçla başlamak isteyenler için.",
    features: ["1 marka", "50 tarama / ay", "Temel jargon tespiti", "Topluluk desteği"],
    cta: "Ücretsiz Başla",
    popular: false,
  },
  {
    name: "Başlangıç",
    price: "$49",
    period: "/ay",
    sub: "~₺1.600",
    desc: "İlk düzenli takip akışını kurmak isteyen ekipler için.",
    features: ["5 marka", "500 tarama / ay", "pHash görsel analizi", "Şikayet şablonları", "CSV dışa aktarım", "Email desteği"],
    cta: "Başlangıç Planını Seç",
    popular: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ay",
    sub: "~₺3.200",
    desc: "Daha yoğun tarama ve daha esnek analiz isteyenler için.",
    features: ["Sınırsız marka", "Sınırsız tarama", "BYOK AI", "Gelişmiş görsel analiz", "Blockchain zaman damgası", "Öncelikli destek"],
    cta: "Pro Planını Seç",
    popular: false,
  },
  {
    name: "Uzman",
    price: "$149",
    period: "/ay",
    sub: "~₺4.800",
    desc: "Danışmanlık ve daha özel iş akışları isteyen kullanım senaryoları için.",
    features: ["Tüm PRO özellikleri", "CLIP API entegrasyonu", "Mahkeme paketi", "Özel şablonlar", "Danışmanlık"],
    cta: "Uzman Planını Seç",
    popular: false,
  },
];

const matrixRows = [
  { label: "Marka sayısı", values: ["1", "5", "Sınırsız", "Sınırsız"] },
  { label: "Aylık tarama limiti", values: ["50", "500", "Sınırsız", "Sınırsız"] },
  { label: "Türkçe jargon desteği", values: [true, true, true, true] },
  { label: "Görsel analiz", values: [false, true, true, true] },
  { label: "Şikayet şablonları", values: [false, true, true, true] },
  { label: "CSV dışa aktarım", values: [false, true, true, true] },
  { label: "Öncelikli destek", values: [false, false, true, true] },
  { label: "Danışmanlık", values: [false, false, false, true] },
  { label: "Mahkeme paketi", values: [false, false, false, true] },
];

const recommendations = [
  { profile: "Yeni başlayan küçük marka", plan: "Ücretsiz", desc: "İlk deneyimi yaşamak ve temel tarama ihtiyacını karşılamak için." },
  { profile: "Düzenli tarama yapan operasyon ekibi", plan: "Başlangıç", desc: "Birden fazla markayı takip eden ve düzenli raporlama isteyen ekipler için." },
  { profile: "Yoğun takip ihtiyacı olan marka", plan: "Pro", desc: "Sınırsız tarama, gelişmiş analiz ve öncelikli destek arayanlar için." },
  { profile: "Danışman/uzman destekli yapı", plan: "Uzman", desc: "Müvekkil bazlı takip, mahkeme paketi ve özel şablonlar için." },
];

const faqItems = [
  { q: "İstediğim zaman plan değiştirebilir miyim?", a: "Evet. Planlar arası geçiş mümkün olacak şekilde kurgulanmaktadır. Geçiş koşulları satın alma aşamasında detaylandırılır." },
  { q: "Ücretsiz plan gerçekten ücretsiz mi?", a: "Evet. Ücretsiz plan, temel tarama ve jargon tespiti özelliklerini içerir ve herhangi bir ödeme bilgisi gerektirmez." },
  { q: "Taksitli ödeme var mı?", a: "Taksitli ödeme desteği sunulması hedeflenmektedir. Nihai ödeme seçenekleri satın alma aşamasında gösterilir." },
  { q: "Kurumsal kullanım için özel seçenek sunuluyor mu?", a: "Daha büyük ekipler veya özel ihtiyaçlar için iletişime geçerek uygun bir çözüm değerlendirebilirsiniz." },
  { q: "İade politikasını nerede görebilirim?", a: "İade koşulları hakkında detaylı bilgiye yasal sayfalarımızdan ulaşabilirsiniz." },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">Fiyatlandırma</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              İhtiyacınıza Uygun Planla <span className="text-primary">Başlayın</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">
              SahteAvcı, küçük ve orta ölçekli markaların erişebileceği bir fiyat yapısıyla kurgulanmıştır.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Başla</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/karsilastirma">Karşılaştırmayı Gör</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* PLAN INTRO */}
      <Section>
        <Reveal>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Her ekip aynı ihtiyaca sahip değildir. Kimi yalnızca temel tarama ister, kimi daha fazla marka, görsel analiz veya destek ihtiyacıyla ilerler.
          </p>
        </Reveal>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className={`relative rounded-2xl border p-6 h-full flex flex-col ${
                p.popular
                  ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Pill variant="primary">Popüler</Pill>
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.period}</span>
                </div>
                {p.sub && <span className="text-xs text-muted-foreground mb-3">{p.sub}</span>}
                <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={p.popular ? "cta" : "outline"} className="w-full" asChild>
                  <a href="#">{p.cta}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURE MATRIX */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Özellik Karşılaştırması</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted-foreground"></th>
                  {plans.map((p, i) => (
                    <th key={i} className={`text-center py-3 px-3 font-semibold ${p.popular ? "text-primary" : "text-foreground"}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground font-medium">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="text-center py-3 px-3">
                        {typeof v === "boolean" ? (
                          v ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                        ) : (
                          <span className="text-foreground font-medium">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* DECISION HELP */}
      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">Hangi Plan Kimin İçin?</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">İhtiyacınıza en yakın profili seçerek başlayın.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((r, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <Pill variant="primary" className="mb-3">{r.plan}</Pill>
                <h4 className="font-semibold text-foreground mb-2">{r.profile}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Fiyatlandırma Hakkında Sorular</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Section>

      {/* FOOTNOTE */}
      <Section>
        <Reveal>
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            Tüm ücretli planlar için taksitli ödeme desteği sunulması hedeflenmektedir. Nihai ödeme ve sözleşme koşulları satın alma aşamasında gösterilir.
          </p>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Önce deneyin, sonra ölçeklendirin</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">Ücretsiz plan ile başlayarak iş akışınıza uygunluğu test edebilirsiniz.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Başla</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/ozellikler">Özellikleri Gör</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
