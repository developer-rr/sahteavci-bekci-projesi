import { Shield, Users, Briefcase, Scale, Heart, Lightbulb, Lock, Eye, Building2, Mail, Globe, MapPin } from "lucide-react";
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

const audiences = [
  { icon: Briefcase, title: "Küçük marka sahipleri", desc: "Pazaryerlerinde kendi markalarını tek başına veya küçük ekiplerle koruyan işletmeler. SahteAvcı, manuel yükü azaltarak süreci daha yönetilebilir hale getirir." },
  { icon: Users, title: "Pazaryeri operasyon ekipleri", desc: "Birden fazla markayı veya listing'i takip eden ekipler. Düzenli tarama ve delil akışı ile operasyonel standart sağlanır." },
  { icon: Shield, title: "Marka yöneticileri", desc: "Marka değerini ve itibarını korumakla görevli profesyoneller. Hızlı tespit ve raporlama ile risk yönetimini destekler." },
  { icon: Scale, title: "Fikri mülkiyet danışmanları", desc: "Müvekkilleri adına sahte ürün takibi yapan uzmanlar. Yapılandırılmış delil akışı ve dışa aktarım ile iş sürecini hızlandırır." },
];

const companyInfo = [
  { icon: Building2, label: "Şirket", value: "VENTOS ARQUEÁVEIS UNIPESSOAL LDA" },
  { icon: Mail, label: "Destek", value: "destek@sahteavci.com" },
  { icon: MapPin, label: "Kayıt ülkesi", value: "Portekiz" },
  { icon: Globe, label: "Odak", value: "Türk pazaryerlerinde marka koruma" },
];

const values = [
  { icon: Heart, title: "Güvenilirlik", desc: "Abartısız iletişim, tutarlı çalışma mantığı ve kullanıcıya açık bir süreç sunmak temel hedefimizdir." },
  { icon: Lightbulb, title: "Pratiklik", desc: "Her özellik, gerçek operasyonel ihtiyaçlara yanıt verecek şekilde tasarlanır. Gereksiz karmaşıklıktan kaçınılır." },
  { icon: Users, title: "Erişilebilirlik", desc: "Fiyatlandırma ve kullanım kolaylığı, büyük bütçelere sahip olmayan ekiplerin de araçtan fayda görmesini sağlamaya yöneliktir." },
  { icon: Lock, title: "Gizlilik Hassasiyeti", desc: "Veri minimizasyonu ve yerel işleme yaklaşımı, güvenlik hassasiyetini süreç boyunca korumayı amaçlar." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40 pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Pill>Hakkımızda</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-6 leading-tight">
              Marka Korumasını Daha Erişilebilir Hale Getirmek İçin Buradayız
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl mx-auto">
              SahteAvcı, Türk pazaryerlerinde sahte ürün takibini küçük ve orta ölçekli markalar için daha uygulanabilir hale getirmek amacıyla tasarlandı.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" asChild><Link to="/iletisim">İletişime Geç</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Neden SahteAvcı?</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Sahte ürün takibi çoğu işletme için iki zorlu seçenek arasında kalıyor: ya manuel olarak saatler harcamak ya da küçük ekipler için ağır ve pahalı çözümlere yönelmek. SahteAvcı, bu iki uç arasında daha pratik bir yol sunmayı hedefler.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* WHO WE BUILD FOR */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Kimin İçin Geliştiriyoruz?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <a.icon className="h-9 w-9 text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMPANY / TRUST */}
      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Kurumsal Yapı</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {companyInfo.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="bg-card rounded-xl border border-border p-5 text-center h-full">
                <c.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{c.label}</p>
                <p className="text-foreground text-sm font-medium">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* VALUES */}
      <Section variant="alt">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Nasıl Bir Yaklaşım Benimsiyoruz?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <v.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDITORIAL */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Eye className="h-10 w-10 text-primary mx-auto mb-5" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
              "Bu site yalnızca ürün tanıtımı için değil; marka sahiplerinin neyle karşı karşıya olduğunu açıkça anlatmak, çözüm mantığını görünür kılmak ve daha güvenli bir başlangıç noktası sunmak için hazırlandı."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Markanızı korumaya daha düzenli bir şekilde başlayın</h2>
            <p className="text-secondary-foreground/70 mb-8">Kurulumu tamamlayın, ilk taramanızı başlatın ve sürecin size uyup uymadığına bakın.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild><a href="#">Ücretsiz Yükle</a></Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <Link to="/fiyatlandirma">Fiyatları Gör</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
