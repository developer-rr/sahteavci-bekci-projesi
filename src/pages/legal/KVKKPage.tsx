import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

const contentTR = `
<h2>1. Amaç ve Kapsam</h2>
<p>Bu bildirim, AB Genel Veri Koruma Yönetmeliği (GDPR) ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, SahteAvcı Chrome tarayıcı eklentisi ile bağlantılı olarak işlenen kişisel verilerinize ilişkin haklarınız hakkında sizi bilgilendirir.</p>
<p><strong>Önemli Not:</strong> SahteAvcı minimum düzeyde veri işler; tümü tarayıcınızda yerel olarak depolanır ve herhangi bir arka uç sunucu kullanılmaz. Harici sistemlerde işlediğimiz tek kişisel veri, ücretli aboneler için ExtensionPay/Stripe aracılığıyla e-posta adresiniz ve abonelik bilgilerinizdir. Tam şeffaflık için bu kapsamlı bildirimi sunuyoruz.</p>

<h2>2. Veri Sorumlusu</h2>
<p><strong>Kuruluş:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA<br/>
<strong>Kayıtlı olduğu ülke:</strong> Portekiz<br/>
<strong>Gizlilik İletişim:</strong> destek@sahteavci.com</p>

<h2>3. GDPR Kapsamındaki Haklarınız (AB Sakinleri)</h2>

<h3>3.1 Erişim Hakkı (Madde 15)</h3>
<p>Hangi verileri işlediğimiz hakkında onay talep edebilirsiniz. Temel Eklenti verileri yerel olarak saklanır — Eklenti arayüzü ve dışa aktarma özellikleri aracılığıyla doğrudan erişiminiz vardır. ExtensionPay/Stripe tarafından tutulan abonelik verileri için bizimle iletişime geçin, bilgiyi 30 gün içinde sağlayacağız.</p>

<h3>3.2 Düzeltme Hakkı (Madde 16)</h3>
<p>Marka bilgilerini, ayarları ve beyaz liste girişlerini doğrudan Eklenti'de düzeltebilirsiniz. Abonelik verisi düzeltmeleri için destek@sahteavci.com adresinden bizimle iletişime geçin.</p>

<h3>3.3 Silme Hakkı / Unutulma Hakkı (Madde 17)</h3>
<p>Bu hakkı aşağıdaki yollarla kullanabilirsiniz:</p>
<ul>
<li>Eklenti ayarlarında "Tüm Verileri Sil" seçeneğini kullanarak — tüm yerel verileri kalıcı olarak siler.</li>
<li>Eklentiyi kaldırarak — yerel olarak saklanan tüm verileri kaldırır.</li>
<li>destek@sahteavci.com adresine başvurarak ExtensionPay/Stripe tarafından tutulan abonelik verilerinin silinmesini talep ederek.</li>
</ul>

<h3>3.4 İşlemenin Kısıtlanması Hakkı (Madde 18)</h3>
<p>Eklenti ayarlarında belirli özellikleri (yapay zeka analizi, bildirimler) devre dışı bırakarak işlemeyi kısıtlayabilirsiniz.</p>

<h3>3.5 Veri Taşınabilirliği Hakkı (Madde 20)</h3>
<p>Eklenti yerleşik dışa aktarma sağlar:</p>
<ul>
<li>Delil verileri: CSV (BOM ile UTF-8) veya JSON.</li>
<li>Tarama geçmişi: CSV veya JSON.</li>
<li>Seçenekler → Dışa Aktarma sekmesinde mevcuttur.</li>
</ul>

<h3>3.6 İtiraz Hakkı (Madde 21)</h3>
<p>Özellikleri devre dışı bırakarak veya Eklentiyi kaldırarak itiraz edebilirsiniz.</p>

<h3>3.7 Otomatik Karar Verme ile İlgili Haklar (Madde 22)</h3>
<p>Eklenti, potansiyel olarak sahte ürünleri işaretlemek için otomatik analiz (buluşsal puanlama, yapay zeka analizi) kullanır. Bu analiz yalnızca tavsiye niteliğindedir — otomatik olarak hiçbir yasal veya benzer şekilde önemli karar alınmaz. Son karar veren her zaman sizsiniz. destek@sahteavci.com adresine başvurarak herhangi bir analiz sonucunun insan tarafından incelenmesini talep edebilirsiniz.</p>

<h3>3.8 Onayı Geri Çekme Hakkı</h3>
<p>İşlemenin onaya dayandığı durumlarda (örn. BYOK yapay zeka özellikleri), API anahtarlarınızı ayarlardan kaldırarak onayınızı geri çekin. Geri çekme, önceki yasal işlemeyi etkilemez.</p>

<h3>3.9 Şikayette Bulunma Hakkı</h3>
<p>Lider denetim otoritesi: CNPD (Comissão Nacional de Proteção de Dados) (www.cnpd.pt). Ayrıca AB üye devletinizdeki otoriteye de şikayette bulunabilirsiniz.</p>

<h2>4. KVKK Kapsamındaki Haklarınız (Türkiye'de İkamet Edenler)</h2>
<p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
<ul>
<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
<li>İşleme hakkında bilgi talep etme.</li>
<li>İşlemenin amacını ve verilerin amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
<li>Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme.</li>
<li>Eksik veya yanlış verilerin düzeltilmesini isteme.</li>
<li>KVKK'nın 7. maddesi kapsamında kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
<li>(5) ve (6) numaralı bentler kapsamında yapılan düzeltme/silme işlemlerinin üçüncü kişilere bildirilmesini isteme.</li>
<li>Münhasıran otomatik sistemler aracılığıyla analiz edilmesi sonucunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
<li>Kanuna aykırı işleme nedeniyle oluşan zararın giderilmesini talep etme.</li>
</ul>

<h3>4.1 KVKK Haklarını Nasıl Kullanabilirsiniz</h3>
<p>Talebinizi "KVKK Veri Sahibi Başvurusu" konulu olarak destek@sahteavci.com adresine e-posta ile gönderin. Adınızı, iletişim bilgilerinizi, T.C. Kimlik No.'nuzu (yabancı uyruklu kişiler için pasaport numarası) ve talebinizin açıklamasını ekleyin.</p>
<p>Yanıtımızdan memnun kalmazsanız, 30 gün içinde KVKK'ya (Kişisel Verileri Koruma Kurumu) (www.kvkk.gov.tr) başvurabilirsiniz.</p>

<h3>4.2 VERBİS Kaydı</h3>
<p>VENTOS ARQUEÁVEIS UNIPESSOAL LDA, Veri Sorumluları Sicili (VERBİS) ile ilgili KVKK Madde 16 kapsamındaki yükümlülüklerini değerlendirmiştir. Türkiye'de ikamet edenlerin minimum düzeyde kişisel verisini (ücretli abonelerin e-posta adresleriyle sınırlı) işleyen yabancı bir veri sorumlusu olarak, KVKK'dan bir bildirim alınması veya ilgili eşiklerin karşılanması durumunda VERBİS'e kayıt olacağız. Güncel kayıt durumu talep üzerine bildirilecektir.</p>

<h2>5. Yanıt Süreleri</h2>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Düzenleme</th><th class="text-left p-2 font-semibold">Standart Yanıt</th><th class="text-left p-2 font-semibold">Uzatılmış Yanıt</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">GDPR</td><td class="p-2">Alınmasından itibaren 30 gün</td><td class="p-2">Karmaşık talepler için 90 güne kadar (bildirimle)</td></tr>
<tr class="border-b border-border/50"><td class="p-2">KVKK</td><td class="p-2">Alınmasından itibaren 30 gün</td><td class="p-2">Yasal uzatma bulunmamaktadır</td></tr>
</tbody>
</table>
</div>

<h2>6. Doğrulama</h2>
<p>Taleplere yanıt vermeden önce, aşırı kişisel veri gerektirmeyen orantılı yöntemler kullanarak kimlik doğrulaması talep edebiliriz.</p>

<h2>7. Ücret</h2>
<p>Veri haklarını kullanmak ücretsizdir. Yürürlükteki yasalara göre açıkça temelsiz veya aşırı talepler için makul bir ücret talep edebiliriz.</p>

<h2>8. İletişim</h2>
<p><strong>Gizlilik İletişim:</strong> destek@sahteavci.com<br/>
<strong>Genel Destek:</strong> destek@sahteavci.com<br/>
<strong>Portekiz Veri Koruma Otoritesi:</strong> CNPD (Comissão Nacional de Proteção de Dados) — www.cnpd.pt<br/>
<strong>Türkiye Veri Koruma Otoritesi:</strong> KVKK (Kişisel Verileri Koruma Kurumu) — www.kvkk.gov.tr<br/>
<strong>AB Çevrimiçi Uyuşmazlık Çözüm Platformu:</strong> <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a></p>
`;

const contentEN = `
<h2>1. Purpose and Scope</h2>
<p>This notice informs you of your rights regarding personal data processed in connection with the SahteAvcı Chrome browser extension, in accordance with the EU General Data Protection Regulation (GDPR) and the Turkish Personal Data Protection Law No. 6698 (KVKK).</p>
<p><strong>Important Note:</strong> SahteAvcı processes minimal data, all stored locally in your browser, with no backend server. The only personal data we process on external systems is your email address and subscription information through ExtensionPay/Stripe for paid subscribers. We provide this comprehensive notice for full transparency.</p>

<h2>2. Data Controller</h2>
<p><strong>Entity:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA<br/>
<strong>Registered in:</strong> Portugal<br/>
<strong>Privacy Contact:</strong> destek@sahteavci.com</p>

<h2>3. Your Rights Under GDPR (EU Residents)</h2>

<h3>3.1 Right of Access (Article 15)</h3>
<p>You may request confirmation of what data we process. Core Extension data is stored locally — you have direct access through the Extension interface and export features. For subscription data held by ExtensionPay/Stripe, contact us and we will provide the information within 30 days.</p>

<h3>3.2 Right to Rectification (Article 16)</h3>
<p>You may correct brand information, settings, and whitelist entries directly in the Extension. For subscription data corrections, contact us at destek@sahteavci.com.</p>

<h3>3.3 Right to Erasure / Right to Be Forgotten (Article 17)</h3>
<p>You can exercise this right by:</p>
<ul>
<li>Using "Tüm Verileri Sil" (Delete All Data) in Extension settings — permanently erases all local data.</li>
<li>Uninstalling the Extension — removes all locally stored data.</li>
<li>Requesting deletion of subscription data held by ExtensionPay/Stripe by contacting destek@sahteavci.com.</li>
</ul>

<h3>3.4 Right to Restriction of Processing (Article 18)</h3>
<p>You may restrict processing by disabling specific features (AI analysis, notifications) in Extension settings.</p>

<h3>3.5 Right to Data Portability (Article 20)</h3>
<p>The Extension provides built-in export:</p>
<ul>
<li>Evidence data: CSV (UTF-8 with BOM) or JSON.</li>
<li>Scan history: CSV or JSON.</li>
<li>Available in Options → Export tab.</li>
</ul>

<h3>3.6 Right to Object (Article 21)</h3>
<p>You may object by disabling features or uninstalling the Extension.</p>

<h3>3.7 Rights Related to Automated Decision-Making (Article 22)</h3>
<p>The Extension uses automated analysis (heuristic scoring, AI analysis) to flag potentially counterfeit products. This analysis is advisory only — no legal or similarly significant decision is taken automatically. You are always the final decision-maker. You may request human review of any analysis result by contacting destek@sahteavci.com.</p>

<h3>3.8 Right to Withdraw Consent</h3>
<p>Where processing is based on consent (e.g., BYOK AI features), withdraw consent by removing your API keys from settings. Withdrawal does not affect prior lawful processing.</p>

<h3>3.9 Right to Lodge a Complaint</h3>
<p>Lead supervisory authority: CNPD (Comissão Nacional de Proteção de Dados) (www.cnpd.pt). You may also lodge a complaint with the authority in your EU member state.</p>

<h2>4. Your Rights Under KVKK (Turkish Residents)</h2>
<p>Under Article 11 of KVKK, you have the right to:</p>
<ul>
<li>Learn whether your personal data is processed.</li>
<li>Request information about processing.</li>
<li>Learn the purpose of processing and whether data is used in accordance with its purpose.</li>
<li>Know domestic or foreign third parties to whom data is transferred.</li>
<li>Request rectification of incomplete or incorrect data.</li>
<li>Request deletion or destruction under Article 7 of KVKK.</li>
<li>Request notification to third parties of rectification/deletion under items (5) and (6).</li>
<li>Object to outcomes reached exclusively through automated processing to your detriment.</li>
<li>Claim compensation for damages from unlawful processing.</li>
</ul>

<h3>4.1 How to Exercise KVKK Rights</h3>
<p>Submit your request by email to destek@sahteavci.com with subject "KVKK Veri Sahibi Başvurusu." Include your name, contact information, T.C. Kimlik No. (or passport number for foreign nationals), and a description of your request.</p>
<p>If unsatisfied with our response, apply to KVKK (Kişisel Verileri Koruma Kurumu) (www.kvkk.gov.tr) within 30 days.</p>

<h3>4.2 VERBİS Registration</h3>
<p>VENTOS ARQUEÁVEIS UNIPESSOAL LDA has assessed its obligations under KVKK Article 16 regarding registration with the Data Controllers Registry (VERBİS). As a foreign data controller processing minimal personal data of Turkish residents (limited to email addresses of paid subscribers), we will register with VERBİS if and when required by a notification from KVKK or upon meeting the applicable thresholds. Current registration status will be communicated upon request.</p>

<h2>5. Response Timeframes</h2>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Regulation</th><th class="text-left p-2 font-semibold">Standard Response</th><th class="text-left p-2 font-semibold">Extended Response</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">GDPR</td><td class="p-2">30 days from receipt</td><td class="p-2">Up to 90 days for complex requests (with notice)</td></tr>
<tr class="border-b border-border/50"><td class="p-2">KVKK</td><td class="p-2">30 days from receipt</td><td class="p-2">No statutory extension</td></tr>
</tbody>
</table>
</div>

<h2>6. Verification</h2>
<p>We may request identity verification before responding to requests, using proportionate methods that do not require excessive personal data.</p>

<h2>7. No Fee</h2>
<p>Exercising data rights is free. We may charge a reasonable fee for manifestly unfounded or excessive requests per applicable law.</p>

<h2>8. Contact</h2>
<p><strong>Privacy Contact:</strong> destek@sahteavci.com<br/>
<strong>General Support:</strong> destek@sahteavci.com<br/>
<strong>Portuguese DPA:</strong> CNPD (Comissão Nacional de Proteção de Dados) — www.cnpd.pt<br/>
<strong>Turkish DPA:</strong> KVKK (Kişisel Verileri Koruma Kurumu) — www.kvkk.gov.tr<br/>
<strong>EU ODR Platform:</strong> <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a></p>
`;

export default function KVKKPage() {
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
          {isTR ? "Veri Sahibi Hakları Bildirimi" : "Data Subject Rights Notice"}
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
