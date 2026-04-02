import { useState, useMemo } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

type CatKey = "genel" | "fiyat" | "teknik" | "guvenlik" | "yasal";

interface FaqItem { qKey: string; aKey: string; cat: CatKey }

const faqs: FaqItem[] = [
  { cat: "genel", qKey: "faqp.q1", aKey: "faqp.a1" },
  { cat: "genel", qKey: "faqp.q2", aKey: "faqp.a2" },
  { cat: "genel", qKey: "faqp.q3", aKey: "faqp.a3" },
  { cat: "genel", qKey: "faqp.q4", aKey: "faqp.a4" },
  { cat: "fiyat", qKey: "faqp.q5", aKey: "faqp.a5" },
  { cat: "fiyat", qKey: "faqp.q6", aKey: "faqp.a6" },
  { cat: "fiyat", qKey: "faqp.q7", aKey: "faqp.a7" },
  { cat: "fiyat", qKey: "faqp.q8", aKey: "faqp.a8" },
  { cat: "teknik", qKey: "faqp.q9", aKey: "faqp.a9" },
  { cat: "teknik", qKey: "faqp.q10", aKey: "faqp.a10" },
  { cat: "teknik", qKey: "faqp.q11", aKey: "faqp.a11" },
  { cat: "teknik", qKey: "faqp.q12", aKey: "faqp.a12" },
  { cat: "guvenlik", qKey: "faqp.q13", aKey: "faqp.a13" },
  { cat: "guvenlik", qKey: "faqp.q14", aKey: "faqp.a14" },
  { cat: "guvenlik", qKey: "faqp.q15", aKey: "faqp.a15" },
  { cat: "guvenlik", qKey: "faqp.q16", aKey: "faqp.a16" },
  { cat: "yasal", qKey: "faqp.q17", aKey: "faqp.a17" },
  { cat: "yasal", qKey: "faqp.q18", aKey: "faqp.a18" },
  { cat: "yasal", qKey: "faqp.q19", aKey: "faqp.a19" },
  { cat: "yasal", qKey: "faqp.q20", aKey: "faqp.a20" },
];

const catKeys: CatKey[] = ["genel", "fiyat", "teknik", "guvenlik", "yasal"];
const catLabelKeys: Record<CatKey, string> = {
  genel: "faqp.cat.genel",
  fiyat: "faqp.cat.fiyat",
  teknik: "faqp.cat.teknik",
  guvenlik: "faqp.cat.guvenlik",
  yasal: "faqp.cat.yasal",
};

export default function FAQPage() {
  const { tr } = useLang();
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<CatKey | "all">("all");

  const filtered = useMemo(() => {
    let list = faqs;
    if (activeCat !== "all") list = list.filter(f => f.cat === activeCat);
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter(f => tr(f.qKey).toLowerCase().includes(s) || tr(f.aKey).toLowerCase().includes(s));
    }
    return list;
  }, [search, activeCat, tr]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>{tr("faqp.pill")}</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">{tr("faqp.title")}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">{tr("faqp.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="max-w-xl mx-auto mb-10 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={tr("faqp.search")} value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveCat("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {tr("faqp.all")}
            </button>
            {catKeys.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {tr(catLabelKeys[cat])}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">{tr("faqp.noresult")}</p>
          ) : (
            <Accordion type="multiple" className="space-y-3">
              {filtered.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4 hover:no-underline">
                    <span className="flex items-start gap-3">
                      <MessageCircleQuestion className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {tr(faq.qKey)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4 pl-8 leading-relaxed">
                    {tr(faq.aKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("faqp.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8">{tr("faqp.cta.text")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><Link to="/iletisim">{tr("faqp.cta.contact")}</Link></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="https://chromewebstore.google.com/detail/sahteavc%C4%B1-%E2%80%94-marka-koruma/kbpadejggjidclkppdinhhhpccdmpppf" target="_blank" rel="noopener noreferrer">{tr("cta.install")}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
