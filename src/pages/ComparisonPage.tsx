import { Check, X, Minus, Clock, DollarSign, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

type CellValue = "yes" | "no" | "partial" | string;

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes") return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (value === "no") return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-accent mx-auto" />;
  return <span className="text-foreground text-sm font-medium">{value}</span>;
}

export default function ComparisonPage() {
  const { tr } = useLang();

  const compRows: { labelKey: string; manual: CellValue; sahteavci: CellValue; enterprise: CellValue }[] = [
    { labelKey: "comp.row.setup", manual: tr("comp.row.setup.manual"), sahteavci: tr("comp.row.setup.sahteavci"), enterprise: tr("comp.row.setup.enterprise") },
    { labelKey: "comp.row.learning", manual: tr("comp.row.learning.low"), sahteavci: tr("comp.row.learning.low"), enterprise: tr("comp.row.learning.high") },
    { labelKey: "comp.row.cost", manual: "₺0", sahteavci: "₺0 – $149", enterprise: "$1,000+" },
    { labelKey: "comp.row.small", manual: "partial", sahteavci: "yes", enterprise: "no" },
    { labelKey: "comp.row.turkish", manual: "partial", sahteavci: "yes", enterprise: "partial" },
    { labelKey: "comp.row.complaint", manual: "no", sahteavci: "yes", enterprise: "partial" },
    { labelKey: "comp.row.visual", manual: "no", sahteavci: "yes", enterprise: "yes" },
    { labelKey: "comp.row.evidence", manual: "no", sahteavci: "yes", enterprise: "yes" },
    { labelKey: "comp.row.flexibility", manual: "yes", sahteavci: "yes", enterprise: "partial" },
    { labelKey: "comp.row.contract", manual: "yes", sahteavci: "yes", enterprise: "no" },
  ];

  const editorialBlocks = [
    { titleKey: "comp.ed1.title", textKey: "comp.ed1.text" },
    { titleKey: "comp.ed2.title", textKey: "comp.ed2.text" },
    { titleKey: "comp.ed3.title", textKey: "comp.ed3.text" },
  ];

  const scenarios = [
    { icon: <Clock className="w-5 h-5" />, titleKey: "comp.sc1.title", textKey: "comp.sc1.text" },
    { icon: <Layers className="w-5 h-5" />, titleKey: "comp.sc2.title", textKey: "comp.sc2.text" },
    { icon: <Users className="w-5 h-5" />, titleKey: "comp.sc3.title", textKey: "comp.sc3.text" },
    { icon: <DollarSign className="w-5 h-5" />, titleKey: "comp.sc4.title", textKey: "comp.sc4.text" },
  ];

  return (
    <>
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">{tr("comp.pill")}</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              {tr("comp.title.1")}<span className="text-primary">{tr("comp.title.highlight")}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">{tr("comp.subtitle")}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/fiyatlandirma">{tr("comp.prices")}</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">{tr("comp.table.title")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted-foreground"></th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">{tr("comp.table.manual")}</th>
                  <th className="text-center py-3 px-4 font-bold text-primary">SahteAvcı</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">{tr("comp.table.enterprise")}</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground font-medium">{tr(row.labelKey)}</td>
                    <td className="text-center py-3 px-4"><CellContent value={row.manual} /></td>
                    <td className="text-center py-3 px-4 bg-primary/[0.03]"><CellContent value={row.sahteavci} /></td>
                    <td className="text-center py-3 px-4"><CellContent value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {editorialBlocks.map((block, i) => (
        <Section key={i} variant={i % 2 === 0 ? "default" : "alt"}>
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{tr(block.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{tr(block.textKey)}</p>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">{tr("comp.scenarios.title")}</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">{tr("comp.scenarios.subtitle")}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">{s.icon}</div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{tr(s.titleKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(s.textKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">{tr("comp.decision.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: tr("comp.decision.manual"), desc: tr("comp.decision.manual.desc"), highlight: false },
              { label: "SahteAvcı", desc: tr("comp.decision.sahteavci.desc"), highlight: true },
              { label: tr("comp.decision.enterprise"), desc: tr("comp.decision.enterprise.desc"), highlight: false },
            ].map((d, i) => (
              <div key={i} className={`rounded-xl border p-6 text-center ${d.highlight ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10" : "border-border bg-card"}`}>
                <h4 className={`text-lg font-bold mb-2 ${d.highlight ? "text-primary" : "text-muted-foreground"}`}>{d.label}</h4>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("comp.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">{tr("comp.cta.text")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.start")}</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/iletisim">{tr("comp.cta.contact")}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
