import LegalPageTemplate from "@/components/LegalPageTemplate";

const sections = [
  {
    title: "Çerez Nedir?",
    paragraphs: [
      "Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır.",
      "Bu dosyalar tercihlerinizi hatırlama, site performansını ölçme ve deneyiminizi iyileştirme amacıyla kullanılabilir.",
    ],
  },
  {
    title: "Kullanılan Çerez Türleri",
    paragraphs: [
      "Zorunlu çerezler: Sitenin temel işlevlerinin çalışması için gereklidir ve devre dışı bırakılamaz.",
      "Analitik çerezler: Site trafiğini ve kullanım kalıplarını anlamak için kullanılır. Bu çerezler onayınıza bağlı olarak etkinleştirilir.",
      "Tercih çerezleri: Dil ve görüntüleme tercihlerinizi kaydetmek için kullanılabilir.",
    ],
  },
  {
    title: "Çerezlerin Kullanım Amaçları",
    paragraphs: [
      "Çerezler; site işlevselliğinin sağlanması, kullanım analitiği, güvenlik ve kullanıcı deneyiminin kişiselleştirilmesi amacıyla kullanılabilir.",
      "Hiçbir çerez doğrudan kişisel kimlik bilginizi paylaşmak amacıyla üçüncü taraflarla paylaşılmaz.",
    ],
  },
  {
    title: "Çerez Yönetimi",
    paragraphs: [
      "Tarayıcınızın ayarlarından çerezleri devre dışı bırakabilir veya silebilirsiniz.",
      "Çerezlerin devre dışı bırakılması bazı site özelliklerinin beklendiği gibi çalışmamasına neden olabilir.",
      "İlk ziyaretinizde gösterilen çerez onay paneli aracılığıyla tercihlerinizi belirtebilirsiniz.",
    ],
  },
  {
    title: "İletişim",
    paragraphs: [
      "Çerez politikasıyla ilgili sorularınız için destek@sahteavci.com adresinden bizimle iletişime geçebilirsiniz.",
    ],
  },
];

export default function CookiesPage() {
  return <LegalPageTemplate title="Çerez Politikası" sections={sections} />;
}
