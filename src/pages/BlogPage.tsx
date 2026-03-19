import { useState } from "react";
import { Clock, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const articles = [
  { cat: "Operasyon", title: "Sahte ürün takibinde en sık yapılan hatalar", excerpt: "Tekrarlanan hatalar, zaman kaybı ve etkisiz süreçlerin arkasındaki yaygın nedenler." },
  { cat: "Rehber", title: "Küçük markalar için pratik koruma akışı", excerpt: "Sınırlı bütçe ve ekiple marka korumasına nasıl başlanır?" },
  { cat: "Hukuk", title: "Şikayet sürecinde delil düzeni neden önemlidir?", excerpt: "Yapılandırılmış kayıtların süreç hızına ve güvenilirliğe etkisi." },
  { cat: "Karşılaştırma", title: "Manuel takip mi, araç desteği mi?", excerpt: "İki yaklaşımın avantaj ve dezavantajlarını karşılaştırıyoruz." },
  { cat: "Rehber", title: "Trendyol ve Hepsiburada odaklı kontrol listesi", excerpt: "İki büyük pazaryerinde sistematik kontrol için temel adımlar." },
  { cat: "Operasyon", title: "Marka koruma operasyonu nasıl standartlaştırılır?", excerpt: "Tekrarlı süreçleri daha öngörülebilir hale getirmenin yolları." },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>Blog</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">Marka Koruma İçerikleri ve Güncellemeler</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">
              Sahte ürün takibi, pazaryeri süreçleri ve ürün gelişmeleri hakkında içerikler burada yayınlanacaktır.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <Section>
        <Reveal>
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden md:flex">
            <div className="md:w-2/5 bg-muted flex items-center justify-center p-10 md:p-12">
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Yakında</span>
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
              <Pill className="mb-3 w-fit">Öne Çıkan</Pill>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Trendyol ve Hepsiburada'da Sahte Ürün Takibine Nereden Başlanır?
              </h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Marka sahipleri için temel riskler, ilk kontrol adımları ve operasyonel öneriler.
              </p>
              <Button variant="outline" size="sm" disabled className="w-fit">Yakında</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ARTICLE GRID */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Planlanmış İçerikler</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-card rounded-xl border border-border p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{a.cat}</span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">Yakında</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{a.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section>
        <Reveal>
          <div className="max-w-xl mx-auto text-center">
            <Mail className="h-9 w-9 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Yeni Yazılardan Haberdar Olun</h2>
            <p className="text-muted-foreground text-sm mb-6">İlk içerikler yayınlandığında e-posta ile haber almak için abone olun.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="E-posta adresiniz" value={email} onChange={e => setEmail(e.target.value)} className="flex-1" />
              <Button variant="cta" disabled={!email}>Abone Ol</Button>
            </form>
          </div>
        </Reveal>
      </Section>

      {/* CREDIBILITY */}
      <Section variant="alt">
        <Reveal>
          <p className="text-muted-foreground text-sm text-center max-w-2xl mx-auto leading-relaxed italic">
            "Bu blog alanı, marka sahipleri ve operasyon ekipleri için daha net, uygulanabilir ve erişilebilir içerikler üretmek amacıyla hazırlanmıştır."
          </p>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">İçerikler gelene kadar ürünü inceleyin</h2>
            <p className="text-secondary-foreground/70 mb-8">Blog yakında dolacak; bu sırada SahteAvcı'nın nasıl çalıştığını keşfedebilirsiniz.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/ozellikler">Özellikleri Gör</Link>
              </Button>
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
