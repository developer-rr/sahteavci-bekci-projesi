import LegalPageTemplate from "@/components/LegalPageTemplate";

const sections = [
  {
    title: "Giriş ve Kapsam",
    paragraphs: [
      "Bu kullanım koşulları, SahteAvcı web sitesi ve Chrome eklentisi hizmetlerinin kullanımına ilişkin temel kuralları belirler.",
      "Hizmetleri kullanarak bu koşulları kabul etmiş sayılırsınız. Kabul etmemeniz durumunda hizmetleri kullanmamanız önerilir.",
    ],
  },
  {
    title: "Hizmet Tanımı",
    paragraphs: [
      "SahteAvcı, Türk pazaryerlerinde şüpheli ürün listinglerinin tespiti, delil toplama ve şikayet sürecinin düzenlenmesine yardımcı olan bir tarayıcı eklentisi ve ilgili web hizmetleridir.",
      "Hizmet kapsamı kullanılan plana göre değişiklik gösterebilir.",
    ],
  },
  {
    title: "Kullanıcı Yükümlülükleri",
    paragraphs: [
      "Kullanıcılar hizmeti yalnızca yasal amaçlarla ve üçüncü tarafların haklarına saygı göstererek kullanmayı taahhüt eder.",
      "Hizmetin kötüye kullanılması, yetkisiz erişim girişimleri veya tersine mühendislik faaliyetleri yasaktır.",
    ],
  },
  {
    title: "Fikri Mülkiyet",
    paragraphs: [
      "SahteAvcı markası, yazılımı ve içerikleri VENTOS ARQUEÁVEIS UNIPESSOAL LDA'ya aittir.",
      "Kullanıcılar, hizmet kapsamında oluşturdukları içerik ve verilerin sorumluluğunu taşır.",
    ],
  },
  {
    title: "Sorumluluk Sınırları",
    paragraphs: [
      "SahteAvcı, mümkün olduğunca kesintisiz ve doğru bir hizmet sunmayı hedefler; ancak hizmetin her koşulda eksiksiz çalışacağını garanti etmez.",
      "Kullanıcıların hizmeti kullanarak aldığı kararlardan doğan sonuçlardan SahteAvcı sorumlu tutulamaz.",
    ],
  },
  {
    title: "Değişiklikler ve İletişim",
    paragraphs: [
      "Bu koşullar zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlanacaktır.",
      "Sorularınız için destek@sahteavci.com adresinden bize ulaşabilirsiniz.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPageTemplate title="Kullanım Koşulları" sections={sections} />;
}
