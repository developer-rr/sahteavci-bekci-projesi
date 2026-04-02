import { Search, TrendingDown, Image, FileCheck, FileText, ShieldCheck, Lock, Eye, User, Users, Briefcase, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

function AnchorNav() {
  const { tr } = useLang();
  const anchors = [
    { id: "arama", key: "featp.anchor.arama" },
    { id: "analiz", key: "featp.anchor.analiz" },
    { id: "gorsel", key: "featp.anchor.gorsel" },
    { id: "delil", key: "featp.anchor.delil" },
    { id: "sikayet", key: "featp.anchor.sikayet" },
    { id: "gizlilik", key: "featp.anchor.gizlilik" },
    { id: "senaryolar", key: "featp.anchor.senaryolar" },
  ];
  const [active, setActive] = useState("arama");

  useEffect(() => {
    const handleScroll = () => {
      for (const a of [...anchors].reverse()) {
        const el = document.getElementById(a.id);
        if (el && el.getBoundingClientRect().top < 160) {
          setActive(a.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-2">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === a.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tr(a.key)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* SVG Mockups */
function SearchMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <rect x="16" y="16" width="288" height="32" rx="8" fill="#2A2A4E" />
      <circle cx="32" cy="32" r="8" stroke="#D32F2F" strokeWidth="2" fill="none" />
      <rect x="48" y="26" width="120" height="12" rx="4" fill="#3A3A5E" />
      <rect x="240" y="22" width="48" height="20" rx="6" fill="#D32F2F" opacity="0.2" />
      <text x="248" y="36" fill="#D32F2F" fontSize="8" fontWeight="600">Tara</text>
      <rect x="16" y="60" width="288" height="36" rx="8" fill="#2A2A4E" />
      <circle cx="32" cy="78" r="4" fill="#4ADE80" />
      <rect x="44" y="72" width="160" height="8" rx="3" fill="#3A3A5E" />
      <rect x="240" y="72" width="48" height="8" rx="3" fill="#3A3A5E" />
      <rect x="16" y="104" width="288" height="36" rx="8" fill="#D32F2F" opacity={0.08} stroke="#D32F2F" strokeWidth="1" />
      <circle cx="32" cy="122" r="4" fill="#D32F2F" />
      <rect x="44" y="116" width="140" height="8" rx="3" fill="#D32F2F" opacity="0.3" />
      <rect x="240" y="116" width="48" height="8" rx="3" fill="#D32F2F" opacity="0.3" />
      <rect x="16" y="148" width="288" height="36" rx="8" fill="#D32F2F" opacity={0.08} stroke="#D32F2F" strokeWidth="1" />
      <circle cx="32" cy="166" r="4" fill="#D32F2F" />
      <rect x="44" y="160" width="120" height="8" rx="3" fill="#D32F2F" opacity="0.3" />
      <rect x="240" y="160" width="48" height="8" rx="3" fill="#D32F2F" opacity="0.3" />
    </svg>
  );
}

function AnalysisMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <text x="16" y="30" fill="#FFFFFF" fontSize="10" fontWeight="600" opacity="0.7">Risk Analizi</text>
      <rect x="16" y="44" width="60" height="100" rx="4" fill="#D32F2F" opacity="0.7" />
      <rect x="88" y="74" width="60" height="70" rx="4" fill="#D32F2F" opacity="0.5" />
      <rect x="160" y="94" width="60" height="50" rx="4" fill="#D32F2F" opacity="0.3" />
      <rect x="232" y="114" width="60" height="30" rx="4" fill="#D32F2F" opacity="0.15" />
      <line x1="16" y1="155" x2="292" y2="155" stroke="#3A3A5E" strokeWidth="1" />
      <rect x="16" y="180" width="80" height="8" rx="4" fill="#D32F2F" opacity="0.2" />
    </svg>
  );
}

function VisualMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <rect x="16" y="40" width="130" height="100" rx="8" fill="#2A2A4E" />
      <text x="52" y="95" fill="#4ADE80" fontSize="8" fontWeight="600">Orijinal</text>
      <rect x="174" y="40" width="130" height="100" rx="8" fill="#2A2A4E" stroke="#D32F2F" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M152 90 L168 82 M152 90 L168 98" stroke="#D32F2F" strokeWidth="2" />
      <rect x="16" y="154" width="288" height="30" rx="8" fill="#D32F2F" opacity="0.1" />
      <text x="100" y="173" fill="#D32F2F" fontSize="9" fontWeight="600">%87 Benzerlik</text>
    </svg>
  );
}

function EvidenceMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <rect x="16" y="40" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="54" r="5" fill="#4ADE80" />
      <rect x="42" y="49" width="100" height="6" rx="3" fill="#3A3A5E" />
      <rect x="230" y="48" width="58" height="12" rx="4" fill="#4ADE80" opacity="0.2" />
      <text x="238" y="57" fill="#4ADE80" fontSize="7">SHA-256 ✓</text>
      <rect x="16" y="76" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="90" r="5" fill="#D32F2F" />
      <rect x="42" y="85" width="120" height="6" rx="3" fill="#3A3A5E" />
      <rect x="16" y="112" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="126" r="5" fill="#4ADE80" />
      <rect x="42" y="121" width="80" height="6" rx="3" fill="#3A3A5E" />
      <rect x="16" y="156" width="140" height="28" rx="8" fill="#D32F2F" />
      <text x="42" y="174" fill="#FFFFFF" fontSize="9" fontWeight="600">CSV Export</text>
    </svg>
  );
}

function ComplaintMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <rect x="16" y="40" width="288" height="20" rx="4" fill="#2A2A4E" />
      <rect x="24" y="46" width="80" height="6" rx="3" fill="#3A3A5E" />
      <rect x="16" y="68" width="288" height="80" rx="4" fill="#2A2A4E" />
      <rect x="24" y="76" width="260" height="4" rx="2" fill="#3A3A5E" />
      <rect x="24" y="86" width="240" height="4" rx="2" fill="#3A3A5E" />
      <rect x="24" y="96" width="200" height="4" rx="2" fill="#3A3A5E" />
      <rect x="24" y="106" width="260" height="4" rx="2" fill="#3A3A5E" />
      <rect x="24" y="116" width="180" height="4" rx="2" fill="#3A3A5E" />
      <rect x="24" y="126" width="220" height="4" rx="2" fill="#3A3A5E" />
      <rect x="16" y="160" width="100" height="28" rx="8" fill="#D32F2F" />
      <text x="32" y="178" fill="#FFFFFF" fontSize="9" fontWeight="600">Copy</text>
      <rect x="128" y="160" width="100" height="28" rx="8" fill="#2A2A4E" stroke="#D32F2F" strokeWidth="1" />
      <text x="144" y="178" fill="#D32F2F" fontSize="9" fontWeight="600">Edit</text>
    </svg>
  );
}

const mockups: Record<string, React.ReactNode> = {
  arama: <SearchMockup />,
  analiz: <AnalysisMockup />,
  gorsel: <VisualMockup />,
  delil: <EvidenceMockup />,
  sikayet: <ComplaintMockup />,
};

interface CapabilitySectionProps {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  bodyKey: string;
  bulletKeys: string[];
  reverse?: boolean;
}

function CapabilitySection({ id, icon, titleKey, bodyKey, bulletKeys, reverse }: CapabilitySectionProps) {
  const { tr } = useLang();
  const mockup = mockups[id];
  return (
    <Section id={id} variant={reverse ? "alt" : "default"}>
      <Reveal>
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}>
          <div className={reverse ? "md:order-2" : ""}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">{icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{tr(titleKey)}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{tr(bodyKey)}</p>
            <ul className="space-y-3">
              {bulletKeys.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{tr(b)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${reverse ? "md:order-1" : ""} rounded-2xl overflow-hidden border border-border shadow-lg`}>
            {mockup || (
              <div className="bg-muted/50 p-8 md:p-12 flex items-center justify-center min-h-[220px]">
                <div className="text-center text-muted-foreground/60">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary/40 mb-3">{icon}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default function FeaturesPage() {
  const { tr } = useLang();

  const useCases = [
    { icon: <User className="w-6 h-6" />, titleKey: "featp.uc1.title", descKey: "featp.uc1.desc" },
    { icon: <Users className="w-6 h-6" />, titleKey: "featp.uc2.title", descKey: "featp.uc2.desc" },
    { icon: <Briefcase className="w-6 h-6" />, titleKey: "featp.uc3.title", descKey: "featp.uc3.desc" },
    { icon: <Scale className="w-6 h-6" />, titleKey: "featp.uc4.title", descKey: "featp.uc4.desc" },
  ];

  return (
    <>
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">{tr("featp.pill")}</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              {tr("featp.title.1")}<span className="text-primary">{tr("featp.title.highlight")}</span>{tr("featp.title.2")}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">{tr("featp.subtitle")}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="https://chromewebstore.google.com/detail/sahteavc%C4%B1-%E2%80%94-marka-koruma/kbpadejggjidclkppdinhhhpccdmpppf" target="_blank" rel="noopener noreferrer">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/fiyatlandirma">{tr("featp.prices")}</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <AnchorNav />

      <CapabilitySection id="arama" icon={<Search className="w-6 h-6" />} titleKey="featp.cap1.title" bodyKey="featp.cap1.body" bulletKeys={["featp.cap1.b1", "featp.cap1.b2", "featp.cap1.b3"]} />
      <CapabilitySection id="analiz" icon={<TrendingDown className="w-6 h-6" />} titleKey="featp.cap2.title" bodyKey="featp.cap2.body" bulletKeys={["featp.cap2.b1", "featp.cap2.b2", "featp.cap2.b3"]} reverse />
      <CapabilitySection id="gorsel" icon={<Image className="w-6 h-6" />} titleKey="featp.cap3.title" bodyKey="featp.cap3.body" bulletKeys={["featp.cap3.b1", "featp.cap3.b2", "featp.cap3.b3"]} />
      <CapabilitySection id="delil" icon={<FileCheck className="w-6 h-6" />} titleKey="featp.cap4.title" bodyKey="featp.cap4.body" bulletKeys={["featp.cap4.b1", "featp.cap4.b2", "featp.cap4.b3"]} reverse />
      <CapabilitySection id="sikayet" icon={<FileText className="w-6 h-6" />} titleKey="featp.cap5.title" bodyKey="featp.cap5.body" bulletKeys={["featp.cap5.b1", "featp.cap5.b2", "featp.cap5.b3"]} />

      <Section id="gizlilik" variant="alt">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{tr("featp.privacy.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{tr("featp.privacy.text")}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Lock className="w-5 h-5" />, key: "featp.privacy.1" },
              { icon: <Eye className="w-5 h-5" />, key: "featp.privacy.2" },
              { icon: <ShieldCheck className="w-5 h-5" />, key: "featp.privacy.3" },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">{t.icon}</div>
                <p className="text-sm font-medium text-foreground">{tr(t.key)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="senaryolar">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{tr("featp.usecases.title")}</h2>
            <p className="text-muted-foreground">{tr("featp.usecases.subtitle")}</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">{u.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{tr(u.titleKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(u.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("featp.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">{tr("featp.cta.text")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="https://chromewebstore.google.com/detail/sahteavc%C4%B1-%E2%80%94-marka-koruma/kbpadejggjidclkppdinhhhpccdmpppf" target="_blank" rel="noopener noreferrer">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/fiyatlandirma">{tr("featp.cta.plans")}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
