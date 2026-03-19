import { useState } from "react";
import { Mail, Clock, Building2, MapPin, Shield, HelpCircle, CreditCard, Code, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const contactInfo = [
  { icon: Mail, label: "Destek e-postası", value: "destek@sahteavci.com" },
  { icon: Clock, label: "Yanıt süresi", value: "24–48 saat" },
  { icon: Shield, label: "KVKK talepleri", value: "destek@sahteavci.com" },
  { icon: Building2, label: "Şirket", value: "VENTOS ARQUEÁVEIS UNIPESSOAL LDA" },
  { icon: MapPin, label: "Kayıt ülkesi", value: "Portekiz" },
];

const supportTopics = [
  { icon: HelpCircle, text: "Ürün hakkında genel sorular" },
  { icon: CreditCard, text: "Plan ve fiyatlandırma soruları" },
  { icon: Code, text: "Teknik geri bildirim" },
  { icon: Shield, text: "KVKK ve veri talepleri" },
  { icon: Handshake, text: "İş birliği ve danışmanlık talepleri" },
];

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({ updates: false, tips: false, campaigns: false });
  const [consent, setConsent] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>İletişim</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">Bizimle İletişime Geçin</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">
              Sorularınız, geri bildirimleriniz ve destek talepleriniz için buradayız.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO-COLUMN */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT — Contact info */}
          <Reveal>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                {contactInfo.map(c => (
                  <div key={c.label} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                    <c.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
                      <p className="text-foreground text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-5">En hızlı iletişim kanalı e-postadır.</p>
            </div>
          </Reveal>

          {/* RIGHT — Newsletter form */}
          <Reveal delay={0.1}>
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Güncellemeler İçin Abone Olun</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Yeni özellikler, marka koruma ipuçları ve ürün güncellemeleri için e-posta listemize katılın.
              </p>

              <form onSubmit={e => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">E-posta adresi</label>
                  <Input type="email" placeholder="ornek@sirket.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">İlgi alanları (opsiyonel)</p>
                  <div className="space-y-2.5">
                    {([
                      { key: "updates" as const, label: "Ürün güncellemeleri" },
                      { key: "tips" as const, label: "Marka koruma ipuçları" },
                      { key: "campaigns" as const, label: "Kampanya ve duyurular" },
                    ]).map(item => (
                      <label key={item.key} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                        <Checkbox checked={interests[item.key]} onCheckedChange={v => setInterests(p => ({ ...p, [item.key]: !!v }))} />
                        {item.label}
                      </label>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer">
                  <Checkbox checked={consent} onCheckedChange={v => setConsent(!!v)} className="mt-0.5" />
                  <span>KVKK ve iletişim onayını kabul ediyorum</span>
                </label>

                <Button variant="cta" className="w-full" disabled={!email || !consent}>Abone Ol</Button>
              </form>

              <p className="text-muted-foreground text-xs mt-4">İstediğiniz zaman abonelikten çıkabilirsiniz.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SUPPORT NOTE */}
      <Section variant="alt">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">Hangi Konular İçin Yazabilirsiniz?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {supportTopics.map(t => (
                <div key={t.text} className="flex items-center gap-3 bg-card rounded-lg border border-border p-4">
                  <t.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Önce deneyin, sonra bize ne düşündüğünüzü yazın</h2>
            <p className="text-secondary-foreground/70 mb-8">Kurulumla başlayın, ardından ihtiyaç duyarsanız iletişime geçin.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/sss">SSS'yi Gör</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
