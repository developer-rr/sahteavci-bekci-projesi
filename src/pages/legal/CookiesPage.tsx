import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

const contentTR = `
<h2>1. Giriş</h2>
<p>Bu Çerez Politikası, VENTOS ARQUEÁVEIS UNIPESSOAL LDA'nın SahteAvcı Chrome tarayıcı eklentisi ve ilgili web sitesi (sahteavci.com) ile bağlantılı olarak çerezleri ve benzer teknolojileri nasıl kullandığını açıklar.</p>

<h2>2. Eklenti: Çerez Kullanılmamaktadır</h2>
<p>SahteAvcı Chrome eklentisi çerez, web işaretçisi (web beacon), izleme pikseli veya benzer herhangi bir izleme teknolojisi kullanmaz.</p>
<p>Eklenti verileri yalnızca aşağıdaki yollarla saklar:</p>
<ul>
<li><strong>chrome.storage.local</strong> — tarayıcı eklenti depolama API'si</li>
<li><strong>IndexedDB</strong> — delil ve tarama geçmişi için tarayıcıya özgü veritabanı</li>
<li><strong>chrome.storage.session</strong> — tarayıcı kapandığında silinen geçici veriler</li>
</ul>
<p>Bunlar tarayıcı eklenti depolama mekanizmalarıdır, çerez değildir. Web siteleri tarafından erişilebilir değildir, alan adları arasında paylaşılmaz ve siteler arası izleme için kullanılamaz.</p>

<h2>3. Web Sitesi Çerezleri</h2>
<p>Web sitemizi (sahteavci.com) ziyaret ettiğinizde aşağıdaki çerezler kullanılabilir:</p>

<h3>3.1 Kesinlikle Gerekli Çerezler</h3>
<p>Web sitesinin çalışması için zorunlu çerezler:</p>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Çerez</th><th class="text-left p-2 font-semibold">Amaç</th><th class="text-left p-2 font-semibold">Süre</th><th class="text-left p-2 font-semibold">Tür</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">session_id</td><td class="p-2">Oturum yönetimi</td><td class="p-2">Oturum</td><td class="p-2">Birinci taraf</td></tr>
<tr class="border-b border-border/50"><td class="p-2">csrf_token</td><td class="p-2">CSRF koruması</td><td class="p-2">Oturum</td><td class="p-2">Birinci taraf</td></tr>
</tbody>
</table>
</div>

<h3>3.2 Analitik Çerezleri</h3>
<p>Web sitesinde analitik hizmetleri devreye alınırsa, bunlar açık ön onayınızı gerektirecektir. Herhangi bir analitik etkinleştirilmeden önce bu politika spesifik ayrıntılarla güncellenecektir.</p>

<h3>3.3 Üçüncü Taraf Çerezleri</h3>
<p>Stripe veya ExtensionPay ödeme sayfaları, kendi gizlilik politikaları tarafından yönetilen kendi çerezlerini yerleştirebilir.</p>

<h2>4. Çerezleri Yönetme</h2>
<p>Web sitesi çerezlerini tarayıcı ayarlarınız aracılığıyla yönetebilirsiniz. Kesinlikle gerekli çerezleri devre dışı bırakmak web sitesi işlevselliğini bozabilir. Eklentinin çalışması çerez ayarlarından etkilenmez.</p>

<h2>5. Yasal Dayanak</h2>
<p>AB kullanıcıları için: kesinlikle gerekli çerezler, eGizlilik Yönergesi'nin (2002/58/EC) meşru menfaat muafiyeti kapsamında yerleştirilir. Diğer tüm çerezler GDPR Madde 6(1)(a) uyarınca açık onay gerektirir.</p>
<p>Türk kullanıcılar için: çerezler KVKK ve Elektronik Haberleşme Kanunu (5809 sayılı Kanun) tarafından düzenlenir. Bilgi Teknolojileri ve İletişim Kurumu (BTK) kılavuzları, zorunlu olmayan çerezler için onay gerektirir.</p>

<h2>6. Değişiklikler</h2>
<p>Yeni çerezler veya izleme teknolojileri uygulamaya alındığında bu politikayı güncelleyeceğiz. Önemli değişiklikler web sitemiz aracılığıyla duyurulacaktır.</p>

<h2>7. İletişim</h2>
<p><strong>E-posta:</strong> destek@sahteavci.com</p>
`;

const contentEN = `
<h2>1. Introduction</h2>
<p>This Cookie Policy explains how VENTOS ARQUEÁVEIS UNIPESSOAL LDA uses cookies and similar technologies in connection with the SahteAvcı Chrome browser extension and the associated website (sahteavci.com).</p>

<h2>2. Extension: No Cookies Used</h2>
<p>The SahteAvcı Chrome extension does not use cookies, web beacons, tracking pixels, or any similar tracking technologies.</p>
<p>The Extension stores data exclusively through:</p>
<ul>
<li><strong>chrome.storage.local</strong> — browser extension storage API</li>
<li><strong>IndexedDB</strong> — browser-native database for evidence and scan history</li>
<li><strong>chrome.storage.session</strong> — temporary data cleared when the browser closes</li>
</ul>
<p>These are browser extension storage mechanisms, not cookies. They are not accessible to websites, not shared across domains, and cannot be used for cross-site tracking.</p>

<h2>3. Website Cookies</h2>
<p>If you visit our website (sahteavci.com), the following cookies may be used:</p>

<h3>3.1 Strictly Necessary Cookies</h3>
<p>Essential cookies for the website to function:</p>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Cookie</th><th class="text-left p-2 font-semibold">Purpose</th><th class="text-left p-2 font-semibold">Duration</th><th class="text-left p-2 font-semibold">Type</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">session_id</td><td class="p-2">Session management</td><td class="p-2">Session</td><td class="p-2">First-party</td></tr>
<tr class="border-b border-border/50"><td class="p-2">csrf_token</td><td class="p-2">CSRF protection</td><td class="p-2">Session</td><td class="p-2">First-party</td></tr>
</tbody>
</table>
</div>

<h3>3.2 Analytics Cookies</h3>
<p>If analytics are deployed on the website, they will require your explicit prior consent. This policy will be updated with specific details before any analytics are activated.</p>

<h3>3.3 Third-Party Cookies</h3>
<p>Stripe or ExtensionPay payment pages may set their own cookies governed by their respective privacy policies.</p>

<h2>4. Managing Cookies</h2>
<p>You can manage website cookies through your browser settings. Disabling strictly necessary cookies may impair website functionality. The Extension's operation is not affected by cookie settings.</p>

<h2>5. Legal Basis</h2>
<p>For EU users: strictly necessary cookies are placed under the legitimate interest exemption of the ePrivacy Directive (2002/58/EC). All other cookies require explicit consent per GDPR Art. 6(1)(a).</p>
<p>For Turkish users: cookies are governed by KVKK and the Electronic Communications Law (Law No. 5809). The Turkish Information and Communication Technologies Authority (BTK) guidelines require consent for non-essential cookies.</p>

<h2>6. Changes</h2>
<p>We will update this policy when introducing new cookies or tracking. Material changes will be communicated through our website.</p>

<h2>7. Contact</h2>
<p><strong>Email:</strong> destek@sahteavci.com</p>
`;

export default function CookiesPage() {
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
          {isTR ? "Çerez Politikası" : "Cookie Policy"}
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
