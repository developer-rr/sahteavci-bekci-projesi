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

/* SVG Mockups for each capability */
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
      <text x="30" y="170" fill="#FFFFFF" fontSize="7" opacity="0.5">Yüksek</text>
      <text x="100" y="170" fill="#FFFFFF" fontSize="7" opacity="0.5">Orta</text>
      <text x="172" y="170" fill="#FFFFFF" fontSize="7" opacity="0.5">Düşük</text>
      <text x="240" y="170" fill="#FFFFFF" fontSize="7" opacity="0.5">Normal</text>
      <rect x="16" y="180" width="80" height="8" rx="4" fill="#D32F2F" opacity="0.2" />
      <text x="20" y="187" fill="#D32F2F" fontSize="6">3 Yüksek Risk</text>
    </svg>
  );
}

function VisualMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <text x="16" y="28" fill="#FFFFFF" fontSize="10" fontWeight="600" opacity="0.7">Görsel Karşılaştırma</text>
      <rect x="16" y="40" width="130" height="100" rx="8" fill="#2A2A4E" />
      <text x="52" y="95" fill="#4ADE80" fontSize="8" fontWeight="600">Orijinal</text>
      <rect x="174" y="40" width="130" height="100" rx="8" fill="#2A2A4E" stroke="#D32F2F" strokeWidth="2" strokeDasharray="4 2" />
      <text x="210" y="95" fill="#D32F2F" fontSize="8" fontWeight="600">Şüpheli</text>
      <path d="M152 90 L168 82 M152 90 L168 98" stroke="#D32F2F" strokeWidth="2" />
      <rect x="16" y="154" width="288" height="30" rx="8" fill="#D32F2F" opacity="0.1" />
      <text x="100" y="173" fill="#D32F2F" fontSize="9" fontWeight="600">%87 Benzerlik Tespit Edildi</text>
    </svg>
  );
}

function EvidenceMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <text x="16" y="28" fill="#FFFFFF" fontSize="10" fontWeight="600" opacity="0.7">Delil Kaydı</text>
      <rect x="16" y="40" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="54" r="5" fill="#4ADE80" />
      <rect x="42" y="49" width="100" height="6" rx="3" fill="#3A3A5E" />
      <rect x="230" y="48" width="58" height="12" rx="4" fill="#4ADE80" opacity="0.2" />
      <text x="238" y="57" fill="#4ADE80" fontSize="7">SHA-256 ✓</text>
      <rect x="16" y="76" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="90" r="5" fill="#D32F2F" />
      <rect x="42" y="85" width="120" height="6" rx="3" fill="#3A3A5E" />
      <rect x="230" y="84" width="58" height="12" rx="4" fill="#D32F2F" opacity="0.2" />
      <text x="238" y="93" fill="#D32F2F" fontSize="7">Bekliyor</text>
      <rect x="16" y="112" width="288" height="28" rx="6" fill="#2A2A4E" />
      <circle cx="30" cy="126" r="5" fill="#4ADE80" />
      <rect x="42" y="121" width="80" height="6" rx="3" fill="#3A3A5E" />
      <rect x="230" y="120" width="58" height="12" rx="4" fill="#4ADE80" opacity="0.2" />
      <text x="238" y="129" fill="#4ADE80" fontSize="7">SHA-256 ✓</text>
      <rect x="16" y="156" width="140" height="28" rx="8" fill="#D32F2F" />
      <text x="42" y="174" fill="#FFFFFF" fontSize="9" fontWeight="600">Dışa Aktar (CSV)</text>
    </svg>
  );
}

function ComplaintMockup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="320" height="200" rx="12" fill="#1A1A2E" />
      <text x="16" y="28" fill="#FFFFFF" fontSize="10" fontWeight="600" opacity="0.7">Şikayet Şablonu</text>
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
      <text x="32" y="178" fill="#FFFFFF" fontSize="9" fontWeight="600">Kopyala</text>
      <rect x="128" y="160" width="100" height="28" rx="8" fill="#2A2A4E" stroke="#D32F2F" strokeWidth="1" />
      <text x="144" y="178" fill="#D32F2F" fontSize="9" fontWeight="600">Düzenle</text>
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
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
}

function CapabilitySection({ id, icon, title, body, bullets, reverse }: CapabilitySectionProps) {
  const mockup = mockups[id];
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
          <div className={`${reverse ? "md:order-1" : ""} rounded-2xl overflow-hidden border border-border shadow-lg`}>
            {mockup || (
              <div className="bg-muted/50 p-8 md:p-12 flex items-center justify-center min-h-[220px]">
                <div className="text-center text-muted-foreground/60">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary/40 mb-3">
                    {icon}
                  </div>
                  <p className="text-xs">Ürün görseli</p>
                </div>
              </div>
            )}
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

      <AnchorNav />

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
