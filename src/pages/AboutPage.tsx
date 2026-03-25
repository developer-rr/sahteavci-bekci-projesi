import { Shield, Users, Briefcase, Scale, Heart, Lightbulb, Lock, Eye, Building2, Mail, Globe, MapPin } from "lucide-react";
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

export default function AboutPage() {
  const { tr } = useLang();

  const audiences = [
    { icon: Briefcase, titleKey: "about.aud1.title", descKey: "about.aud1.desc" },
    { icon: Users, titleKey: "about.aud2.title", descKey: "about.aud2.desc" },
    { icon: Shield, titleKey: "about.aud3.title", descKey: "about.aud3.desc" },
    { icon: Scale, titleKey: "about.aud4.title", descKey: "about.aud4.desc" },
  ];

  const companyInfo = [
    { icon: Building2, labelKey: "about.company.label1", value: "VENTOS ARQUEÁVEIS UNIPESSOAL LDA" },
    { icon: Mail, labelKey: "about.company.label2", value: "destek@sahteavci.com" },
    { icon: MapPin, labelKey: "about.company.label3", value: "Portugal" },
    { icon: Globe, labelKey: "about.company.label4", valueKey: "about.company.value4" },
  ];

  const values = [
    { icon: Heart, titleKey: "about.val1.title", descKey: "about.val1.desc" },
    { icon: Lightbulb, titleKey: "about.val2.title", descKey: "about.val2.desc" },
    { icon: Users, titleKey: "about.val3.title", descKey: "about.val3.desc" },
    { icon: Lock, titleKey: "about.val4.title", descKey: "about.val4.desc" },
  ];

  const teamMembers = [
    { initials: "AK", name: "A.K.", titleKey: "about.team.m1.title", descKey: "about.team.m1.desc" },
    { initials: "MV", name: "M.V.", titleKey: "about.team.m2.title", descKey: "about.team.m2.desc" },
    { initials: "ET", name: "E.T.", titleKey: "about.team.m3.title", descKey: "about.team.m3.desc" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>{tr("about.pill")}</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">{tr("about.hero.title")}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">{tr("about.hero.subtitle")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/iletisim">{tr("about.contact")}</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{tr("about.mission.title")}</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{tr("about.mission.text")}</p>
          </div>
        </Reveal>
      </Section>

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{tr("about.audience.title")}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <a.icon className="h-9 w-9 text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">{tr(a.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tr(a.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{tr("about.company.title")}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {companyInfo.map((c, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-card rounded-xl border border-border p-5 text-center h-full">
                <c.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{tr(c.labelKey)}</p>
                <p className="text-foreground text-sm font-medium">{c.valueKey ? tr(c.valueKey) : c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("team.title")}</h2>
            <p className="text-muted-foreground">{tr("about.team.subtitle")}</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {teamMembers.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-card rounded-xl border p-6 text-center shadow-sm">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold mx-auto mb-4">{m.initials}</div>
                <h3 className="font-semibold text-foreground mb-1">{m.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{tr(m.titleKey)}</p>
                <p className="text-xs text-muted-foreground">{tr(m.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">{tr("about.team.company")}</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{tr("about.values.title")}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <v.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-lg mb-2">{tr(v.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tr(v.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Eye className="h-10 w-10 text-primary mx-auto mb-5" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">"{tr("about.editorial")}"</p>
          </div>
        </Reveal>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("about.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8">{tr("about.cta.text")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/fiyatlandirma">{tr("about.cta.prices")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
