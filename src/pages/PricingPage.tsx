import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/lib/i18n";

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

export default function PricingPage() {
  const { tr } = useLang();

  const plans = [
    {
      nameKey: "pricep.plan.free", price: "₺0", period: "/ay", sub: "",
      descKey: "pricep.plan.free.desc",
      features: ["1 marka", "50 tarama / ay", "Temel jargon tespiti", "Topluluk desteği"],
      ctaKey: "pricep.plan.free.cta", popular: false,
    },
    {
      nameKey: "pricep.plan.starter", price: "$49", period: "/ay", sub: "~₺1.600",
      descKey: "pricep.plan.starter.desc",
      features: ["5 marka", "500 tarama / ay", "pHash görsel analizi", "Şikayet şablonları", "CSV dışa aktarım", "Email desteği"],
      ctaKey: "pricep.plan.starter.cta", popular: true,
    },
    {
      nameKey: "pricep.plan.pro", price: "$99", period: "/ay", sub: "~₺3.200",
      descKey: "pricep.plan.pro.desc",
      features: ["Sınırsız marka", "Sınırsız tarama", "BYOK AI", "Gelişmiş görsel analiz", "Blockchain zaman damgası", "Öncelikli destek"],
      ctaKey: "pricep.plan.pro.cta", popular: false,
    },
    {
      nameKey: "pricep.plan.expert", price: "$149", period: "/ay", sub: "~₺4.800",
      descKey: "pricep.plan.expert.desc",
      features: ["Tüm PRO özellikleri", "CLIP API entegrasyonu", "Mahkeme paketi", "Özel şablonlar", "Danışmanlık"],
      ctaKey: "pricep.plan.expert.cta", popular: false,
    },
  ];

  const matrixRows = [
    { key: "pricep.matrix.brands", values: ["1", "5", "Sınırsız", "Sınırsız"] },
    { key: "pricep.matrix.scans", values: ["50", "500", "Sınırsız", "Sınırsız"] },
    { key: "pricep.matrix.jargon", values: [true, true, true, true] },
    { key: "pricep.matrix.visual", values: [false, true, true, true] },
    { key: "pricep.matrix.complaint", values: [false, true, true, true] },
    { key: "pricep.matrix.csv", values: [false, true, true, true] },
    { key: "pricep.matrix.priority", values: [false, false, true, true] },
    { key: "pricep.matrix.consulting", values: [false, false, false, true] },
    { key: "pricep.matrix.court", values: [false, false, false, true] },
  ];

  const recommendations = [
    { profileKey: "pricep.rec1.profile", planKey: "pricep.plan.free", descKey: "pricep.rec1.desc" },
    { profileKey: "pricep.rec2.profile", planKey: "pricep.plan.starter", descKey: "pricep.rec2.desc" },
    { profileKey: "pricep.rec3.profile", planKey: "pricep.plan.pro", descKey: "pricep.rec3.desc" },
    { profileKey: "pricep.rec4.profile", planKey: "pricep.plan.expert", descKey: "pricep.rec4.desc" },
  ];

  const faqItems = [
    { qKey: "pricep.faq1.q", aKey: "pricep.faq1.a" },
    { qKey: "pricep.faq2.q", aKey: "pricep.faq2.a" },
    { qKey: "pricep.faq3.q", aKey: "pricep.faq3.a" },
    { qKey: "pricep.faq4.q", aKey: "pricep.faq4.a" },
    { qKey: "pricep.faq5.q", aKey: "pricep.faq5.a" },
  ];

  return (
    <>
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">{tr("pricep.pill")}</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              {tr("pricep.title.1")}<span className="text-primary">{tr("pricep.title.highlight")}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">{tr("pricep.subtitle")}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.start")}</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/karsilastirma">{tr("pricep.compare")}</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">{tr("pricep.intro")}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className={`relative rounded-2xl border p-6 h-full flex flex-col ${p.popular ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10" : "border-border bg-card"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Pill variant="primary">{tr("price.popular")}</Pill>
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground mb-1">{tr(p.nameKey)}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.period}</span>
                </div>
                {p.sub && <span className="text-xs text-muted-foreground mb-3">{p.sub}</span>}
                <p className="text-sm text-muted-foreground mb-5">{tr(p.descKey)}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={p.popular ? "cta" : "outline"} className="w-full" asChild>
                  <a href="#">{tr(p.ctaKey)}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">{tr("pricep.matrix.title")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted-foreground"></th>
                  {plans.map((p, i) => (
                    <th key={i} className={`text-center py-3 px-3 font-semibold ${p.popular ? "text-primary" : "text-foreground"}`}>{tr(p.nameKey)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground font-medium">{tr(row.key)}</td>
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

      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">{tr("pricep.decision.title")}</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">{tr("pricep.decision.subtitle")}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((r, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <Pill variant="primary" className="mb-3">{tr(r.planKey)}</Pill>
                <h4 className="font-semibold text-foreground mb-2">{tr(r.profileKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(r.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">{tr("pricep.faq.title")}</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4">{tr(f.qKey)}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{tr(f.aKey)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">{tr("pricep.footnote")}</p>
        </Reveal>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("pricep.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">{tr("pricep.cta.text")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.start")}</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/ozellikler">{tr("pricep.cta.features")}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
