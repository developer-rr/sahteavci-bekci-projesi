import { Shield, Eye, Search, Lock, BarChart3, FileCheck, Download, FileText, BadgeAlert, Image, Check, ChevronRight, Mail, Quote, ShieldCheck, Globe, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

/* ==================== HERO ==================== */
function HeroSection() {
  return (
    <Section className="pt-20 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
      {/* subtle bg pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left */}
        <Reveal>
          <div>
            <Pill variant="primary" className="mb-5">Chrome Eklentisi</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-[1.15] mb-5">
              Pazaryerlerindeki Sahte Ürünleri{" "}
              <span className="text-primary">Saniyeler İçinde</span>{" "}
              Tespit Edin.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
              Trendyol ve Hepsiburada'da markanızı koruyun. SahteAvcı ile fikri mülkiyet ihlallerini otomatikleştirin, itibarınızı güvence altına alın.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="cta" size="lg" asChild>
                <a href="#">Ücretsiz Yükle</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">Nasıl Çalışır?</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />500+ marka korunuyor</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />10.000+ sahte ürün tespit edildi</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />%100 yerel işleme</span>
            </div>
          </div>
        </Reveal>

        {/* Right — Product mockup */}
        <Reveal delay={0.15}>
          <div className="bg-card rounded-xl border shadow-lg p-5 space-y-4">
            {/* Search bar */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground font-medium">marka-adi-örnek</span>
              <span className="ml-auto text-xs bg-primary/10 text-primary rounded px-2 py-0.5 font-medium">Trendyol</span>
            </div>
            {/* Results */}
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
            {/* Bottom bar */}
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> 2 Şüpheli Listing Tespit Edildi
              </span>
              <span className="text-xs text-muted-foreground">Delil Kaydet →</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ==================== PROBLEM ==================== */
const problemCards = [
  { number: "15+", label: "saat/hafta", desc: "Manuel sahte ürün aramasına harcanan ortalama süre" },
  { number: "%85", label: "işletme", desc: "En az bir kez marka ihlaliyle karşılaştığını söylüyor" },
  { number: "$1,000+", label: "/ay", desc: "Enterprise araçların başlangıç maliyeti" },
  { number: "∞", label: "döngü", desc: "Bir ihlal kapanır, yenileri açılır" },
];

function ProblemSection() {
  return (
    <Section id="problem" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Markanız Kopyalanıyor mu?</h2>
          <p className="text-muted-foreground">
            Trendyol ve Hepsiburada'da markanızı korumak tam zamanlı bir işe dönüşebilir. Sahte ürünler satışlarınızı çalar, marka değerinizi zedeler ve müşteri güvenini aşındırır.
          </p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {problemCards.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-card rounded-xl border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{c.number}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{c.label}</p>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-center text-muted-foreground font-medium max-w-xl mx-auto">
          Manuel takip yavaş, kurumsal çözümler pahalı. <span className="text-foreground font-semibold">SahteAvcı bu boşluğu doldurur.</span>
        </p>
      </Reveal>
    </Section>
  );
}

/* ==================== HOW IT WORKS ==================== */
const steps = [
  { icon: Download, title: "Yükle", desc: "Chrome'a SahteAvcı'yı ekleyin. Kurulum 30 saniyeden kısa sürer." },
  { icon: Search, title: "Tara", desc: "Markanızı, anahtar kelimenizi veya tescilli ibarenizi girin. Trendyol ve Hepsiburada'da otomatik tarama başlasın." },
  { icon: FileCheck, title: "Delil Topla & Şikayet Et", desc: "Şüpheli listingleri işaretleyin, delilleri kaydedin ve hazır şikayet taslağı oluşturun." },
];

function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">SahteAvcı ile Kontrol Sizde</h2>
          <p className="text-muted-foreground">Kurulumdan şikayete kadar süreç birkaç dakikada tamamlanır.</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
        {/* connector lines (desktop only) */}
        <div className="hidden md:block absolute top-14 left-[calc(33.33%+0.75rem)] right-[calc(33.33%+0.75rem)] h-0.5 border-t-2 border-dashed border-border" />
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="absolute -top-1 -right-1 md:static md:block text-xs font-bold text-primary bg-primary/10 rounded-full h-6 w-6 inline-flex items-center justify-center md:mx-auto md:mb-2">{i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <a href="#">Ücretsiz Başla</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== FEATURES ==================== */
const features = [
  { icon: Search, title: "Akıllı Arama", desc: "Unicode hileleri, homoglifler ve Türkçe sahtecilik jargonu gibi zor varyasyonları yakalar." },
  { icon: Shield, title: "SHA-256 Delil Toplama", desc: "Toplanan kayıtları kriptografik doğrulamayla saklayarak delil güvenilirliğini artırır." },
  { icon: FileText, title: "Otomatik Şikayet Şablonları", desc: "Trendyol ve Hepsiburada süreçlerine uygun, hızlı kullanılabilen hazır metinler üretir." },
  { icon: Eye, title: "Fiyat Anomali Tespiti", desc: "Şüpheli derecede düşük fiyatlı ürünleri öne çıkararak riskli listingleri hızla görünür kılar." },
  { icon: Image, title: "Görsel Benzerlik Analizi", desc: "Değiştirilmiş ürün görselleri arasında benzerlik tespiti yaparak manuel gözden kaçan sonuçları yakalar." },
  { icon: Lock, title: "%100 Yerel İşleme", desc: "Verileriniz mümkün olduğunca tarayıcı içinde işlenir; güvenlik ve gizlilik odakta kalır." },
];

function FeaturesSection() {
  return (
    <Section id="features" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Neden SahteAvcı?</h2>
          <p className="text-muted-foreground">Türk pazaryerleri için geliştirilmiş, hızlı ve uygulanabilir marka koruma araçları.</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/ozellikler">Tüm Özellikleri Gör <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== PRICING ==================== */
const plans = [
  {
    name: "ÜCRETSİZ", price: "₺0", period: "/ay", sub: "", badge: "",
    features: ["1 marka", "50 tarama / ay", "Temel jargon tespiti", "Topluluk desteği"],
    cta: "Başla", highlight: false,
  },
  {
    name: "BAŞLANGIÇ", price: "$49", period: "/ay", sub: "~₺1.600", badge: "Popüler",
    features: ["5 marka", "500 tarama / ay", "pHash görsel analizi", "Şikayet şablonları", "CSV dışa aktarım", "Email desteği"],
    cta: "Satın Al", highlight: true,
  },
  {
    name: "PRO", price: "$99", period: "/ay", sub: "~₺3.200", badge: "",
    features: ["Sınırsız marka", "Sınırsız tarama", "BYOK AI", "Gelişmiş görsel analiz", "Blockchain zaman damgası", "Öncelikli destek"],
    cta: "Satın Al", highlight: false,
  },
  {
    name: "UZMAN", price: "$149", period: "/ay", sub: "~₺4.800", badge: "",
    features: ["Tüm PRO özellikleri", "CLIP API entegrasyonu", "Mahkeme paketi", "Özel şablonlar", "Danışmanlık"],
    cta: "Satın Al", highlight: false,
  },
];

function PricingSection() {
  return (
    <Section id="pricing">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Her Büyüklükteki Marka İçin Uygun Fiyat</h2>
          <p className="text-muted-foreground">Ücretsiz başlayın, ihtiyaç büyüdükçe yükseltin.</p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className={`rounded-xl border p-6 flex flex-col h-full ${p.highlight ? "border-primary shadow-lg ring-2 ring-primary/20 bg-card" : "bg-card shadow-sm"}`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">{p.name}</span>
                  {p.badge && <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{p.badge}</span>}
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
                <a href="#">{p.cta}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-muted-foreground">Tüm ücretli planlar için taksitli ödeme desteği mevcuttur.</p>
          <Button variant="link" asChild>
            <Link to="/fiyatlandirma">Detaylı fiyat karşılaştırması →</Link>
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
  return (
    <Section id="testimonials" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Markaların Güvendiği Çözüm</h2>
          <p className="text-muted-foreground">Küçük ekiplerden uzman danışmanlara kadar, zaman kazandıran pratik koruma.</p>
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
  return (
    <Section id="faq">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Sık Sorulan Sorular</h2>
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
              <Link to="/sss">Tüm soruları görüntüle →</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== SECURITY ==================== */
const trustBadges = [
  { icon: Lock, label: "SSL ile korunan bağlantılar" },
  { icon: ShieldCheck, label: "KVKK odaklı yaklaşım" },
  { icon: Globe, label: "Avrupa şirket yapısı" },
  { icon: Server, label: "Şifreli kayıt mantığı" },
];

const bottomBadges = ["Trendyol odağı", "Hepsiburada odağı", "SMB dostu fiyatlama", "Hızlı kurulum"];

function SecuritySection() {
  return (
    <Section id="security" variant="alt">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Güvenlik ve Güven Temelde</h2>
          <p className="text-muted-foreground">Marka koruma aracında hız kadar güven de önemlidir.</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Reveal>
          <p className="text-muted-foreground leading-relaxed">
            SahteAvcı, veri güvenliği ve hukuki süreçlerde kullanılabilir kayıt mantığını birlikte düşünür. Amaç yalnızca tespit değil, güvenilir aksiyon akışı sağlamaktır.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-card rounded-lg border p-3.5 shadow-sm">
                <b.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {bottomBadges.map((b, i) => (
            <span key={i} className="text-xs font-medium bg-card border rounded-full px-4 py-2 text-muted-foreground shadow-sm flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-primary" />{b}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== NEWSLETTER ==================== */
function NewsletterSection() {
  return (
    <Section id="newsletter">
      <Reveal>
        <div className="max-w-xl mx-auto text-center">
          <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Güncellemeleri Kaçırmayın</h2>
          <p className="text-muted-foreground mb-6">Yeni özellikler, marka koruma ipuçları ve pazaryeri güncellemeleri için e-posta listemize katılın.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 mb-3">
            <Input type="email" placeholder="E-posta adresiniz" className="flex-1" />
            <Button variant="cta">Abone Ol</Button>
          </form>
          <p className="text-xs text-muted-foreground">Abone olarak iletişim ve güncelleme e-postaları almayı kabul etmiş olursunuz. İstediğiniz zaman ayrılabilirsiniz.</p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== FINAL CTA ==================== */
function FinalCTASection() {
  return (
    <section id="final-cta" className="py-16 md:py-20 px-4 md:px-8 bg-secondary text-secondary-foreground">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Markanızı Korumaya Bugün Başlayın</h2>
          <p className="text-secondary-foreground/80 mb-7">Ücretsiz plan ile hemen başlayın. Kurulum dakikalar içinde tamamlanır.</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#">Chrome'a Ücretsiz Yükle</a>
          </Button>
          <p className="text-sm text-secondary-foreground/60 mt-5">Siz markanızı büyütün, SahteAvcı şüpheli listingleri takip etsin.</p>
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
      <NewsletterSection />
      <FinalCTASection />
    </>
  );
}
