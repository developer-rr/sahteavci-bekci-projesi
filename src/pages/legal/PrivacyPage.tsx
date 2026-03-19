import LegalPageTemplate from "@/components/LegalPageTemplate";

const sections = [
  {
    title: "Giriş",
    paragraphs: [
      "Bu gizlilik politikası, SahteAvcı hizmetlerini kullanırken kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklamaktadır.",
      "Hizmetlerimizi kullanarak bu politikada belirtilen uygulamaları kabul etmiş sayılırsınız. Politika güncellendiğinde değişiklikler bu sayfada yayınlanacaktır.",
    ],
  },
  {
    title: "Toplanan Veriler",
    paragraphs: [
      "Hizmet kapsamında e-posta adresi, kullanım verileri ve tarayıcı eklentisi aracılığıyla oluşturulan tarama kayıtları gibi bilgiler toplanabilir.",
      "Toplanan verilerin kapsamı kullanılan plan seviyesine ve etkinleştirilen özelliklere bağlı olarak değişebilir.",
    ],
  },
  {
    title: "Verilerin Kullanım Amaçları",
    paragraphs: [
      "Toplanan veriler hizmetin sunulması, iyileştirilmesi, teknik destek sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılabilir.",
      "Veriler, açık rıza olmaksızın üçüncü taraflarla pazarlama amacıyla paylaşılmaz.",
    ],
  },
  {
    title: "Veri Güvenliği",
    paragraphs: [
      "Kişisel verilerin korunması için endüstri standartlarına uygun teknik ve idari önlemler alınması hedeflenmektedir.",
      "Şifrelenmiş bağlantılar, erişim kontrolleri ve düzenli güvenlik değerlendirmeleri bu önlemler arasında yer alır.",
    ],
  },
  {
    title: "Üçüncü Taraf Hizmetler",
    paragraphs: [
      "Hizmetin sunulması sırasında analitik, ödeme işleme veya altyapı sağlayıcıları gibi üçüncü taraf hizmetlerden yararlanılabilir.",
      "Bu sağlayıcılar kendi gizlilik politikalarına tabidir ve yalnızca hizmet kapsamında gerekli verilerle sınırlı erişime sahiptir.",
    ],
  },
  {
    title: "İletişim",
    paragraphs: [
      "Gizlilik politikasıyla ilgili sorularınız için destek@sahteavci.com adresinden bizimle iletişime geçebilirsiniz.",
      "Veri sorumlusu: VENTOS ARQUEÁVEIS UNIPESSOAL LDA.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPageTemplate title="Gizlilik Politikası" sections={sections} />;
}
