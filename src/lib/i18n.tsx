import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "tr" | "en";
type Translations = Record<string, Record<Lang, string>>;

export const t: Translations = {
  // Nav
  "nav.anasayfa": { tr: "Ana Sayfa", en: "Home" },
  "nav.ozellikler": { tr: "Özellikler", en: "Features" },
  "nav.fiyatlar": { tr: "Fiyatlar", en: "Pricing" },
  "nav.karsilastirma": { tr: "Karşılaştırma", en: "Compare" },
  "nav.hakkimizda": { tr: "Hakkımızda", en: "About" },
  "nav.sss": { tr: "SSS", en: "FAQ" },

  // CTA
  "cta.install": { tr: "Ücretsiz Yükle", en: "Install Free" },
  "cta.howworks": { tr: "Nasıl Çalışır?", en: "How It Works" },
  "cta.start": { tr: "Ücretsiz Başla", en: "Get Started Free" },
  "cta.install_chrome": { tr: "Chrome'a Ücretsiz Yükle", en: "Install Free on Chrome" },

  // Hero
  "hero.badge": { tr: "Chrome Eklentisi", en: "Chrome Extension" },
  "hero.title.1": { tr: "Pazaryerlerindeki Sahte Ürünleri ", en: "Detect Counterfeit Products on Marketplaces " },
  "hero.title.highlight": { tr: "Saniyeler İçinde", en: "in Seconds" },
  "hero.title.2": { tr: " Tespit Edin.", en: "." },
  "hero.subtitle": { tr: "Trendyol ve Hepsiburada'da markanızı koruyun. SahteAvcı ile fikri mülkiyet ihlallerini otomatikleştirin, itibarınızı güvence altına alın.", en: "Protect your brand on Trendyol and Hepsiburada. Automate IP enforcement with SahteAvcı." },
  "hero.trust1": { tr: "500+ marka korunuyor", en: "500+ brands protected" },
  "hero.trust2": { tr: "10.000+ sahte ürün tespit edildi", en: "10,000+ counterfeits detected" },
  "hero.trust3": { tr: "%100 yerel işleme", en: "100% local processing" },

  // Problem
  "problem.title": { tr: "Markanız Kopyalanıyor mu?", en: "Is Your Brand Being Copied?" },
  "problem.subtitle": { tr: "Trendyol ve Hepsiburada'da markanızı korumak tam zamanlı bir işe dönüşebilir. Sahte ürünler satışlarınızı çalar, marka değerinizi zedeler ve müşteri güvenini aşındırır.", en: "Protecting your brand on Trendyol and Hepsiburada can become a full-time job. Counterfeits steal your sales, damage your brand value and erode customer trust." },
  "problem.stat1": { tr: "15+", en: "15+" },
  "problem.stat1.label": { tr: "saat/hafta", en: "hrs/week" },
  "problem.stat1.desc": { tr: "Manuel sahte ürün aramasına harcanan ortalama süre", en: "Average time spent on manual counterfeit search" },
  "problem.stat2": { tr: "%85", en: "85%" },
  "problem.stat2.label": { tr: "işletme", en: "of businesses" },
  "problem.stat2.desc": { tr: "En az bir kez marka ihlaliyle karşılaştığını söylüyor", en: "Report encountering at least one brand infringement" },
  "problem.stat3": { tr: "$1,000+", en: "$1,000+" },
  "problem.stat3.label": { tr: "/ay", en: "/mo" },
  "problem.stat3.desc": { tr: "Enterprise araçların başlangıç maliyeti", en: "Starting cost of enterprise tools" },
  "problem.stat4": { tr: "∞", en: "∞" },
  "problem.stat4.label": { tr: "döngü", en: "cycle" },
  "problem.stat4.desc": { tr: "Bir ihlal kapanır, yenileri açılır", en: "One infringement closes, new ones open" },
  "problem.cta": { tr: "Manuel takip yavaş, kurumsal çözümler pahalı.", en: "Manual tracking is slow, enterprise tools are expensive." },
  "problem.cta.bold": { tr: "SahteAvcı bu boşluğu doldurur.", en: "SahteAvcı fills the gap." },

  // How it works
  "how.title": { tr: "SahteAvcı ile Kontrol Sizde", en: "Take Control with SahteAvcı" },
  "how.subtitle": { tr: "Kurulumdan şikayete kadar süreç birkaç dakikada tamamlanır.", en: "From setup to complaint — done in minutes." },
  "how.step1": { tr: "Yükle", en: "Install" },
  "how.step1.desc": { tr: "Chrome'a SahteAvcı'yı ekleyin. Kurulum 30 saniyeden kısa sürer.", en: "Add SahteAvcı to Chrome. Setup takes under 30 seconds." },
  "how.step2": { tr: "Tara", en: "Scan" },
  "how.step2.desc": { tr: "Markanızı, anahtar kelimenizi veya tescilli ibarenizi girin. Trendyol ve Hepsiburada'da otomatik tarama başlasın.", en: "Enter your brand, keyword or registered trademark. Automatic scanning starts on Trendyol and Hepsiburada." },
  "how.step3": { tr: "Delil Topla & Şikayet Et", en: "Collect Evidence & Report" },
  "how.step3.desc": { tr: "Şüpheli listingleri işaretleyin, delilleri kaydedin ve hazır şikayet taslağı oluşturun.", en: "Flag suspicious listings, save evidence and generate ready-to-use complaint drafts." },

  // Features
  "feat.title": { tr: "Neden SahteAvcı?", en: "Why SahteAvcı?" },
  "feat.subtitle": { tr: "Türk pazaryerleri için geliştirilmiş, hızlı ve uygulanabilir marka koruma araçları.", en: "Fast and actionable brand protection tools built for Turkish marketplaces." },
  "feat.1.title": { tr: "Akıllı Arama", en: "Smart Search" },
  "feat.1.desc": { tr: "Unicode hileleri, homoglifler ve Türkçe sahtecilik jargonu gibi zor varyasyonları yakalar.", en: "Catches tricky variations like unicode tricks, homoglyphs and Turkish counterfeit jargon." },
  "feat.2.title": { tr: "SHA-256 Delil Toplama", en: "SHA-256 Evidence Collection" },
  "feat.2.desc": { tr: "Toplanan kayıtları kriptografik doğrulamayla saklayarak delil güvenilirliğini artırır.", en: "Stores collected records with cryptographic verification to strengthen evidence reliability." },
  "feat.3.title": { tr: "Otomatik Şikayet Şablonları", en: "Automated Complaint Templates" },
  "feat.3.desc": { tr: "Trendyol ve Hepsiburada süreçlerine uygun, hızlı kullanılabilen hazır metinler üretir.", en: "Generates ready-to-use texts tailored to Trendyol and Hepsiburada complaint processes." },
  "feat.4.title": { tr: "Fiyat Anomali Tespiti", en: "Price Anomaly Detection" },
  "feat.4.desc": { tr: "Şüpheli derecede düşük fiyatlı ürünleri öne çıkararak riskli listingleri hızla görünür kılar.", en: "Highlights suspiciously low-priced products to quickly surface risky listings." },
  "feat.5.title": { tr: "Görsel Benzerlik Analizi", en: "Visual Similarity Analysis" },
  "feat.5.desc": { tr: "Değiştirilmiş ürün görselleri arasında benzerlik tespiti yaparak manuel gözden kaçan sonuçları yakalar.", en: "Detects similarity between modified product images to catch results missed by manual review." },
  "feat.6.title": { tr: "%100 Yerel İşleme", en: "100% Local Processing" },
  "feat.6.desc": { tr: "Verileriniz mümkün olduğunca tarayıcı içinde işlenir; güvenlik ve gizlilik odakta kalır.", en: "Your data is processed in-browser as much as possible; security and privacy remain the focus." },
  "feat.cta": { tr: "Tüm Özellikleri Gör", en: "See All Features" },

  // Pricing
  "price.title": { tr: "Her Büyüklükteki Marka İçin Uygun Fiyat", en: "Right Price for Every Brand Size" },
  "price.subtitle": { tr: "Ücretsiz başlayın, ihtiyaç büyüdükçe yükseltin.", en: "Start free, upgrade as you grow." },
  "price.free": { tr: "ÜCRETSİZ", en: "FREE" },
  "price.starter": { tr: "BAŞLANGIÇ", en: "STARTER" },
  "price.popular": { tr: "Popüler", en: "Popular" },
  "price.begin": { tr: "Başla", en: "Get Started" },
  "price.buy": { tr: "Satın Al", en: "Buy Now" },
  "price.note": { tr: "Tüm ücretli planlar için taksitli ödeme desteği mevcuttur.", en: "Installment payment available for all paid plans." },
  "price.detail": { tr: "Detaylı fiyat karşılaştırması →", en: "Detailed price comparison →" },

  // Testimonials
  "test.title": { tr: "Markaların Güvendiği Çözüm", en: "The Solution Brands Trust" },
  "test.subtitle": { tr: "Küçük ekiplerden uzman danışmanlara kadar, zaman kazandıran pratik koruma.", en: "Practical time-saving protection for small teams and expert consultants alike." },

  // FAQ (homepage)
  "faq.title": { tr: "Sık Sorulan Sorular", en: "Frequently Asked Questions" },
  "faq.all": { tr: "Tüm soruları görüntüle →", en: "View all questions →" },

  // Security
  "sec.title": { tr: "Güvenlik ve Güven Temelde", en: "Security and Trust at the Core" },
  "sec.subtitle": { tr: "Marka koruma aracında hız kadar güven de önemlidir.", en: "In a brand protection tool, trust matters as much as speed." },
  "sec.1.title": { tr: "%100 Yerel İşleme", en: "100% Local Processing" },
  "sec.1.desc": { tr: "Her şey tarayıcınızda gerçekleşir. Verilerinizi asla sunucularımıza göndermiyoruz.", en: "Everything happens in your browser. We never send your data to our servers." },
  "sec.2.title": { tr: "Hesap Erişimi Yok", en: "No Account Access" },
  "sec.2.desc": { tr: "SahteAvcı sadece herkese açık ürün sayfalarını okur. Trendyol veya Hepsiburada şifrenizi asla istemiyoruz.", en: "SahteAvcı only reads public product pages. We never ask for your Trendyol or Hepsiburada password." },
  "sec.3.title": { tr: "KVKK Uyumlu", en: "KVKK Compliant" },
  "sec.3.desc": { tr: "6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyum. Avrupa'da kayıtlı şirket.", en: "Full compliance with Turkish Personal Data Protection Law No. 6698. European registered company." },
  "sec.badge1": { tr: "Şifreli veriler", en: "Encrypted data" },
  "sec.badge2": { tr: "Avrupa şirketi", en: "European company" },
  "sec.badge3": { tr: "Şeffaf gizlilik politikası", en: "Transparent privacy policy" },

  // Team
  "team.title": { tr: "Ekibimiz", en: "Our Team" },
  "team.subtitle": { tr: "20+ yıllık fikri mülkiyet ve e-ticaret deneyimi.", en: "20+ years of IP and e-commerce experience." },

  // Newsletter
  "news.title": { tr: "Güncellemeleri Kaçırmayın", en: "Don't Miss Updates" },
  "news.subtitle": { tr: "Yeni özellikler, marka koruma ipuçları ve pazaryeri güncellemeleri için e-posta listemize katılın.", en: "Join our email list for new features, brand protection tips and marketplace updates." },
  "news.placeholder": { tr: "E-posta adresiniz", en: "Your email address" },
  "news.btn": { tr: "Abone Ol", en: "Subscribe" },
  "news.kvkk": { tr: "KVKK kapsamında kişisel verilerimin işlenmesini kabul ediyorum.", en: "I accept the processing of my personal data under KVKK." },
  "news.kvkk_error": { tr: "KVKK onayı gereklidir", en: "KVKK consent is required" },
  "news.footer": { tr: "Abone olarak iletişim ve güncelleme e-postaları almayı kabul etmiş olursunuz. İstediğiniz zaman ayrılabilirsiniz.", en: "By subscribing you agree to receive communication and update emails. You can unsubscribe anytime." },

  // Final CTA
  "final.title": { tr: "Markanızı Korumaya Bugün Başlayın", en: "Start Protecting Your Brand Today" },
  "final.subtitle": { tr: "Ücretsiz plan ile hemen başlayın. Kurulum dakikalar içinde tamamlanır.", en: "Get started with the free plan. Setup completes in minutes." },
  "final.footer": { tr: "Siz markanızı büyütün, SahteAvcı şüpheli listingleri takip etsin.", en: "You grow your brand, SahteAvcı tracks suspicious listings." },

  // Sticky CTA
  "sticky.text": { tr: "Markanızı Trendyol ve Hepsiburada'da koruyun", en: "Protect your brand on Trendyol & Hepsiburada" },
  "sticky.free": { tr: "Ücretsiz", en: "Free" },
  "sticky.btn": { tr: "Şimdi Yükle", en: "Install Now" },

  // Cookie
  "cookie.text": { tr: "🍪 Deneyiminizi iyileştirmek ve site trafiğini analiz etmek için çerezler kullanıyoruz. Gezinmeye devam ederek", en: "🍪 We use cookies to improve your experience and analyze site traffic. By continuing to browse, you accept our" },
  "cookie.policy": { tr: "Çerez Politikamızı", en: "Cookie Policy" },
  "cookie.suffix": { tr: "kabul etmiş olursunuz.", en: "." },
  "cookie.accept": { tr: "Kabul Et", en: "Accept" },
  "cookie.decline": { tr: "Reddet", en: "Decline" },
  "cookie.settings": { tr: "Ayarlar", en: "Settings" },

  // Exit popup
  "exit.title": { tr: "Bekleyin! Özel Teklif", en: "Wait! Special Offer" },
  "exit.desc": { tr: "Şimdi abone olun, PRO planında 14 gün ücretsiz deneyin.", en: "Subscribe now and get 14 days free on the PRO plan." },
  "exit.btn": { tr: "14 Günü Başlat", en: "Start 14 Days Free" },
  "exit.kvkk": { tr: "KVKK ve iletişim onayını kabul ediyorum", en: "I accept KVKK and communication consent" },
  "exit.close": { tr: "Hayır, teşekkürler", en: "No, thanks" },
  "exit.placeholder": { tr: "E-posta adresiniz", en: "Your email address" },

  // Footer
  "footer.slogan": { tr: "Markanızın Dijital Bekçisi", en: "Your Brand's Digital Guardian" },
  "footer.product": { tr: "Ürün", en: "Product" },
  "footer.company": { tr: "Şirket", en: "Company" },
  "footer.legal": { tr: "Yasal", en: "Legal" },
  "footer.security": { tr: "Güvenlik", en: "Security" },
  "footer.privacy": { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  "footer.terms": { tr: "Kullanım Koşulları", en: "Terms of Service" },
  "footer.kvkk": { tr: "KVKK", en: "KVKK" },
  "footer.cookies": { tr: "Çerez Politikası", en: "Cookie Policy" },
  "footer.refund": { tr: "İade Politikası", en: "Refund Policy" },
  "footer.encrypted": { tr: "Şifreli veriler", en: "Encrypted data" },
  "footer.european": { tr: "Avrupa şirketi", en: "European company" },
  "footer.kvkk_badge": { tr: "KVKK uyumlu", en: "KVKK compliant" },
  "footer.kvkk_line": { tr: "🇹🇷 KVKK haklarınızı kullanmak için: destek@sahteavci.com", en: "🇹🇷 To exercise your KVKK rights: destek@sahteavci.com" },
  "footer.about": { tr: "Hakkımızda", en: "About" },
  "footer.blog": { tr: "Blog", en: "Blog" },
  "footer.contact": { tr: "İletişim", en: "Contact" },
  "footer.features": { tr: "Özellikler", en: "Features" },
  "footer.pricing": { tr: "Fiyatlar", en: "Pricing" },
  "footer.compare": { tr: "Karşılaştırma", en: "Compare" },
  "footer.faq": { tr: "SSS", en: "FAQ" },

  // Hero demo card
  "hero.demo.suspicious": { tr: "2 Şüpheli Listing Tespit Edildi", en: "2 Suspicious Listings Detected" },
  "hero.demo.save": { tr: "Delil Kaydet →", en: "Save Evidence →" },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  tr: (key) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const saved = localStorage.getItem("sahteavci_lang") as Lang | null;
  const [lang, setLang] = useState<Lang>(saved ?? "tr");
  const setLangAndSave = (l: Lang) => {
    localStorage.setItem("sahteavci_lang", l);
    setLang(l);
  };
  const tr = (key: string) => t[key]?.[lang] ?? key;
  return (
    <LangContext.Provider value={{ lang, setLang: setLangAndSave, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
