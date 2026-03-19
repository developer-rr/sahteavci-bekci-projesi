import LegalPageTemplate from "@/components/LegalPageTemplate";

const sections = [
  {
    title: "Giriş",
    paragraphs: [
      "Bu iade politikası, SahteAvcı ücretli abonelik planları için geçerli olan iade koşullarını açıklamaktadır.",
      "Satın alma işlemi gerçekleştirmeden önce bu koşulları incelemeniz önerilir.",
    ],
  },
  {
    title: "İade Koşulları",
    paragraphs: [
      "Ücretli planlarda, satın alma tarihinden itibaren belirli bir süre içinde iade talebinde bulunulabilir. İade süresi ve koşulları satın alma aşamasında ayrıca belirtilecektir.",
      "İade talepleri destek@sahteavci.com adresine gönderilmelidir.",
    ],
  },
  {
    title: "İade Süreci",
    paragraphs: [
      "İade talepleri alındıktan sonra makul bir süre içinde değerlendirilir.",
      "Onaylanan iadeler, ödeme yönteminize bağlı olarak belirli bir süre içinde hesabınıza yansıtılır.",
    ],
  },
  {
    title: "İstisnalar",
    paragraphs: [
      "Ücretsiz plan kullanımı iade kapsamında değildir.",
      "Belirli promosyon veya indirimli satın alımlarda farklı koşullar geçerli olabilir. Bu koşullar ilgili kampanya şartlarında belirtilir.",
    ],
  },
  {
    title: "İletişim",
    paragraphs: [
      "İade politikasıyla ilgili sorularınız için destek@sahteavci.com adresinden bizimle iletişime geçebilirsiniz.",
      "Tüm talepleriniz mümkün olan en kısa sürede yanıtlanacaktır.",
    ],
  },
];

export default function RefundPage() {
  return <LegalPageTemplate title="İade Politikası" sections={sections} />;
}
