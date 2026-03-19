import { Search, TrendingDown, Image, FileCheck, FileText, ShieldCheck, Lock, Eye, User, Users, Briefcase, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

const anchors = [
  { id: "arama", label: "Arama" },
  { id: "analiz", label: "Analiz" },
  { id: "gorsel", label: "Görsel" },
  { id: "delil", label: "Delil" },
  { id: "sikayet", label: "Şikayet" },
  { id: "gizlilik", label: "Gizlilik" },
  { id: "senaryolar", label: "Kullanım Senaryoları" },
];

function AnchorNav() {
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
                active === a.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CapabilitySectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
}

function CapabilitySection({ id, icon, title, body, bullets, reverse }: CapabilitySectionProps) {
  return (
    <Section id={id} variant={reverse ? "alt" : "default"}>
      <Reveal>
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}>
          <div className={reverse ? "md:order-2" : ""}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
              {icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{body}</p>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${reverse ? "md:order-1" : ""} bg-muted/50 rounded-2xl border border-border p-8 md:p-12 flex items-center justify-center min-h-[220px]`}>
            <div className="text-center text-muted-foreground/60">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary/40 mb-3">
                {icon}
              </div>
              <p className="text-xs">Ürün görseli</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

const useCases = [
  { icon: <User className="w-6 h-6" />, title: "Küçük marka sahibi", desc: "Kendi markasını pazaryerinde satan ve kopya satışları fark etmek isteyen girişimciler için temel tarama ve uyarı akışı." },
  { icon: <Users className="w-6 h-6" />, title: "Pazaryeri operasyon ekibi", desc: "Birden fazla markayı aynı anda takip eden ekiplere düzenli tarama, dışa aktarım ve şikayet şablonları sunar." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Marka yöneticisi", desc: "Marka itibarını ve pazaryeri görünürlüğünü koruma sorumluluğu taşıyan yöneticiler için hızlı raporlama ve önceliklendirme." },
  { icon: <Scale className="w-6 h-6" />, title: "IP danışmanı", desc: "Müvekkil adına marka ihlali takibi yapan danışmanlara delil düzeni, kayıt akışı ve yapılandırılmış çıktılar sağlar." },
];

export default function FeaturesPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">Detaylı Özellikler</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              Sahte Ürün Tespiti İçin Geliştirilmiş <span className="text-primary">Pratik Araçlar</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">
              SahteAvcı, Türk pazaryerlerinde marka ihlallerini daha görünür, daha düzenli ve daha yönetilebilir hale getirmek için tasarlanmıştır.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/fiyatlandirma">Fiyatları İncele</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ANCHOR NAV */}
      <AnchorNav />

      {/* CAPABILITY SECTIONS */}
      <CapabilitySection
        id="arama"
        icon={<Search className="w-6 h-6" />}
        title="Akıllı Arama ve Varyasyon Yakalama"
        body="SahteAvcı yalnızca birebir eşleşmeleri değil, isim varyasyonlarını, Türk pazaryerlerine özgü ifade kalıplarını ve yanıltıcı anahtar kelime kombinasyonlarını da görünür kılmayı hedefler."
        bullets={[
          "Marka adı + anahtar kelime kombinasyonları",
          "Türkçe sahtecilik jargonu farkındalığı",
          "Şüpheli isim varyasyonlarını görünür kılma",
        ]}
      />

      <CapabilitySection
        id="analiz"
        icon={<TrendingDown className="w-6 h-6" />}
        title="Fiyat ve Listeleme Davranışı Üzerinden Risk Sinyalleri"
        body="Olağandışı düşük fiyatlar ve şüpheli listeleme davranışları, ekiplerin hangi sonuçları öncelikli inceleyeceğini belirlemesine yardımcı olabilir."
        bullets={[
          "Düşük fiyat sinyalleri",
          "Öncelikli inceleme mantığı",
          "Operasyonel zaman tasarrufu",
        ]}
        reverse
      />

      <CapabilitySection
        id="gorsel"
        icon={<Image className="w-6 h-6" />}
        title="Görsel Benzerlik Kontrolü ile Daha Geniş Tarama"
        body="Görsel benzerlik desteği, yalnızca başlıktan fark edilmesi güç olan listingleri yüzeye çıkarmaya yardımcı olur."
        bullets={[
          "Değiştirilmiş görsellerde benzerlik sinyali",
          "Manuel gözden kaçan sonuçları destekleme",
          "PRO planlarda genişletilmiş kullanım",
        ]}
      />

      <CapabilitySection
        id="delil"
        icon={<FileCheck className="w-6 h-6" />}
        title="Delil Toplama ve Düzenli Kayıt Akışı"
        body="SahteAvcı, kullanıcıların listeleme detaylarını, ekran görüntülerini ve yapılandırılmış delilleri daha tutarlı şekilde toplamasına yardımcı olmayı amaçlar."
        bullets={[
          "Ekran görüntüsü ve kayıt akışı",
          "Daha düzenli takip mantığı",
          "Dışa aktarım için hazırlık",
        ]}
        reverse
      />

      <CapabilitySection
        id="sikayet"
        icon={<FileText className="w-6 h-6" />}
        title="Şikayet Şablonları ile Daha Hızlı Operasyon"
        body="Hazır şikayet şablonları, pazaryeri raporlama süreçleriyle uğraşan ekiplerin tekrarlı işlerini azaltmaya yardımcı olabilir."
        bullets={[
          "Hazır metin akışları",
          "Operasyonel standardizasyon",
          "Tekrarlı işi azaltma",
        ]}
      />

      {/* PRIVACY */}
      <Section id="gizlilik" variant="alt">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Gizlilik ve Yerel İşleme Yaklaşımı</h2>
            <p className="text-muted-foreground leading-relaxed">
              SahteAvcı mimarisi, mümkün olduğunca tarayıcı içi ve veri minimizasyonu odaklı bir çalışma mantığına dayanır. Amaç, marka koruma iş akışını hızlandırırken güvenlik hassasiyetini korumaktır.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Lock className="w-5 h-5" />, label: "Yerel işleme odaklı yaklaşım" },
              { icon: <Eye className="w-5 h-5" />, label: "Veri minimizasyonu" },
              { icon: <ShieldCheck className="w-5 h-5" />, label: "Güvenlik önceliği" },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">{t.icon}</div>
                <p className="text-sm font-medium text-foreground">{t.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* USE CASES */}
      <Section id="senaryolar">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Kim Kullanıyor?</h2>
            <p className="text-muted-foreground">Farklı roller, farklı ihtiyaçlar — aynı pratik araç seti.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">{u.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{u.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Özellikleri okuyarak değil, deneyerek anlayın</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">Kurulumu tamamlayın ve ilk taramanızı dakikalar içinde başlatın.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/fiyatlandirma">Planları Gör</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
