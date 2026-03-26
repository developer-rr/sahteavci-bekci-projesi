import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

const contentTR = `
<h2>1. Genel</h2>
<p>Bu İade Politikası, VENTOS ARQUEÁVEIS UNIPESSOAL LDA tarafından sunulan SahteAvcı'nın tüm ücretli abonelikleri için geçerlidir. Ödeme işlemleri ExtensionPay aracılığıyla Stripe tarafından gerçekleştirilir.</p>

<h2>2. Cayma Hakkı (14 Günlük Süre)</h2>
<p>AB Direktifi 2011/83/EU ve 6502 sayılı Türk Kanunu (Madde 48 ve Mesafeli Sözleşmeler Yönetmeliği) uyarınca, satın alma tarihinden itibaren 14 takvim günü içinde herhangi bir neden belirtmeksizin aboneliğinizden cayma hakkına sahipsiniz.</p>
<p>Bu hakkı kullanmak için aşağıdaki adrese açık bir cayma beyanı gönderin:<br/>
<strong>E-posta:</strong> destek@sahteavci.com</p>

<h2>3. Dijital İçerik Feragati</h2>
<p>AB Direktifi 2011/83/EU'nun 16(m) maddesi ve Mesafeli Sözleşmeler Yönetmeliği'nin 53/m maddesi uyarınca: cayma süresi içinde premium özellikleri etkinleştirerek, dijital içeriğin derhal sağlanmasına açıkça onay vermiş olursunuz ve böylece cayma hakkınızdan feragat ettiğinizi kabul edersiniz.</p>
<p>Satın alma sürecinde açık bir onay kutusu aracılığıyla bu feragat hakkında bilgilendirileceksiniz. Premium özellikleri etkinleştirmezseniz, cayma hakkınızı tam olarak korursunuz.</p>

<h2>4. İade Uygunluğu</h2>
<p>Aşağıdaki durumlarda tam iade almaya hak kazanırsınız:</p>
<ul>
<li>Satın alma tarihinden itibaren 14 gün içinde talep etmeniz VE cayma hakkınızdan feragat etmemiş olmanız.</li>
<li>Eklentinin temel işlevselliğini engelleyen önemli, tekrarlanabilir bir teknik kusura sahip olması ve makul bir süre içinde çözüm sağlayamamamız.</li>
<li>Hatalı ücretlendirme (mükerrer, yanlış tutar, yetkisiz) yapılmış olması.</li>
</ul>

<h2>5. İade Dışı Durumlar</h2>
<p>Aşağıdaki durumlarda iade yapılmaz:</p>
<ul>
<li>14 günlük cayma süresinin ardından yapılan talepler (teknik kusur nedeniyle olanlar hariç).</li>
<li>Tespit doğruluğundan duyulan memnuniyetsizlik (buluşsal algoritmalar %100 doğruluk garanti etmez).</li>
<li>Pazaryeri web sitesi düzenlerindeki değişikliklerin işlevselliği geçici olarak etkilemesi.</li>
<li>Yapay zeka sağlayıcı sorunları nedeniyle BYOK özelliklerinin kullanılamaması (geçersiz anahtar, aşılmış kota, kesinti).</li>
<li>Kullanım Koşullarının ihlali sonucu hesap askıya alınması.</li>
<li>Dijital içerik feragatinin usulüne uygun olarak uygulandığı durumlar.</li>
</ul>

<h2>6. İade Prosedürü</h2>
<ul>
<li>destek@sahteavci.com adresine abonelik e-postanız ve iade nedeninizle birlikte bir iade talebi gönderin.</li>
<li>Yedi (7) iş günü içinde talebinizi onaylayacağız.</li>
<li>Uygun bulunması halinde, iade Stripe aracılığıyla orijinal ödeme yönteminize 5–10 iş günü içinde işlenir.</li>
<li>İade işlendiğinde e-posta ile onay alacaksınız.</li>
</ul>

<h2>7. Orantılı İadeler</h2>
<p>14 günlük süre sonrasında dönem ortası iptallerinde orantılı iade yapılmaz. Aboneliğiniz mevcut fatura döneminin sonuna kadar aktif kalır.</p>

<h2>8. Teknik Sorun İadeleri</h2>
<ul>
<li>Sorunu, açıklama ve ekran görüntüleriyle birlikte destek@sahteavci.com adresine bildirin.</li>
<li>Makul bir süre içinde çözüm sağlamaya çalışacağız.</li>
<li>Çözülemez olması durumunda, 14 günlük süreden bağımsız olarak mevcut fatura döneminin tam iadesine hak kazanırsınız.</li>
</ul>

<h2>9. Türk Tüketici Tahkimi</h2>
<p>Türk tüketiciler, 186.000 TL ve altındaki değerdeki uyuşmazlıklar için Tüketici Hakem Heyeti'ne başvurabilir (2026 yılı eşiği, Ticaret Bakanlığı tarafından yıllık olarak güncellenir). Bu eşiğin üzerindeki uyuşmazlıklarda, zorunlu arabuluculuğa tabi olarak Tüketici Mahkemesi yetkilidir. Bu hak, doğrudan bizimle iletişime geçme hakkınıza ek olarak geçerlidir.</p>

<h2>10. Kötüye Kullanımın Önlenmesi</h2>
<p>Kötüye kullanım örüntüsü sergileyen kullanıcıların (örn. tekrarlanan satın alma ve iade döngüleri) iade taleplerini reddetme hakkımızı saklı tutarız. Bu durum, AB veya Türk tüketici koruma mevzuatı kapsamındaki yasal haklarınızı etkilemez.</p>

<h2>11. İletişim</h2>
<p><strong>E-posta:</strong> destek@sahteavci.com<br/>
<strong>Şirket:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</p>
`;

const contentEN = `
<h2>1. General</h2>
<p>This Refund Policy applies to all paid subscriptions for SahteAvcı offered by VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Payment processing is handled by Stripe through ExtensionPay.</p>

<h2>2. Right of Withdrawal (14-Day Period)</h2>
<p>In accordance with EU Directive 2011/83/EU and Turkish Law No. 6502 (Article 48 and the Regulation on Distance Contracts), you have the right to withdraw from your subscription within 14 calendar days of purchase without providing any reason.</p>
<p>To exercise this right, send a clear statement of withdrawal to:<br/>
<strong>Email:</strong> destek@sahteavci.com</p>

<h2>3. Digital Content Waiver</h2>
<p>In accordance with Article 16(m) of EU Directive 2011/83/EU and Article 53/m of the Turkish Regulation on Distance Contracts: by activating premium features during the withdrawal period, you expressly consent to the immediate provision of digital content and acknowledge that you thereby waive your right of withdrawal.</p>
<p>You will be informed of this waiver during the purchase process through a clear checkbox. If you do not activate premium features, you retain your full right of withdrawal.</p>

<h2>4. Refund Eligibility</h2>
<p>You are eligible for a full refund if:</p>
<ul>
<li>You request within 14 days of purchase AND have not waived your withdrawal right.</li>
<li>The Extension has a material, reproducible technical defect preventing core functionality, and we cannot resolve it within a reasonable timeframe.</li>
<li>You were charged in error (duplicate, wrong amount, unauthorized).</li>
</ul>

<h2>5. Refund Exclusions</h2>
<p>Refunds will NOT be granted for:</p>
<ul>
<li>Requests after the 14-day withdrawal period (unless due to technical defect).</li>
<li>Dissatisfaction with detection accuracy (heuristic algorithms do not guarantee 100% accuracy).</li>
<li>Changes to marketplace website layouts that temporarily affect functionality.</li>
<li>Inability to use BYOK features due to AI provider issues (invalid key, exceeded quota, outage).</li>
<li>Violation of Terms of Service resulting in suspension.</li>
<li>Cases where the digital content waiver has been properly exercised.</li>
</ul>

<h2>6. Refund Procedure</h2>
<ul>
<li>Send a refund request to destek@sahteavci.com with your subscription email and reason for refund.</li>
<li>We will acknowledge within seven (7) business days.</li>
<li>If eligible, the refund is processed through Stripe to the original payment method within 5–10 business days.</li>
<li>You will receive email confirmation when processed.</li>
</ul>

<h2>7. Pro-Rata Refunds</h2>
<p>For mid-cycle cancellations after the 14-day period, no pro-rata refunds are provided. Your subscription remains active until the end of the current billing cycle.</p>

<h2>8. Technical Issue Refunds</h2>
<ul>
<li>Report the issue to destek@sahteavci.com with a description and screenshots.</li>
<li>We will attempt to resolve within a reasonable timeframe.</li>
<li>If unresolvable, you are entitled to a full refund of the current billing period regardless of the 14-day period.</li>
</ul>

<h2>9. Turkish Consumer Arbitration</h2>
<p>Turkish consumers may apply to the Tüketici Hakem Heyeti (Consumer Arbitration Committee) for disputes valued at or below 186,000 TL (threshold for 2026, updated annually by the Turkish Ministry of Commerce). For disputes above this threshold, Tüketici Mahkemesi (Consumer Court) has jurisdiction, subject to mandatory mediation (zorunlu arabuluculuk). This right is in addition to your right to contact us directly.</p>

<h2>10. Abuse Prevention</h2>
<p>We reserve the right to refuse refund requests from users demonstrating a pattern of abuse (e.g., repeated purchase-and-refund cycles). This does not affect your statutory rights under EU or Turkish consumer protection law.</p>

<h2>11. Contact</h2>
<p><strong>Email:</strong> destek@sahteavci.com<br/>
<strong>Company:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</p>
`;

export default function RefundPage() {
  const { lang } = useLang();
  const isTR = lang === "tr";

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {isTR ? "Geri" : "Back"}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {isTR ? "İade Politikası" : "Refund Policy"}
        </h1>
        <p className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-wide">
          SAHTEAVCI — VENTOS ARQUEÁVEIS UNIPESSOAL LDA
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          {isTR ? "Son güncelleme: 1 Nisan 2026 | Sürüm 1.0" : "Last updated: April 1, 2026 | Version 1.0"}
        </p>

        <div
          className="prose prose-sm max-w-none
            prose-headings:text-foreground prose-headings:font-semibold
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-3
            prose-li:text-muted-foreground prose-li:leading-relaxed
            prose-ul:my-3 prose-ol:my-3
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-table:text-muted-foreground
            prose-th:text-foreground prose-th:font-semibold
            prose-td:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: isTR ? contentTR : contentEN }}
        />
      </div>
    </Section>
  );
}
