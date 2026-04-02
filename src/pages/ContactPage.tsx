import { useState } from "react";
import { Mail, Clock, Building2, MapPin, Shield, HelpCircle, CreditCard, Code, Handshake } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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

export default function ContactPage() {
  const { tr } = useLang();
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({ updates: false, tips: false, campaigns: false });
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [consentError, setConsentError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) {
      if (!consent) setConsentError(tr("news.kvkk_error"));
      return;
    }
    setConsentError("");
    setSending(true);
    const selectedInterests = Object.entries(interests).filter(([, v]) => v).map(([k]) => k).join(", ");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "newsletter-contact", email, interests: selectedInterests }).toString(),
      });
      if (!res.ok) throw new Error();
      toast.success(tr("form.success"));
      setEmail("");
      setInterests({ updates: false, tips: false, campaigns: false });
      setConsent(false);
    } catch {
      toast.error(tr("form.error"));
    } finally {
      setSending(false);
    }
  };
  const contactInfo = [
    { icon: Mail, labelKey: "contact.info.email", value: "destek@sahteavci.com" },
    { icon: Clock, labelKey: "contact.info.response", valueKey: "contact.info.response.val" },
    { icon: Shield, labelKey: "contact.info.kvkk", value: "destek@sahteavci.com" },
    { icon: Building2, labelKey: "contact.info.company", value: "VENTOS ARQUEÁVEIS UNIPESSOAL LDA" },
    { icon: MapPin, labelKey: "contact.info.country", valueKey: "contact.info.country.val" },
  ];

  const supportTopics = [
    { icon: HelpCircle, key: "contact.topic1" },
    { icon: CreditCard, key: "contact.topic2" },
    { icon: Code, key: "contact.topic3" },
    { icon: Shield, key: "contact.topic4" },
    { icon: Handshake, key: "contact.topic5" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>{tr("contact.pill")}</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">{tr("contact.title")}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">{tr("contact.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">{tr("contact.info.title")}</h2>
              <div className="space-y-4">
                {contactInfo.map(c => (
                  <div key={c.labelKey} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                    <c.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{tr(c.labelKey)}</p>
                      <p className="text-foreground text-sm font-medium">{c.valueKey ? tr(c.valueKey) : c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-5">{tr("contact.info.fastest")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{tr("contact.subscribe.title")}</h2>
              <p className="text-muted-foreground text-sm mb-6">{tr("contact.subscribe.text")}</p>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">{tr("contact.subscribe.email")}</label>
                  <Input type="email" placeholder="ornek@sirket.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">{tr("contact.subscribe.interests")}</p>
                  <div className="space-y-2.5">
                    {([
                      { key: "updates" as const, labelKey: "contact.subscribe.updates" },
                      { key: "tips" as const, labelKey: "contact.subscribe.tips" },
                      { key: "campaigns" as const, labelKey: "contact.subscribe.campaigns" },
                    ]).map(item => (
                      <label key={item.key} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                        <Checkbox checked={interests[item.key]} onCheckedChange={v => setInterests(p => ({ ...p, [item.key]: !!v }))} />
                        {tr(item.labelKey)}
                      </label>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer">
                  <Checkbox checked={consent} onCheckedChange={v => { setConsent(!!v); if (v) setConsentError(""); }} className="mt-0.5" />
                  <span>{tr("contact.subscribe.consent")}</span>
                </label>
                {consentError && <p className="text-sm text-primary font-medium">{consentError}</p>}

                <Button variant="cta" className="w-full" disabled={!email || !consent || sending}>
                  {sending ? tr("form.sending") : tr("news.btn")}
                </Button>
              </form>

              <p className="text-muted-foreground text-xs mt-4">{tr("contact.subscribe.unsub")}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="alt">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">{tr("contact.topics.title")}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {supportTopics.map(t => (
                <div key={t.key} className="flex items-center gap-3 bg-card rounded-lg border border-border p-4">
                  <t.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{tr(t.key)}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tr("contact.cta.title")}</h2>
            <p className="text-secondary-foreground/70 mb-8">{tr("contact.cta.text")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><a href="https://chromewebstore.google.com/detail/sahteavc%C4%B1-%E2%80%94-marka-koruma/kbpadejggjidclkppdinhhhpccdmpppf" target="_blank" rel="noopener noreferrer">{tr("cta.install")}</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/sss">{tr("contact.cta.faq")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
