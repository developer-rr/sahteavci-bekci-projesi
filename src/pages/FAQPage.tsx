import { useState, useMemo } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import Pill from "@/components/ui/pill";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

type Category = "Genel" | "Fiyatlandırma" | "Teknik" | "Güvenlik & Gizlilik" | "Şikayetler & Yasal";

interface FaqItem { q: string; a: string; cat: Category }

const faqs: FaqItem[] = [
  { cat: "Genel", q: "SahteAvcı tam olarak ne yapar?", a: "SahteAvcı, Trendyol ve Hepsiburada gibi pazaryerlerinde şüpheli listingleri daha hızlı tespit etmeye, delil akışını düzenlemeye ve şikayet operasyonunu kolaylaştırmaya yardımcı olur." },
  { cat: "Genel", q: "Kimler için uygundur?", a: "Özellikle küçük ve orta ölçekli marka sahipleri, pazaryeri ekipleri, marka yöneticileri ve fikri mülkiyet danışmanları için uygundur." },
  { cat: "Genel", q: "Tescilli marka gerekli mi?", a: "Hayır. Anahtar kelime ve marka adıyla da takip yapılabilir. Ancak tescilli marka, resmi şikayet süreçlerinde önemli avantaj sağlayabilir." },
  { cat: "Genel", q: "Hangi pazaryerlerine odaklanır?", a: "Ana odak Trendyol ve Hepsiburada'dır. Kapsam ileride genişletilebilir." },
  { cat: "Fiyatlandırma", q: "Ücretsiz plan gerçekten ücretsiz mi?", a: "Evet, temel kullanım için ücretsiz başlangıç planı sunulur." },
  { cat: "Fiyatlandırma", q: "Planımı daha sonra yükseltebilir miyim?", a: "Evet, ihtiyaç arttıkça üst planlara geçiş kurgulanabilir." },
  { cat: "Fiyatlandırma", q: "Taksitli ödeme var mı?", a: "Ücretli planlar için taksitli ödeme desteği sunulması hedeflenmektedir. Nihai ödeme koşulları satın alma aşamasında gösterilir." },
  { cat: "Fiyatlandırma", q: "Kurumsal veya özel fiyatlandırma mümkün mü?", a: "Özel ihtiyaçlar için iletişim üzerinden değerlendirme yapılabilir." },
  { cat: "Teknik", q: "Kurulum ne kadar sürer?", a: "Kurulum genellikle birkaç dakika içinde tamamlanır." },
  { cat: "Teknik", q: "Teknik bilgi gerekir mi?", a: "Hayır. Ürün, günlük operasyon akışına yakın ve anlaşılır olacak şekilde tasarlanır." },
  { cat: "Teknik", q: "Veriler dışa aktarılabiliyor mu?", a: "Plan seviyesine bağlı olarak dışa aktarım seçenekleri sunulabilir." },
  { cat: "Teknik", q: "Görsel analiz tüm planlarda var mı?", a: "Bazı gelişmiş analiz özellikleri yalnızca üst planlarda yer alabilir." },
  { cat: "Güvenlik & Gizlilik", q: "Eklenti güvenli mi?", a: "Güvenlik ve veri minimizasyonu temel öncelikler arasındadır." },
  { cat: "Güvenlik & Gizlilik", q: "Verilerim nasıl işlenir?", a: "Mimari mümkün olduğunca yerel işleme yaklaşımına dayanır." },
  { cat: "Güvenlik & Gizlilik", q: "KVKK ile ilgili taleplerimi nasıl iletebilirim?", a: "KVKK ve veri talepleri için destek e-posta adresi üzerinden iletişime geçebilirsiniz." },
  { cat: "Güvenlik & Gizlilik", q: "Tüm işlem tamamen yerel mi?", a: "Ürün mümkün olduğunca tarayıcı içi işleme mantığıyla kurgulanır. Nihai teknik çerçeve ilgili belgelerde ayrıca netleştirilebilir." },
  { cat: "Şikayetler & Yasal", q: "Şikayet metinleri otomatik oluşuyor mu?", a: "Hazır şablonlar sayesinde şikayet süreci daha hızlı ve düzenli hale getirilebilir." },
  { cat: "Şikayetler & Yasal", q: "Bu araç hukuki danışmanlık yerine geçer mi?", a: "Hayır. SahteAvcı operasyonel kolaylık sağlar; hukuki değerlendirme gereken durumlarda uzman görüşü ayrıca gerekebilir." },
  { cat: "Şikayetler & Yasal", q: "Toplanan kayıtlar doğrudan mahkemede kullanılabilir mi?", a: "Kayıtlar delil düzeni açısından yardımcı olabilir; ancak hukuki kullanılabilirlik somut olaya göre değerlendirilmelidir." },
  { cat: "Şikayetler & Yasal", q: "Final yasal belgeler nerede?", a: "Yasal sayfalar hazırlanma sürecindedir ve nihai metinler ayrıca güncellenecektir." },
];

const categories: Category[] = ["Genel", "Fiyatlandırma", "Teknik", "Güvenlik & Gizlilik", "Şikayetler & Yasal"];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<Category | "Tümü">("Tümü");

  const filtered = useMemo(() => {
    let list = faqs;
    if (activeCat !== "Tümü") list = list.filter(f => f.cat === activeCat);
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter(f => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s));
    }
    return list;
  }, [search, activeCat]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Pill>Sık Sorulan Sorular</Pill></Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">Aklınızdaki Soruların Kısa Cevapları</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">
              Kurulumdan fiyatlandırmaya, güvenlikten kullanım senaryolarına kadar en çok sorulan başlıkları burada topladık.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        {/* Search */}
        <Reveal>
          <div className="max-w-xl mx-auto mb-10 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Soru ara..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {(["Tümü", ...categories] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCat === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Aramanızla eşleşen soru bulunamadı.</p>
          ) : (
            <Accordion type="multiple" className="space-y-3">
              {filtered.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4 hover:no-underline">
                    <span className="flex items-start gap-3">
                      <MessageCircleQuestion className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4 pl-8 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </Section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sorunuz burada yok mu?</h2>
            <p className="text-secondary-foreground/70 mb-8">Bize yazın, yönlendirelim.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><Link to="/iletisim">İletişime Geç</Link></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="#">Ücretsiz Yükle</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
