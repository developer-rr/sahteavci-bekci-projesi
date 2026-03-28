import { useState } from "react";
import { Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function BlogPage() {
  const { tr } = useLang();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "newsletter-blog", email }).toString(),
      });
      if (!res.ok) throw new Error();
      toast.success(tr("form.success"));
      setEmail("");
    } catch {
      toast.error(tr("form.error"));
    } finally {
      setSending(false);
    }
  };
  const articles = [
    { catKey: "blog.art1.cat", titleKey: "blog.art1.title", excerptKey: "blog.art1.excerpt" },
    { catKey: "blog.art2.cat", titleKey: "blog.art2.title", excerptKey: "blog.art2.excerpt" },
    { catKey: "blog.art3.cat", titleKey: "blog.art3.title", excerptKey: "blog.art3.excerpt" },
    { catKey: "blog.art4.cat", titleKey: "blog.art4.title", excerptKey: "blog.art4.excerpt" },
    { catKey: "blog.art5.cat", titleKey: "blog.art5.title", excerptKey: "blog.art5.excerpt" },
    { catKey: "blog.art6.cat", titleKey: "blog.art6.title", excerptKey: "blog.art6.excerpt" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>{tr("blog.pill")}</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">{tr("blog.title")}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">{tr("blog.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden md:flex">
            <div className="md:w-2/5 bg-muted flex items-center justify-center p-10 md:p-12">
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{tr("blog.soon")}</span>
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
              <Pill className="mb-3 w-fit">{tr("blog.featured")}</Pill>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{tr("blog.featured.title")}</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{tr("blog.featured.excerpt")}</p>
              <Button variant="outline" size="sm" disabled className="w-fit">{tr("blog.soon")}</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{tr("blog.planned")}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-card rounded-xl border border-border p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{tr(a.catKey)}</span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">{tr("blog.soon")}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">{tr(a.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{tr(a.excerptKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-xl mx-auto text-center">
            <Mail className="h-9 w-9 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{tr("blog.newsletter.title")}</h2>
            <p className="text-muted-foreground text-sm mb-6">{tr("blog.newsletter.text")}</p>
            <form onSubmit={handleBlogSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder={tr("news.placeholder")} value={email} onChange={e => setEmail(e.target.value)} className="flex-1" />
              <Button variant="cta" disabled={!email || sending}>{sending ? tr("form.sending") : tr("news.btn")}</Button>
            </form>
          </div>
        </Reveal>
      </Section>

      <Section variant="alt">
        <Reveal>
          <p className="text-muted-foreground text-sm text-center max-w-2xl mx-auto leading-relaxed italic">"{tr("blog.credibility")}"</p>
        </Reveal>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("blog.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8">{tr("blog.cta.text")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/ozellikler">{tr("blog.cta.features")}</Link>
              </Button>
              <Button variant="cta" size="lg" asChild><a href="#">{tr("cta.install")}</a></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
