import { Check, X, Minus, ArrowRight, Clock, DollarSign, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
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

type CellValue = "yes" | "no" | "partial" | string;

const compRows: { label: string; manual: CellValue; sahteavci: CellValue; enterprise: CellValue }[] = [
  { label: "Kurulum süresi", manual: "Yok", sahteavci: "< 1 dakika", enterprise: "Günler / haftalar" },
  { label: "Öğrenme eşiği", manual: "Düşük", sahteavci: "Düşük", enterprise: "Yüksek" },
  { label: "Aylık maliyet", manual: "₺0", sahteavci: "₺0 – $149", enterprise: "$1.000+" },
  { label: "Küçük ekipler için uygunluk", manual: "partial", sahteavci: "yes", enterprise: "no" },
  { label: "Türk pazaryerlerine odak", manual: "partial", sahteavci: "yes", enterprise: "partial" },
  { label: "Şikayet akışına yakınlık", manual: "no", sahteavci: "yes", enterprise: "partial" },
  { label: "Görsel destek", manual: "no", sahteavci: "yes", enterprise: "yes" },
  { label: "Delil toplama düzeni", manual: "no", sahteavci: "yes", enterprise: "yes" },
  { label: "Esneklik", manual: "yes", sahteavci: "yes", enterprise: "partial" },
  { label: "Minimum sözleşme baskısı", manual: "yes", sahteavci: "yes", enterprise: "no" },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes") return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (value === "no") return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-accent mx-auto" />;
  return <span className="text-foreground text-sm font-medium">{value}</span>;
}

const editorialBlocks = [
  {
    title: "Manuel Takip Neden Zorlaşıyor?",
    text: "Pazaryerlerinde marka ihlallerini takip etmek başlangıçta basit görünse de, listing sayısı arttıkça süreç hızla karmaşıklaşır. Tekrarlayan aramalar, tutarsız kayıtlar ve düzensiz şikayet süreçleri operasyonel yükü artırır. Zaman maliyeti görünmez olsa da, biriken saat kaybı ekipler için ciddi bir verimlilik sorununa dönüşebilir.",
  },
  {
    title: "Kurumsal Araçlar Her Ekip İçin Doğru Seçim mi?",
    text: "Enterprise marka koruma platformları kapsamlı çözümler sunar, ancak aylık maliyetleri genellikle küçük ve orta ölçekli ekiplerin bütçesini aşar. Uzun sözleşme süreleri, karmaşık kurulum süreçleri ve yerel pazaryerlerine özgü detaylardaki eksiklikler, bu araçları her ekip için ideal kılmaz.",
  },
  {
    title: "SahteAvcı Hangi Boşluğu Doldurur?",
    text: "SahteAvcı, manuel takibin verimsizliği ile kurumsal araçların ağırlığı arasında pratik bir denge kurmayı hedefler. Türk pazaryerlerine odaklanan yapısı, hızlı kurulumu ve ölçeklenebilir fiyat modeli ile daha erişilebilir bir alternatif sunmayı amaçlar.",
  },
];

const scenarios = [
  { icon: <Clock className="w-5 h-5" />, title: "Haftalık manuel kontrol yapan küçük marka", text: "Manuel arama süresini kısaltarak daha düzenli bir takip rutini oluşturabilirsiniz." },
  { icon: <Layers className="w-5 h-5" />, title: "Birden fazla listing izleyen ekip", text: "Çoklu marka ve anahtar kelimeyi tek bir akıştan yöneterek operasyonel karmaşıklığı azaltabilirsiniz." },
  { icon: <Users className="w-5 h-5" />, title: "Dış danışmanla çalışan marka", text: "Yapılandırılmış delil çıktıları ve raporlama, danışman iletişimini kolaylaştırabilir." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Süreci standartlaştırmak isteyen satıcı", text: "Şikayet şablonları ve düzenli kayıt akışı ile tekrarlayan işlemleri minimize edebilirsiniz." },
];

const decisionStrip = [
  { label: "Manuel Takip", desc: "En düşük bütçe, en yüksek manuel yük", color: "text-muted-foreground" },
  { label: "SahteAvcı", desc: "Pratik denge ve hızlı başlangıç", color: "text-primary" },
  { label: "Enterprise", desc: "Yüksek bütçe, daha ağır yapı", color: "text-muted-foreground" },
];

export default function ComparisonPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 -z-10" />
        <Reveal>
          <div className="max-w-3xl">
            <Pill variant="primary" className="mb-5">Alternatiflerle Karşılaştırma</Pill>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
              Manuel Takibe ve Ağır Kurumsal Araçlara <span className="text-primary">Arasında Bir Denge</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">
              SahteAvcı, küçük ve orta ölçekli markalar için erişilebilir, pratik ve daha hızlı bir marka koruma akışı sunmayı hedefler.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/fiyatlandirma">Fiyatları Gör</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* COMPARISON TABLE */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Yaklaşım Karşılaştırması</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted-foreground"></th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Manuel Takip</th>
                  <th className="text-center py-3 px-4 font-bold text-primary">SahteAvcı</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Enterprise Araçlar</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground font-medium">{row.label}</td>
                    <td className="text-center py-3 px-4"><CellContent value={row.manual} /></td>
                    <td className="text-center py-3 px-4 bg-primary/[0.03]"><CellContent value={row.sahteavci} /></td>
                    <td className="text-center py-3 px-4"><CellContent value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* EDITORIAL BLOCKS */}
      {editorialBlocks.map((block, i) => (
        <Section key={i} variant={i % 2 === 0 ? "default" : "alt"}>
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.text}</p>
            </div>
          </Reveal>
        </Section>
      ))}

      {/* SCENARIO CARDS */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">Hangi Senaryoda Fark Yaratır?</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">İş akışınıza en yakın senaryoyu değerlendirin.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">{s.icon}</div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DECISION STRIP */}
      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Sizin için hangi yol daha mantıklı?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {decisionStrip.map((d, i) => (
              <div key={i} className={`rounded-xl border p-6 text-center ${
                d.label === "SahteAvcı"
                  ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}>
                <h4 className={`text-lg font-bold mb-2 ${d.color}`}>{d.label}</h4>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Kararı tabloyla değil, deneyimle verin</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">Kurulumu tamamlayın, ilk taramanızı başlatın ve iş akışınıza uyup uymadığını görün.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Başla</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
