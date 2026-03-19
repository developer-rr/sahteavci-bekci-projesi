import LegalPageTemplate from "@/components/LegalPageTemplate";

const sections = [
  {
    title: "Veri Sorumlusu",
    paragraphs: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu VENTOS ARQUEÁVEIS UNIPESSOAL LDA'dır.",
      "İletişim adresi: destek@sahteavci.com",
    ],
  },
  {
    title: "Kişisel Verilerin İşlenme Amaçları",
    paragraphs: [
      "Kişisel verileriniz; hizmetin sunulması, kullanıcı deneyiminin iyileştirilmesi, teknik destek sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenebilir.",
      "Veriler yalnızca belirtilen amaçlarla sınırlı olarak ve ölçülülük ilkesine uygun şekilde işlenir.",
    ],
  },
  {
    title: "Kişisel Verilerin Aktarılması",
    paragraphs: [
      "Kişisel veriler yasal zorunluluklar, hizmet altyapısı gereksinimleri veya açık rızanız doğrultusunda üçüncü taraflarla paylaşılabilir.",
      "Yurt dışı veri aktarımı söz konusu olduğunda KVKK'nın öngördüğü güvenceler sağlanması hedeflenir.",
    ],
  },
  {
    title: "Veri Saklama Süresi",
    paragraphs: [
      "Kişisel veriler, işlenme amaçlarının gerektirdiği süre boyunca saklanır.",
      "Yasal saklama yükümlülüklerinin sona ermesinin ardından veriler silinir, yok edilir veya anonim hale getirilir.",
    ],
  },
  {
    title: "İlgili Kişi Hakları",
    paragraphs: [
      "KVKK'nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltme talep etme, silinmesini veya yok edilmesini isteme ve işlemenin sınırlandırılmasını talep etme haklarına sahipsiniz.",
      "Haklarınızı kullanmak için destek@sahteavci.com adresine başvurabilirsiniz.",
    ],
  },
  {
    title: "Güncelleme ve İletişim",
    paragraphs: [
      "Bu aydınlatma metni gerektiğinde güncellenebilir. Güncellemeler bu sayfada yayınlanır.",
      "KVKK ile ilgili tüm talepleriniz için destek@sahteavci.com adresinden bizimle iletişime geçebilirsiniz.",
    ],
  },
];

export default function KVKKPage() {
  return <LegalPageTemplate title="KVKK Aydınlatma Metni" sections={sections} />;
}
