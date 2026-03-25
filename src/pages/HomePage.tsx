import { useState } from "react";
import { Shield, Eye, Search, Lock, BarChart3, FileCheck, Download, FileText, BadgeAlert, Image, Check, ChevronRight, Mail, Quote, ShieldCheck, Globe, Server, Zap, ShieldOff, CheckCircle, User, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

/* ==================== HERO ==================== */
function HeroSection() {
  const { tr } = useLang();
  return (
    <Section className="pt-20 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal>
          <div>
            <Pill variant="primary" className="mb-5">{tr("hero.badge")}</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-[1.15] mb-5">
              {tr("hero.title.1")}
              <span className="text-primary">{tr("hero.title.highlight")}</span>
              {tr("hero.title.2")}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
              {tr("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="cta" size="lg" asChild>
                <a href="#">{tr("cta.install")}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">{tr("cta.howworks")}</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{tr("hero.trust1")}</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{tr("hero.trust2")}</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{tr("hero.trust3")}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-card rounded-xl border shadow-lg p-5 space-y-4">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground font-medium">marka-adi-örnek</span>
              <span className="ml-auto text-xs bg-primary/10 text-primary rounded px-2 py-0.5 font-medium">Trendyol</span>
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Orijinal Marka Ürünü", price: "₺249", safe: true },
                { name: "Marka-Adı Kopya Listing", price: "₺59", safe: false },
                { name: "M.arka Adı – Sahte Varyasyon", price: "₺45", safe: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm border ${!item.safe ? "border-primary/30 bg-primary/5" : "border-border"}`}>
                  <div className="flex items-center gap-2">
                    {!item.safe && <BadgeAlert className="h-4 w-4 text-primary shrink-0" />}
                    <span className={`font-medium ${!item.safe ? "text-primary" : "text-foreground"}`}>{item.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> {tr("hero.demo.suspicious")}
              </span>
              <span className="text-xs text-muted-foreground">{tr("hero.demo.save")}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ==================== PROBLEM ==================== */
function ProblemSection() {
  const { tr } = useLang();
  const problemCards = [
    { numKey: "problem.stat1", labelKey: "problem.stat1.label", descKey: "problem.stat1.desc" },
    { numKey: "problem.stat2", labelKey: "problem.stat2.label", descKey: "problem.stat2.desc" },
    { numKey: "problem.stat3", labelKey: "problem.stat3.label", descKey: "problem.stat3.desc" },
    { numKey: "problem.stat4", labelKey: "problem.stat4.label", descKey: "problem.stat4.desc" },
  ];

  return (
    <Section id="problem" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("problem.title")}</h2>
          <p className="text-muted-foreground">{tr("problem.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {problemCards.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-card rounded-xl border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{tr(c.numKey)}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{tr(c.labelKey)}</p>
              <p className="text-sm text-muted-foreground">{tr(c.descKey)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-center text-muted-foreground font-medium max-w-xl mx-auto">
          {tr("problem.cta")} <span className="text-foreground font-semibold">{tr("problem.cta.bold")}</span>
        </p>
      </Reveal>
    </Section>
  );
}

/* ==================== HOW IT WORKS ==================== */
function HowItWorksSection() {
  const { tr } = useLang();
  const steps = [
    { icon: Download, titleKey: "how.step1", descKey: "how.step1.desc" },
    { icon: Search, titleKey: "how.step2", descKey: "how.step2.desc" },
    { icon: FileCheck, titleKey: "how.step3", descKey: "how.step3.desc" },
  ];

  return (
    <Section id="how-it-works">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("how.title")}</h2>
          <p className="text-muted-foreground">{tr("how.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
        <div className="hidden md:block absolute top-14 left-[calc(33.33%+0.75rem)] right-[calc(33.33%+0.75rem)] h-0.5 border-t-2 border-dashed border-border" />
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="absolute -top-1 -right-1 md:static md:block text-xs font-bold text-primary bg-primary/10 rounded-full h-6 w-6 inline-flex items-center justify-center md:mx-auto md:mb-2">{i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{tr(s.titleKey)}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{tr(s.descKey)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <a href="#">{tr("cta.start")}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== FEATURES ==================== */
function FeaturesSection() {
  const { tr } = useLang();
  const features = [
    { icon: Search, titleKey: "feat.1.title", descKey: "feat.1.desc" },
    { icon: Shield, titleKey: "feat.2.title", descKey: "feat.2.desc" },
    { icon: FileText, titleKey: "feat.3.title", descKey: "feat.3.desc" },
    { icon: Eye, titleKey: "feat.4.title", descKey: "feat.4.desc" },
    { icon: Image, titleKey: "feat.5.title", descKey: "feat.5.desc" },
    { icon: Lock, titleKey: "feat.6.title", descKey: "feat.6.desc" },
  ];

  return (
    <Section id="features" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("feat.title")}</h2>
          <p className="text-muted-foreground">{tr("feat.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{tr(f.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tr(f.descKey)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/ozellikler">{tr("feat.cta")} <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== PRICING ==================== */
function PricingSection() {
  const { tr } = useLang();
  const plans = [
    {
      nameKey: "price.free", price: "₺0", period: "/ay", sub: "", badgeKey: "",
      features: ["1 marka", "50 tarama / ay", "Temel jargon tespiti", "Topluluk desteği"],
      ctaKey: "price.begin", highlight: false,
    },
    {
      nameKey: "price.starter", price: "$49", period: "/ay", sub: "~₺1.600", badgeKey: "price.popular",
      features: ["5 marka", "500 tarama / ay", "pHash görsel analizi", "Şikayet şablonları", "CSV dışa aktarım", "Email desteği"],
      ctaKey: "price.buy", highlight: true,
    },
    {
      nameKey: "", price: "$99", period: "/ay", sub: "~₺3.200", badgeKey: "",
      features: ["Sınırsız marka", "Sınırsız tarama", "BYOK AI", "Gelişmiş görsel analiz", "Blockchain zaman damgası", "Öncelikli destek"],
      ctaKey: "price.buy", highlight: false, name: "PRO",
    },
    {
      nameKey: "", price: "$149", period: "/ay", sub: "~₺4.800", badgeKey: "",
      features: ["Tüm PRO özellikleri", "CLIP API entegrasyonu", "Mahkeme paketi", "Özel şablonlar", "Danışmanlık"],
      ctaKey: "price.buy", highlight: false, name: "UZMAN",
    },
  ];

  return (
    <Section id="pricing">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("price.title")}</h2>
          <p className="text-muted-foreground">{tr("price.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className={`rounded-xl border p-6 flex flex-col h-full ${p.highlight ? "border-primary shadow-lg ring-2 ring-primary/20 bg-card" : "bg-card shadow-sm"}`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">{p.nameKey ? tr(p.nameKey) : p.name}</span>
                  {p.badgeKey && <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{tr(p.badgeKey)}</span>}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                {p.sub && <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>}
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.highlight ? "cta" : "outline"} className="w-full" asChild>
                <a href="#">{tr(p.ctaKey)}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-muted-foreground">{tr("price.note")}</p>
          <Button variant="link" asChild>
            <Link to="/fiyatlandirma">{tr("price.detail")}</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== TESTIMONIALS ==================== */
const testimonials = [
  { name: "Ayşe K.", role: "Trendyol Satıcısı", text: "Eskiden saatlerce manuel arama yapıyorduk. Şimdi şüpheli listingleri çok daha hızlı ayıklıyoruz.", initials: "AK" },
  { name: "Mert Y.", role: "Marka Yöneticisi", text: "Özellikle düşük fiyatlı kopya ürünleri fark etmek kolaylaştı. Ekip için ciddi zaman tasarrufu sağladı.", initials: "MY" },
  { name: "Elif T.", role: "E-ticaret Operasyon Uzmanı", text: "Şikayet sürecini düzenli hale getirmemize yardımcı oldu. Dağınık takip yerine net bir akış kurduk.", initials: "ET" },
  { name: "Onur B.", role: "IP Danışmanı", text: "Delil toplama mantığı ve hızlı çıktı alma tarafı, müvekkil tarafında süreci daha yönetilebilir kılıyor.", initials: "OB" },
];

function TestimonialsSection() {
  const { tr } = useLang();
  return (
    <Section id="testimonials" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("test.title")}</h2>
          <p className="text-muted-foreground">{tr("test.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-card rounded-xl border p-6 shadow-sm h-full">
              <Quote className="h-5 w-5 text-primary/30 mb-3" />
              <p className="text-sm text-foreground leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{t.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== FAQ ==================== */
const faqs = [
  { q: "Tescilli marka gerekli mi?", a: "Hayır. Anahtar kelime ve marka adıyla da takip yapılabilir. Ancak tescilli marka, resmi şikayet süreçlerinde avantaj sağlar." },
  { q: "Eklenti güvenli mi?", a: "Güvenlik ve veri minimizasyonu temel önceliktir. Yapı mümkün olduğunca yerel işleme mantığıyla kurgulanır." },
  { q: "Küçük markalar için uygun mu?", a: "Evet. SahteAvcı özellikle yüksek bütçeli kurumsal çözümlere alternatif arayan küçük ve orta ölçekli markalar için tasarlanır." },
  { q: "Hangi pazaryerlerinde çalışır?", a: "Ana odak Trendyol ve Hepsiburada'dır. İleride farklı platformlar için kapsam genişletilebilir." },
];

function FAQSection() {
  const { tr } = useLang();
  return (
    <Section id="faq">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("faq.title")}</h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-5 shadow-sm">
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-6">
            <Button variant="link" asChild>
              <Link to="/sss">{tr("faq.all")}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== SECURITY ==================== */
function SecuritySection() {
  const { tr } = useLang();
  const securityCards = [
    { icon: Lock, titleKey: "sec.1.title", descKey: "sec.1.desc" },
    { icon: ShieldOff, titleKey: "sec.2.title", descKey: "sec.2.desc" },
    { icon: CheckCircle, titleKey: "sec.3.title", descKey: "sec.3.desc" },
  ];

  return (
    <Section id="security" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("sec.title")}</h2>
          <p className="text-muted-foreground">{tr("sec.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {securityCards.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <c.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-base font-bold text-foreground mb-2">{tr(c.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tr(c.descKey)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>🔐 {tr("sec.badge1")}</span>
          <span>🇪🇺 {tr("sec.badge2")}</span>
          <span>📋 {tr("sec.badge3")}</span>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== TEAM ==================== */
const teamMembers = [
  { initials: "AK", name: "A.K.", title: "Kurucu & IP Stratejisti", desc: "15+ yıl marka hukuku" },
  { initials: "MV", name: "M.V.", title: "Teknik Geliştirici", desc: "E-ticaret otomasyon uzmanı" },
  { initials: "ET", name: "E.T.", title: "Müşteri Başarısı", desc: "Trendyol & Hepsiburada operasyon" },
];

function TeamSection() {
  const { tr } = useLang();
  return (
    <Section id="team">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("team.title")}</h2>
          <p className="text-muted-foreground">{tr("team.subtitle")}</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {teamMembers.map((m, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-card rounded-xl border p-6 text-center shadow-sm">
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold mx-auto mb-4">{m.initials}</div>
              <h3 className="font-semibold text-foreground mb-1">{m.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{m.title}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== NEWSLETTER ==================== */
function NewsletterSection() {
  const { tr } = useLang();
  const [nlEmail, setNlEmail] = useState("");
  const [nlConsent, setNlConsent] = useState(false);
  const [nlError, setNlError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlConsent) {
      setNlError(tr("news.kvkk_error"));
      return;
    }
    setNlError("");
  };

  return (
    <Section id="newsletter">
      <Reveal>
        <div className="max-w-xl mx-auto text-center">
          <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("news.title")}</h2>
          <p className="text-muted-foreground mb-6">{tr("news.subtitle")}</p>
          <form onSubmit={handleSubmit} className="space-y-3 mb-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder={tr("news.placeholder")} className="flex-1" value={nlEmail} onChange={e => setNlEmail(e.target.value)} />
              <Button variant="cta" type="submit" disabled={!nlEmail}>{tr("news.btn")}</Button>
            </div>
            <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer text-left">
              <Checkbox checked={nlConsent} onCheckedChange={v => { setNlConsent(!!v); if (v) setNlError(""); }} className="mt-0.5" />
              <span>{tr("news.kvkk")}</span>
            </label>
            {nlError && <p className="text-sm text-primary font-medium">{nlError}</p>}
          </form>
          <p className="text-xs text-muted-foreground">{tr("news.footer")}</p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== FINAL CTA ==================== */
function FinalCTASection() {
  const { tr } = useLang();
  return (
    <section id="final-cta" className="py-16 md:py-20 px-4 md:px-8 bg-secondary text-secondary-foreground">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("final.title")}</h2>
          <p className="text-secondary-foreground/80 mb-7">{tr("final.subtitle")}</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#">{tr("cta.install_chrome")}</a>
          </Button>
          <p className="text-sm text-secondary-foreground/60 mt-5">{tr("final.footer")}</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ==================== HOMEPAGE ==================== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <SecuritySection />
      <TeamSection />
      <NewsletterSection />
      <FinalCTASection />
    </>
  );
}
