import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

const contentTR = `
<h2>1. Koşulların Kabulü</h2>
<p>Bu Kullanım Koşulları ("Koşullar"), SahteAvcı Chrome tarayıcı eklentisini ("Eklenti" veya "Hizmet") kullanımınızı düzenleyen, siz ("Kullanıcı," "siz") ile VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("Şirket," "biz," "bize") arasında yasal olarak bağlayıcı bir sözleşme oluşturur. Eklentiyi yükleyerek, erişerek veya kullanarak bu Koşullara bağlı olmayı kabul etmiş olursunuz. Kabul etmiyorsanız, Eklentiyi yüklememeli veya kullanmamalısınız.</p>
<p>Bu Koşullar Portekiz yasalarına tabidir. Türkiye'de ikamet eden tüketiciler için, Türk hukukunun zorunlu tüketici koruma hükümleri (6502 sayılı Tüketicinin Korunması Hakkında Kanun, 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun) ek olarak uygulanır. AB'deki tüketiciler için, ikamet ettikleri ülkenin zorunlu tüketici koruma hükümleri de geçerlidir.</p>

<h2>2. Hizmet Tanımı</h2>
<p>SahteAvcı, marka sahiplerinin altı Türk e-ticaret pazaryerinde potansiyel olarak sahte ürünleri tespit etmesine yardımcı olan bir Chrome tarayıcı eklentisidir: Trendyol, Hepsiburada, n11, Amazon.com.tr, Dolap ve Çiçeksepeti. Eklenti şunları sağlar:</p>
<ul>
<li>Anahtar kelime eşleştirme, Unicode homoglif tespiti ve Türkçe dil jargon analizi (27 sahtecilikle ilgili terim) kullanarak metin tabanlı sahte ürün tespiti.</li>
<li>Listelenen fiyatları kullanıcı tanımlı ortalama fiyatlarla karşılaştıran fiyat anomali tespiti.</li>
<li>Görsel ürün karşılaştırması için algısal görüntü hashleme (pHash).</li>
<li>OpenAI, Anthropic ve Hugging Face ile Kendi Anahtarını Getir (BYOK) entegrasyonu aracılığıyla yapay zeka destekli analiz.</li>
<li>SHA-256 hashleme ve OpenTimestamps aracılığıyla isteğe bağlı Bitcoin blok zinciri zaman damgalaması ile delil toplama.</li>
<li>CSV (BOM ile UTF-8) ve JSON formatlarında delil dışa aktarımı.</li>
<li>Pazaryeri listeleme sayfaları için toplu tarama yeteneği.</li>
</ul>

<h2>3. Uygunluk</h2>
<p>Eklentiyi kullanmak için en az 18 yaşında olmanız gerekmektedir. Eklentiyi kullanarak, en az 18 yaşında olduğunuzu ve bağlayıcı sözleşmeler yapma yasal kapasitesine sahip olduğunuzu beyan ve garanti edersiniz. Eklentiyi bir tüzel kişilik adına kullanıyorsanız, bu tüzel kişiliği bu Koşullara bağlama yetkisine sahip olduğunuzu beyan edersiniz.</p>

<h2>4. Kullanıcı Hesapları ve Abonelikler</h2>
<p>Eklenti ücretsiz ve ücretli katmanlar sunar. Ücretsiz katman kullanımı hesap gerektirmez. Ücretli abonelikler için, ExtensionPay'in Stripe barındırmalı ödeme sayfasında ödeme sırasında e-posta adresinizi sağlarsınız. Abonelik durumunuz ExtensionPay ile Eklenti arasında senkronize edilir. Ödeme işlemleri tamamen Stripe (PCI-DSS Seviye 1 sertifikalı) tarafından yürütülür. Ödeme kartı bilgilerinizi hiçbir zaman almıyoruz veya saklamıyoruz.</p>

<h2>5. BYOK (Kendi Anahtarını Getir) Modeli</h2>
<p>Bazı gelişmiş özellikler, üçüncü taraf yapay zeka hizmetleri için kendi API anahtarlarınızı sağlamanızı gerektirir:</p>
<ul>
<li><strong>Sizin Sorumluluğunuz:</strong> API anahtarlarınızı edinmek, sürdürmek ve güvence altına almak tamamen sizin sorumluluğunuzdadır. Her yapay zeka sağlayıcısının (OpenAI, Anthropic, Hugging Face) hizmet koşullarına uymanız gerekmektedir.</li>
<li><strong>Maliyetler:</strong> API anahtarlarınızın kullanımı yoluyla ortaya çıkan tüm maliyetlerden tamamen siz sorumlusunuz. Yapay zeka sağlayıcılarının ücretleri üzerinde kontrolümüz yoktur ve bunlardan sorumlu değiliz.</li>
<li><strong>Veri İletimi:</strong> BYOK özelliklerini kullandığınızda, ürün metin ve/veya görsel verileri doğrudan tarayıcınızdan yapay zeka sağlayıcısına iletilir. Bu verileri yönlendirmiyoruz, saklamıyoruz veya erişmiyoruz.</li>
<li><strong>Vekillik Yok:</strong> OpenAI, Anthropic veya Hugging Face'in acentesi, temsilcisi veya ortağı değiliz.</li>
</ul>

<h2>6. Abonelik Planları ve Ödeme</h2>
<p>Eklenti aşağıdaki abonelik katmanlarını sunar:</p>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Plan</th><th class="text-left p-2 font-semibold">Fiyat</th><th class="text-left p-2 font-semibold">Markalar</th><th class="text-left p-2 font-semibold">Tarama/Ay</th><th class="text-left p-2 font-semibold">Temel Özellikler</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">Free</td><td class="p-2">$0</td><td class="p-2">1</td><td class="p-2">50</td><td class="p-2">Temel tarama, jargon tespiti</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Starter</td><td class="p-2">$49/ay</td><td class="p-2">5</td><td class="p-2">500</td><td class="p-2">pHash karşılaştırma, CSV dışa aktarım</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Pro</td><td class="p-2">$99/ay</td><td class="p-2">Sınırsız</td><td class="p-2">Sınırsız</td><td class="p-2">BYOK AI, blok zinciri kanıtları, görsel analiz</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Expert</td><td class="p-2">$149/ay</td><td class="p-2">Sınırsız</td><td class="p-2">Sınırsız</td><td class="p-2">CLIP API, mahkemeye hazır dışa aktarım, öncelikli destek</td></tr>
</tbody>
</table>
</div>
<p>Pro seviyesi özelliklere erişim sağlayan 14 günlük ücretsiz deneme süresi yeni yüklemeler için mevcuttur. Deneme süresi yükleme üzerine otomatik olarak başlar ve ödeme bilgisi gerektirmez. Deneme süresi sona erdikten sonra, abone olmadığınız sürece Ücretsiz katmana düşürülürsünüz.</p>

<h2>7. Fikri Mülkiyet</h2>
<h3>7.1 Bizim Fikri Mülkiyetimiz</h3>
<p>Tüm kod, algoritmalar, tasarımlar, kullanıcı arayüzü öğeleri, belgeler ve SahteAvcı ticari markası ve markalaşması dahil olmak üzere Eklenti, VENTOS ARQUEÁVEIS UNIPESSOAL LDA'nın münhasır mülkiyetindedir ve Portekiz, Türk, AB ve uluslararası fikri mülkiyet yasaları tarafından korunmaktadır.</p>

<h3>7.2 Lisans Verilmesi</h3>
<p>Bu Koşullara tabi olarak, size Eklentiyi kişisel veya dahili iş amaçlarınız için yüklemek ve kullanmak üzere sınırlı, münhasır olmayan, devredilemez, geri alınabilir bir lisans veriyoruz. Bu lisans alt lisans verme, dağıtma, değiştirme veya türev eserler oluşturma hakkını içermez.</p>

<h3>7.3 Kısıtlamalar</h3>
<p>Aşağıdakileri yapamazsınız:</p>
<ul>
<li>Zorunlu yasanın (AB Direktifi 2009/24/EC ve 5846 sayılı Türk Telif Hakkı Kanunu dahil) açıkça izin verdiği ölçü dışında, Eklentinin kaynak kodunu tersine mühendislik, derlemeyi çözme, parçalara ayırma veya türetmeye çalışma.</li>
<li>Eklentiyi değiştirme, uyarlama, çevirme veya Eklentiye dayalı türev eserler oluşturma.</li>
<li>Eklentiyi kiralama, leasing, ödünç verme, alt lisanslama, dağıtma veya herhangi bir üçüncü tarafa devretme.</li>
<li>Eklentiyi rakip bir ürün veya hizmet geliştirmek için kullanma.</li>
<li>Eklenti üzerindeki herhangi bir mülkiyet bildirimi veya etiketi kaldırma, değiştirme veya gizleme.</li>
<li>Eklentiyi, Türk 6769 sayılı Kanun, AB fikri mülkiyet düzenlemeleri veya pazaryeri hizmet koşulları dahil olmak üzere herhangi bir geçerli yasayı ihlal ederek kullanma.</li>
</ul>

<h3>7.4 Sizin İçeriğiniz</h3>
<p>Marka bilgileriniz, delil verileriniz ve Eklentiyi kullanarak oluşturduğunuz diğer içerikler üzerindeki tüm mülkiyet haklarınızı korursunuz. Eklentinin tespit algoritmalarını iyileştirmek için anonimleştirilmiş, toplulaştırılmış kullanım kalıplarını (hiçbir zaman bireysel marka adları, deliller veya iş verileri değil) kullanmak üzere bize sınırlı, münhasır olmayan, telifsiz bir lisans verirsiniz.</p>

<h2>8. Yasaklı Kullanımlar</h2>
<p>Eklentiyi aşağıdaki amaçlarla kullanmamayı kabul edersiniz:</p>
<ul>
<li>Yanlış, sahte veya kötüye kullanılan kaldırma talepleri veya fikri mülkiyet şikayetleri dosyalama.</li>
<li>Diğer pazaryeri satıcılarını taciz etme, sindirme veya zarar verme.</li>
<li>Marka korumayla ilgisi olmayan amaçlarla satıcılar veya ürünler hakkında veri toplama.</li>
<li>Abonelik kısıtlamalarını, deneme sınırlamalarını veya özellik kapılarını atlatma.</li>
<li>Desteklenen pazaryerlerinin işleyişine müdahale etme veya hizmet koşullarını ihlal etme.</li>
<li>Türk, Portekiz, AB veya herhangi bir geçerli yasa kapsamında herhangi bir yasadışı faaliyette bulunma.</li>
<li>Şirkete karşı rekabetçi faaliyette bulunma.</li>
</ul>

<h2>9. Garanti Reddi</h2>
<p>EKLENTİ, TİCARİ ELVERİŞLİLİK, BELİRLİ BİR AMACA UYGUNLUK, İHLAL ETMEME VE DOĞRULUK DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE, AÇIK, ZIMNİ VEYA YASAL HERHANGİ BİR GARANTİ OLMAKSIZIN "OLDUĞU GİBİ" VE "MEVCUT OLDUĞU ŞEKİLDE" SUNULUR.</p>
<p>Şunları garanti etmiyoruz: Eklentinin tüm sahte ürünleri tespit edeceğini; tespit sonuçlarının doğru veya eksiksiz olacağını; delillerin herhangi bir mahkemede kabul edilebilir olacağını; kaldırma şablonlarının ihlal eden listelerin kaldırılmasıyla sonuçlanacağını; veya Eklentinin kesintisiz veya hatasız çalışacağını.</p>

<h2>10. Sorumluluk Sınırlaması</h2>
<p>YASANIN İZİN VERDİĞİ AZAMİ ÖLÇÜDE, TOPLAM SORUMLULUĞUMUZ TALEPTEKİ BİR (1) AY ÖNCEKİ DÖNEMDE BİZE ÖDEDİĞİNİZ TUTARI AŞMAYACAKTIR. DOLAYLI, ARIZİ, ÖZEL, SONUÇSAL VEYA CEZAİ ZARARLARDAN SORUMLU OLMAYACAĞIZ.</p>
<p><strong>Türk Tüketici Koruması:</strong> bu Koşullardaki hiçbir şey, 6502 sayılı Türk Kanunu kapsamında hariç tutulamayan sorumluluğu sınırlamaz. Türk tüketiciler için, Türk hukukunun zorunlu garanti ve sorumluluk hükümleri geçerlidir.</p>
<p><strong>AB Tüketici Koruması:</strong> bu Koşullardaki hiçbir şey, 2011/83/EU Direktifi dahil olmak üzere zorunlu AB tüketici koruma direktifleri kapsamında hariç tutulamayan sorumluluğu sınırlamaz.</p>

<h2>11. Tazminat</h2>
<p>Aşağıdakilerden kaynaklanan her türlü talep, sorumluluk, zarar, maliyet ve giderlerden (makul avukatlık ücretleri dahil) VENTOS ARQUEÁVEIS UNIPESSOAL LDA'yı tazmin etmeyi, savunmayı ve zararsız tutmayı kabul edersiniz: (a) Eklentiyi kullanımınız; (b) bu Koşulları ihlal etmeniz; (c) fikri mülkiyet hakları dahil üçüncü taraf haklarını ihlal etmeniz; (d) Eklenti verilerine dayalı olarak dosyalanan yanlış veya kötüye kullanılan kaldırma talepleri; veya (e) geçerli yasayı ihlal etmeniz.</p>
<p><strong>Türk Tüketici Notu:</strong> Türk tüketiciler için tazminat yükümlülükleri, 6502 sayılı Türk Kanunu'nun izin verdiği ölçüde sınırlıdır.</p>

<h2>12. Delil ve Yasal Sorumluluk Reddi</h2>
<p><strong>ÖNEMLİ:</strong> SahteAvcı bir izleme ve delil toplama aracıdır. Hukuki danışmanlık TEŞKİL ETMEZ ve avukat-müvekkil ilişkisi OLUŞTURMAZ.</p>
<ul>
<li>Ekran görüntüleri, SHA-256 hashleri ve blok zinciri zaman damgaları yalnızca referansınız ve kayıt tutmanız içindir.</li>
<li>Bu tür delillerin kabul edilebilirliği geçerli yasaya, delil kurallarına ve mahkeme takdirine bağlıdır.</li>
<li>OpenTimestamps aracılığıyla blok zinciri kanıtı yalnızca veri sabitleme zamanını doğrular, temel verilerin doğruluğunu veya gerçekliğini değil.</li>
<li>Raporlanan listelerin gerçekten fikri mülkiyet haklarınızı ihlal edip etmediğini doğrulamak tamamen sizin sorumluluğunuzdadır. Yanlış fikri mülkiyet şikayetleri dosyalamak, 6769 sayılı Türk Kanunu (Md. 157), AB hukuku ve pazaryeri koşulları kapsamında sorumluluğunuza yol açabilir.</li>
<li>Hukuki işlem başlatmadan önce nitelikli bir fikri mülkiyet avukatına danışmanızı şiddetle tavsiye ederiz.</li>
</ul>

<h2>13. Dava Öncesi Uyuşmazlık Çözümü</h2>
<p>Hukuki işlem başlatmadan önce, uyuşmazlığı ve önerilen çözümü açıklayan yazılı bir bildirim <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> adresine göndermelisiniz. Uyuşmazlığı dostane yollarla çözmek için yanıt vermek üzere 30 günümüz olacaktır. Bu gereklilik, herhangi bir hukuki işlem için zorunlu bir ön koşuldur.</p>
<p>Türk tüketiciler için: bu, 186.000 TL veya altındaki uyuşmazlıklar için Tüketici Hakem Heyetine (Ticaret Bakanlığı tarafından yıllık olarak güncellenen 2026 eşiği) veya bu eşiğin üzerindeki uyuşmazlıklar için Tüketici Mahkemesine başvurma hakkınızı sınırlamaz.</p>
<p>AB tüketicileri için: <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a> adresindeki AB Çevrimiçi Uyuşmazlık Çözümü platformunu da kullanabilirsiniz.</p>

<h2>14. Uygulanacak Hukuk ve Yargı Yetkisi</h2>
<p>Bu Koşullar Portekiz hukukuna tabidir. Uyuşmazlıklar Lizbon, Portekiz mahkemelerinin münhasır yargı yetkisine tabi olacaktır. Türkiye'nin (6502 sayılı Kanun, 6563 sayılı Kanun) ve/veya ikamet ettiğiniz AB üye devletinin zorunlu tüketici koruma hükümleri, daha fazla koruma sağladıkları durumlarda ek olarak uygulanır.</p>

<h2>15. Fesih</h2>
<p>Haklı nedenle (bu Koşulların ihlali dahil) erişiminizi istediğimiz zaman feshedebilir veya askıya alabiliriz. Eklentiyi kaldırarak ve aboneliğinizi iptal ederek feshedebilirsiniz. Fesih üzerine, 7. Bölüm (Fikri Mülkiyet), 9. Bölüm (Sorumluluk Reddi), 10. Bölüm (Sorumluluk), 11. Bölüm (Tazminat), 12. Bölüm (Delil Sorumluluk Reddi) ve 14. Bölüm (Uygulanacak Hukuk) yürürlükte kalır.</p>

<h2>16. İletişim</h2>
<ul>
<li><strong>E-posta:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>Şirket:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</li>
</ul>
`;

const contentEN = `
<h2>1. Acceptance of Terms</h2>
<p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you") and VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("Company," "we," "us") governing your use of the SahteAvcı Chrome browser extension ("Extension" or "Service"). By installing, accessing, or using the Extension, you agree to be bound by these Terms. If you do not agree, you must not install or use the Extension.</p>
<p>These Terms are governed by the laws of Portugal. For consumers resident in Turkey, the mandatory consumer protection provisions of Turkish law (Law No. 6502 on Consumer Protection, Law No. 6563 on Regulation of Electronic Commerce) shall additionally apply. For consumers in the EU, mandatory consumer protection provisions of their country of residence shall also apply.</p>

<h2>2. Description of Service</h2>
<p>SahteAvcı is a Chrome browser extension that assists brand owners in detecting potentially counterfeit products on six Turkish e-commerce marketplaces: Trendyol, Hepsiburada, n11, Amazon.com.tr, Dolap, and Çiçeksepeti. The Extension provides:</p>
<ul>
<li>Text-based counterfeit detection using keyword matching, Unicode homoglyph detection, and Turkish-language jargon analysis (27 counterfeit-related terms).</li>
<li>Price anomaly detection comparing listed prices against user-defined average prices.</li>
<li>Perceptual image hashing (pHash) for visual product comparison.</li>
<li>AI-powered analysis via Bring Your Own Key (BYOK) integration with OpenAI, Anthropic, and Hugging Face.</li>
<li>Evidence collection with SHA-256 hashing and optional Bitcoin blockchain timestamping via OpenTimestamps.</li>
<li>Evidence export in CSV (UTF-8 with BOM) and JSON formats.</li>
<li>Batch scanning capability for marketplace listing pages.</li>
</ul>

<h2>3. Eligibility</h2>
<p>You must be at least 18 years of age to use the Extension. By using the Extension, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into binding agreements. If you are using the Extension on behalf of a legal entity, you represent that you have authority to bind that entity to these Terms.</p>

<h2>4. User Accounts and Subscriptions</h2>
<p>The Extension offers free and paid tiers. Free-tier usage does not require an account. For paid subscriptions, you provide your email address during checkout on ExtensionPay's Stripe-hosted payment page. Your subscription status is synchronized between ExtensionPay and the Extension. Payment processing is handled entirely by Stripe (PCI-DSS Level 1 certified). We never receive or store your payment card information.</p>

<h2>5. BYOK (Bring Your Own Key) Model</h2>
<p>Certain advanced features require you to provide your own API keys for third-party AI services:</p>
<ul>
<li><strong>Your Responsibility:</strong> you are solely responsible for obtaining, maintaining, and securing your API keys. You must comply with the terms of service of each AI provider (OpenAI, Anthropic, Hugging Face).</li>
<li><strong>Costs:</strong> you are solely responsible for all costs incurred through the use of your API keys. We have no control over and accept no liability for charges by AI providers.</li>
<li><strong>Data Transmission:</strong> when you use BYOK features, product text and/or image data is transmitted directly from your browser to the AI provider. We do not route, store, or access this data.</li>
<li><strong>No Agency:</strong> we are not agents, representatives, or partners of OpenAI, Anthropic, or Hugging Face.</li>
</ul>

<h2>6. Subscription Plans and Payment</h2>
<p>The Extension offers the following subscription tiers:</p>
<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Plan</th><th class="text-left p-2 font-semibold">Price</th><th class="text-left p-2 font-semibold">Brands</th><th class="text-left p-2 font-semibold">Scans/Month</th><th class="text-left p-2 font-semibold">Key Features</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">Free</td><td class="p-2">$0</td><td class="p-2">1</td><td class="p-2">50</td><td class="p-2">Basic scanning, jargon detection</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Starter</td><td class="p-2">$49/mo</td><td class="p-2">5</td><td class="p-2">500</td><td class="p-2">pHash comparison, CSV export</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Pro</td><td class="p-2">$99/mo</td><td class="p-2">Unlimited</td><td class="p-2">Unlimited</td><td class="p-2">BYOK AI, blockchain proofs, visual analysis</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Expert</td><td class="p-2">$149/mo</td><td class="p-2">Unlimited</td><td class="p-2">Unlimited</td><td class="p-2">CLIP API, court-ready export, priority support</td></tr>
</tbody>
</table>
</div>
<p>A 14-day free trial providing access to Pro-level features is available for new installations. The trial starts automatically upon installation and does not require payment information. After the trial expires, you are downgraded to the Free tier unless you subscribe.</p>

<h2>7. Intellectual Property</h2>
<h3>7.1 Our Intellectual Property</h3>
<p>The Extension, including all code, algorithms, designs, user interface elements, documentation, and the SahteAvcı trademark and branding, are the exclusive property of VENTOS ARQUEÁVEIS UNIPESSOAL LDA and are protected by Portuguese, Turkish, EU, and international intellectual property laws.</p>

<h3>7.2 License Grant</h3>
<p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the Extension for your personal or internal business purposes. This license does not include the right to sublicense, distribute, modify, or create derivative works.</p>

<h3>7.3 Restrictions</h3>
<p>You shall not:</p>
<ul>
<li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Extension, except to the extent expressly permitted by mandatory law (including EU Directive 2009/24/EC and Turkish Copyright Law No. 5846).</li>
<li>Modify, adapt, translate, or create derivative works based on the Extension.</li>
<li>Rent, lease, loan, sublicense, distribute, or transfer the Extension to any third party.</li>
<li>Use the Extension to develop a competing product or service.</li>
<li>Remove, alter, or obscure any proprietary notices or labels on the Extension.</li>
<li>Use the Extension in violation of any applicable law, including Turkish Law No. 6769, EU IP regulations, or marketplace terms of service.</li>
</ul>

<h3>7.4 Your Content</h3>
<p>You retain all ownership rights to your brand information, evidence data, and other content you create using the Extension. You grant us a limited, non-exclusive, royalty-free license to use anonymized, aggregated usage patterns (never individual brand names, evidence, or business data) for improving the Extension's detection algorithms.</p>

<h2>8. Prohibited Uses</h2>
<p>You agree not to use the Extension to:</p>
<ul>
<li>File false, fraudulent, or abusive takedown requests or intellectual property complaints.</li>
<li>Harass, intimidate, or harm other marketplace sellers.</li>
<li>Collect data about sellers or products for purposes unrelated to brand protection.</li>
<li>Circumvent subscription restrictions, trial limitations, or feature gates.</li>
<li>Interfere with the operation of supported marketplaces or violate their terms of service.</li>
<li>Engage in any illegal activity under Turkish, Portuguese, EU, or any other applicable law.</li>
<li>Engage in competitive activity against the Company.</li>
</ul>

<h2>9. Disclaimer of Warranties</h2>
<p>THE EXTENSION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.</p>
<p>We do not warrant that: the Extension will detect all counterfeit products; detection results will be accurate or complete; evidence will be admissible in any court; takedown templates will result in removal of infringing listings; or the Extension will operate without interruption or error.</p>

<h2>10. Limitation of Liability</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE ONE (1) MONTH PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
<p><strong>Turkish Consumer Protection:</strong> nothing in these Terms limits liability that cannot be excluded under Turkish Law No. 6502. For Turkish consumers, mandatory warranty and liability provisions of Turkish law apply.</p>
<p><strong>EU Consumer Protection:</strong> nothing in these Terms limits liability that cannot be excluded under mandatory EU consumer protection directives, including Directive 2011/83/EU.</p>

<h2>11. Indemnification</h2>
<p>You agree to indemnify, defend, and hold harmless VENTOS ARQUEÁVEIS UNIPESSOAL LDA from any claims, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising from: (a) your use of the Extension; (b) your violation of these Terms; (c) your violation of third-party rights, including IP rights; (d) false or abusive takedown requests filed based on Extension data; or (e) your violation of applicable law.</p>
<p><strong>Turkish Consumer Note:</strong> indemnification obligations for Turkish consumers are limited to the extent permitted by Turkish Law No. 6502.</p>

<h2>12. Evidence and Legal Disclaimer</h2>
<p><strong>IMPORTANT:</strong> SahteAvcı is a monitoring and evidence-collection tool. It does NOT constitute legal advice and does NOT create an attorney-client relationship.</p>
<ul>
<li>Screenshots, SHA-256 hashes, and blockchain timestamps are for your reference and record-keeping only.</li>
<li>Admissibility of such evidence depends on applicable law, rules of evidence, and court discretion.</li>
<li>Blockchain proof via OpenTimestamps verifies only the time of data fixation, not accuracy or truth of underlying data.</li>
<li>You are solely responsible for verifying that reported listings actually infringe your IP rights. Filing false IP complaints may expose you to liability under Turkish Law No. 6769 (Art. 157), EU law, and marketplace terms.</li>
<li>We strongly recommend consulting a qualified intellectual property attorney before taking legal action.</li>
</ul>

<h2>13. Pre-Litigation Dispute Resolution</h2>
<p>Before initiating legal proceedings, you must send written notice to <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> describing the dispute and proposed resolution. We will have 30 days to respond and attempt to resolve the dispute amicably. This requirement is a mandatory condition precedent to any legal action.</p>
<p>For Turkish consumers: this does not limit your right to apply to the Tüketici Hakem Heyeti (Consumer Arbitration Committee) for disputes valued at or below 186,000 TL (threshold for 2026, updated annually by the Ministry of Commerce), or to file a complaint with the Tüketici Mahkemesi (Consumer Court) for disputes above this threshold.</p>
<p>For EU consumers: you may also use the EU Online Dispute Resolution platform at <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a>.</p>

<h2>14. Governing Law and Jurisdiction</h2>
<p>These Terms are governed by Portuguese law. Disputes shall be subject to the exclusive jurisdiction of the courts of Lisbon, Portugal. Mandatory consumer protection provisions of Turkey (Law No. 6502, Law No. 6563) and/or your EU member state of residence apply additionally where they provide greater protection.</p>

<h2>15. Termination</h2>
<p>We may terminate or suspend your access at any time for cause (including violation of these Terms). You may terminate by uninstalling the Extension and cancelling your subscription. Upon termination, Sections 7 (IP), 9 (Disclaimer), 10 (Liability), 11 (Indemnification), 12 (Evidence Disclaimer), and 14 (Governing Law) survive.</p>

<h2>16. Contact</h2>
<ul>
<li><strong>Email:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>Company:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</li>
</ul>
`;

export default function TermsPage() {
  const { lang } = useLang();
  const isTR = lang === "tr";

  return (
    <Section>
      <div className="max-w-[800px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {isTR ? "Geri" : "Back"}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {isTR ? "Kullanım Koşulları" : "Terms of Service"}
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
