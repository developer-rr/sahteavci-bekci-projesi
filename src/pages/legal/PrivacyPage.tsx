import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

const contentTR = `
<h2>1. Giriş ve Veri Sorumlusu</h2>
<p>Bu Gizlilik Politikası ("Politika"), Portekiz yasalarına göre tescil edilmiş bir şirket olan VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("biz", "bize" veya "bizim") tarafından, SahteAvcı Chrome tarayıcı eklentisi ("Eklenti" veya "Hizmet") ile bağlantılı olarak bilgilerin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır. SahteAvcı, Türk e-ticaret pazaryerleri için tasarlanmış bir marka koruma ve sahte ürün tespit aracıdır.</p>
<p><strong>Veri Sorumlusu:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA, Portekiz'de tescillidir.<br/>
<strong>Gizlilik İrtibat:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a><br/>
<strong>Genel Destek:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></p>
<p>Bu Politika, Avrupa Birliği'nde bulunan (Genel Veri Koruma Tüzüğü, "GDPR" kapsamında korunan), Türkiye'de bulunan (6698 sayılı Kişisel Verilerin Korunması Kanunu, "KVKK" kapsamında korunan) ve diğer tüm yargı bölgelerindeki kullanıcılar dahil olmak üzere Eklentinin tüm kullanıcılarına uygulanır. Yerel yasanın bu Politikadan daha yüksek koruma sağladığı durumlarda, daha yüksek standart geçerli olacaktır.</p>

<h2>2. Topladığımız Veriler</h2>
<h3>2.1 Doğrudan Sağladığınız Veriler</h3>
<ul>
<li><strong>Marka Bilgileri:</strong> marka adları, anahtar kelimeler, ortalama fiyatlar, resmi web sitesi URL'leri, resmi ürün görselleri (marka başına en fazla 3 adet, sıkıştırılmış base64 JPEG olarak, maksimum 300px) ve logo görselleri.</li>
<li><strong>API Anahtarları (BYOK Modeli):</strong> yapay zeka destekli analiz kullanmayı tercih ederseniz, OpenAI, Anthropic ve/veya Hugging Face için kendi API anahtarlarınızı sağlarsınız. Bu anahtarlar, saklanmadan önce PBKDF2 anahtar türetmesi (100.000 iterasyon) ile AES-256-GCM kullanılarak şifrelenir.</li>
<li><strong>Güvenilir Satıcılar:</strong> güvenilir satıcı listesine manuel olarak eklediğiniz satıcı adları.</li>
<li><strong>Tercihler:</strong> dil, yapay zeka sağlayıcı seçimi, bildirim tercihleri ve görüntüleme teması.</li>
<li><strong>E-posta Adresi (ücretli abonelikler için):</strong> ücretli bir plana abone olduğunuzda, e-posta adresiniz abonelik yönetimi, faturalama iletişimleri ve ödeme makbuzları için ExtensionPay ve Stripe tarafından toplanır ve işlenir. Plan doğrulaması için ExtensionPay'den e-posta adresinizi ve abonelik durumunuzu alırız.</li>
</ul>

<h3>2.2 Otomatik Olarak Toplanan Veriler</h3>
<ul>
<li><strong>Kullanım İstatistikleri:</strong> toplu tarama sayıları, tespit sayıları ve platform bazlı tarama istatistikleri. Bu istatistikler yalnızca tarayıcınızda (chrome.storage.local) saklanır ve hiçbir zaman herhangi bir sunucuya iletilmez.</li>
<li><strong>Yükleme Zaman Damgası:</strong> yalnızca deneme süresi hesaplaması için kullanılan Eklenti yükleme tarihi ve saati.</li>
<li><strong>Abonelik Durumu:</strong> lisans geçerliliğini doğrulamak için ExtensionPay sunucularıyla senkronize edilen mevcut abonelik planınız ve sona erme tarihiniz.</li>
<li><strong>Ürün Sayfası Verileri:</strong> desteklenen altı Türk pazaryerinden birinde (Trendyol, Hepsiburada, n11, Amazon.com.tr, Dolap ve Çiçeksepeti) bir ürün sayfasını ziyaret ettiğinizde, Eklenti şu halka açık ürün bilgilerini okur: ürün başlığı, fiyat, satıcı adı, ürün görselleri (yalnızca URL'ler), marka alanı, açıklama metni ve URL'den ürün kimliği. Bu veriler, sahte ürün tespit analizi için tarayıcınızda yerel olarak işlenir.</li>
</ul>

<h3>2.3 Toplamadığımız Veriler</h3>
<ul>
<li>Eklenti aracılığıyla adınızı, telefon numaranızı, fiziksel adresinizi veya kimlik belgelerinizi toplamıyoruz.</li>
<li>Desteklenen altı pazaryeri alanı dışında tarama geçmişinizi toplamıyor veya erişmiyoruz.</li>
<li>Eklentide çerez, izleme pikseli veya web işaretçisi kullanmıyoruz.</li>
<li>Herhangi bir analiz hizmeti dağıtmıyoruz (Google Analytics, Mixpanel, Amplitude veya benzeri yok).</li>
<li>Cihaz parmak izi, IP adresi veya tarayıcı/cihaz bilgisi toplamıyoruz.</li>
<li>Herhangi bir telemetri veya veri toplama arka uç sunucumuz bulunmamaktadır.</li>
<li>Ödeme kartı bilgilerini toplamıyor veya işlemiyoruz — tüm ödeme işlemleri tamamen Stripe tarafından yürütülür.</li>
</ul>

<h2>3. İşlemenin Hukuki Dayanağı</h2>
<h3>3.1 GDPR Kapsamında (AB Kullanıcıları)</h3>
<p>GDPR'nin 6. Maddesi kapsamında verileri aşağıdaki hukuki dayanaklara göre işliyoruz:</p>
<ul>
<li><strong>Sözleşmesel Gereklilik (Md. 6(1)(b)):</strong> ürün sayfası verilerini, marka bilgilerini ve abonelik verilerini işlemek, talep ettiğiniz sahte ürün tespit hizmetini sağlamak için gereklidir.</li>
<li><strong>Meşru Menfaat (Md. 6(1)(f)):</strong> toplu kullanım istatistikleri Eklentiyi geliştirmemize yardımcı olur. Bu istatistikler kişisel veri içermez.</li>
<li><strong>Rıza (Md. 6(1)(a)):</strong> gönüllü olarak API anahtarları sağladığınızda ve yapay zeka destekli analiz özelliklerini kullanmayı seçtiğinizde, işleme açık rızanıza dayanır. E-posta pazarlama iletişimleri sunulduğunda, ayrı bir katılım onayı gerektirir.</li>
</ul>

<h3>3.2 KVKK Kapsamında (Türk Kullanıcılar)</h3>
<p>Türkiye'de bulunan kullanıcılar için verileri KVKK'nın 5. Maddesi uyarınca işliyoruz:</p>
<ul>
<li><strong>Sözleşmenin İfası (Md. 5(2)(c)):</strong> Eklentinin temel işlevselliğinin ve abonelik yönetiminin yerine getirilmesi için işleme gereklidir.</li>
<li><strong>Meşru Menfaat (Md. 5(2)(f)):</strong> hizmet iyileştirmesi için toplu, kişisel olmayan istatistikler; temel hak ve özgürlüklerinize zarar vermemek kaydıyla.</li>
<li><strong>Açık Rıza (Md. 5(1)):</strong> üçüncü taraf API iletişimi gerektiren isteğe bağlı yapay zeka analiz özellikleri için.</li>
</ul>

<h2>4. Verileri Nasıl Kullanıyoruz</h2>
<p>Tüm temel veri işleme, tarayıcınızda yerel olarak gerçekleşir. Toplanan bilgileri şu amaçlarla kullanıyoruz:</p>
<ol>
<li>Desteklenen altı Türk pazaryerindeki ürün listelerinde sahte ürün tespit analizi gerçekleştirmek.</li>
<li>Marka koruma faaliyetleriniz için delil paketleri (SHA-256 hashlenmiş kayıtlar, ekran görüntüleri, ürün verileri) oluşturmak ve saklamak.</li>
<li>Delil bütünlüğü doğrulaması için OpenTimestamps aracılığıyla blok zincirine bağlı zaman damgaları sağlamak.</li>
<li>Bu özelliği etkinleştirmeyi seçtiğinizde, kendi API anahtarlarınız (BYOK modeli) aracılığıyla yapay zeka destekli analizi etkinleştirmek.</li>
<li>ExtensionPay/Stripe aracılığıyla abonelik durumunuzu yönetmek, plan seviyenizi doğrulamak ve deneme süresi süresini hesaplamak.</li>
<li>Stripe/ExtensionPay aracılığıyla aboneliğinizle ilgili işlemsel e-postalar (ödeme makbuzları, yenileme hatırlatmaları, iptal onayları) göndermek.</li>
<li>Potansiyel sahte ürünler tespit edildiğinde (risk puanı 70'i aştığında) bildirimler görüntülemek.</li>
</ol>

<h2>5. BYOK (Kendi Anahtarını Getir) Modeli</h2>
<p><strong>ÖNEMLİ:</strong> SahteAvcı, yapay zeka işlevselliği için Kendi Anahtarını Getir (BYOK) modeliyle çalışır. Bu şu anlama gelir:</p>
<ul>
<li>OpenAI, Anthropic ve/veya Hugging Face için kendi API anahtarlarınızı sağlar ve yönetirsiniz.</li>
<li>Yapay zeka analiz özelliklerini kullandığınızda, ürün metin verileri (başlık ve açıklama) doğrudan tarayıcınızdan seçtiğiniz yapay zeka sağlayıcısına iletilir. Bu verileri aktarım sırasında yönlendirmiyoruz, ele geçirmiyoruz, saklamıyoruz veya erişmiyoruz.</li>
<li>API anahtarlarınız saklanmadan önce AES-256-GCM kullanılarak yerel olarak şifrelenir. Şifreleme, anahtar türetme için 100.000 iterasyonla PBKDF2, kurulum başına benzersiz 16 baytlık tuz ve şifreleme işlemi başına benzersiz 12 baytlık IV kullanır.</li>
<li>API anahtarlarınızın güvenliğini sağlamak, seçtiğiniz yapay zeka sağlayıcısının hizmet koşullarına uymak ve API anahtarlarınızın kullanımı yoluyla oluşan maliyetler tamamen sizin sorumluluğunuzdadır.</li>
<li>Eklenti aracılığıyla hizmetlerini kullanmanız konusunda OpenAI, Anthropic veya Hugging Face ile herhangi bir sözleşmesel veya vekillik ilişkimiz bulunmamaktadır.</li>
</ul>

<h2>6. Üçüncü Taraf Veri Paylaşımı</h2>
<p>Verilerinizi pazarlama amacıyla üçüncü taraflara satmıyoruz, kiralamıyoruz veya paylaşmıyoruz. Veriler tarayıcınızdan yalnızca aşağıdaki durumlarda çıkar:</p>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Hizmet</th><th class="text-left p-2 font-semibold">İletilen Veri</th><th class="text-left p-2 font-semibold">Amaç</th><th class="text-left p-2 font-semibold">Kontrol</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">OpenAI API (BYOK)</td><td class="p-2">Ürün başlığı + açıklama metni</td><td class="p-2">Yapay zeka sahte ürün analizi</td><td class="p-2">Kullanıcı tarafından başlatılır; kullanıcının kendi API anahtarı</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Anthropic API (BYOK)</td><td class="p-2">Ürün başlığı + açıklama metni</td><td class="p-2">Yapay zeka sahte ürün analizi</td><td class="p-2">Kullanıcı tarafından başlatılır; kullanıcının kendi API anahtarı</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Hugging Face API (BYOK)</td><td class="p-2">CLIP çıkarımı için görsel veriler</td><td class="p-2">Görsel benzerlik analizi</td><td class="p-2">Kullanıcı tarafından başlatılır; kullanıcının kendi API anahtarı</td></tr>
<tr class="border-b border-border/50"><td class="p-2">OpenTimestamps</td><td class="p-2">Yalnızca SHA-256 hash (32 bayt)</td><td class="p-2">Blok zinciri zaman damgası kanıtı</td><td class="p-2">Deliller için otomatik; kişisel veri yok</td></tr>
<tr class="border-b border-border/50"><td class="p-2">ExtensionPay</td><td class="p-2">E-posta, abonelik planı, ödeme durumu</td><td class="p-2">Abonelik yönetimi ve lisans doğrulaması</td><td class="p-2">Ödeme sırasında kullanıcı tarafından başlatılır; periyodik lisans kontrolleri</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Stripe (ExtensionPay aracılığıyla)</td><td class="p-2">E-posta, ödeme kartı bilgileri (Stripe tarafından işlenir), fatura adresi</td><td class="p-2">Ödeme işleme</td><td class="p-2">Kullanıcı tarafından başlatılır; tamamen Stripe'ın PCI-DSS sertifikalı altyapısı tarafından yürütülür</td></tr>
</tbody>
</table>
</div>

<p><strong>Ödeme Verisi Notu:</strong> Ödeme kartı bilgileri doğrudan Stripe'ın barındırılan ödeme sayfasına girilir. Ödeme kartı bilgilerinizi hiçbir zaman almıyoruz, erişmiyoruz, işlemiyoruz veya saklamıyoruz. Stripe, PCI-DSS Seviye 1 sertifikalıdır.</p>
<p><strong>OpenTimestamps Notu:</strong> OpenTimestamps takvim sunucularına yalnızca 32 baytlık SHA-256 hash iletilir. Hiçbir ürün içeriği, URL, kişisel veri veya tanımlanabilir bilgi dahil edilmez.</p>

<h2>7. Uluslararası Veri Aktarımları</h2>
<p>Veriler aşağıdaki durumlarda uluslararası olarak aktarılabilir:</p>
<ul>
<li><strong>BYOK Yapay Zeka Sağlayıcıları:</strong> yapay zeka özelliklerini kullandığınızda, veriler OpenAI, Anthropic veya Hugging Face tarafından işletilen Amerika Birleşik Devletleri'ndeki sunuculara iletilir. Bu aktarımlar, kendi API anahtarlarınızı kullanmanız yoluyla doğrudan sizin tarafınızdan başlatılır.</li>
<li><strong>Stripe/ExtensionPay:</strong> abonelik ve ödeme verileri Stripe, Inc. (ABD) ve ExtensionPay tarafından işlenir. Stripe, Standart Sözleşme Maddeleri (SCC'ler) aracılığıyla GDPR uyumluluğunu sürdürür ve AB-ABD Veri Gizliliği Çerçevesine katılır.</li>
</ul>
<p>AB kullanıcıları için ABD'ye yapılan aktarımlar, AB-ABD Veri Gizliliği Çerçevesi ve/veya Standart Sözleşme Maddeleri (SCC'ler) tarafından yönetilir. Türk kullanıcılar için sınır ötesi veri aktarımları KVKK'nın 9. Maddesi ile uyumludur.</p>

<h2>8. Veri Saklama ve Muhafaza</h2>
<h3>8.1 Saklama Konumu</h3>
<p>Temel Eklenti verileri aşağıdakiler kullanılarak yalnızca tarayıcınızda saklanır:</p>
<ul>
<li><strong>chrome.storage.local:</strong> marka bilgileri, ayarlar, şifrelenmiş API anahtarları, abonelik durumu, güvenilir satıcılar ve kullanım istatistikleri.</li>
<li><strong>IndexedDB (veritabanı: sahteavci_db):</strong> delil kayıtları (SHA-256 hashleri ve OTS kanıtları ile), tarama geçmişi ve yapay zeka gömmeleri.</li>
<li><strong>chrome.storage.session:</strong> geçici bildirim verileri (tarayıcı kapandığında temizlenir).</li>
</ul>
<p><strong>ExtensionPay/Stripe:</strong> e-posta adresiniz ve abonelik bilgileriniz, ExtensionPay ve Stripe tarafından kendi gizlilik politikalarına uygun olarak sunucularında saklanır.</p>

<h3>8.2 Muhafaza Süresi</h3>
<p>Yerel tarayıcı verileri, silmeyi seçene kadar süresiz olarak muhafaza edilir. Yerel verileri otomatik olarak temizlemiyoruz. ExtensionPay/Stripe tarafından tutulan abonelik verileri, kendi gizlilik politikalarına ve geçerli yasal gerekliliklere uygun olarak muhafaza edilir.</p>

<h3>8.3 Veri Silme</h3>
<p>Tüm yerel Eklenti verilerini istediğiniz zaman şu yollarla silebilirsiniz:</p>
<ul>
<li>Eklentinin Seçenekler bölümündeki yerleşik "Tüm Verileri Sil" düğmesi.</li>
<li>Eklentiyi kaldırma.</li>
<li>Tarayıcı ayarlarınız üzerinden tarayıcı verilerini temizleme.</li>
</ul>
<p><strong>Not:</strong> Yerel verileri silmek, ExtensionPay/Stripe tarafından tutulan abonelik bilgilerinizi silmez. Ödemeyle ilgili verilerin silinmesini talep etmek için <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> adresine başvurun.</p>

<h2>9. Veri İhlali Bildirimi</h2>
<p>SahteAvcı verileri yerel olarak sakladığı ve bir arka uç sunucusu işletmediği için, merkezi bir veri ihlali riski son derece düşüktür. Ancak olası bir güvenlik olayı durumunda:</p>
<ul>
<li><strong>GDPR (Md. 33-34):</strong> CNPD'yi (Comissão Nacional de Proteção de Dados) 72 saat içinde bilgilendireceğiz. İhlalin haklarınız ve özgürlükleriniz için yüksek risk oluşturma ihtimali varsa, etkilenen kullanıcıları da gecikmeksizin bilgilendireceğiz.</li>
<li><strong>KVKK (Md. 12(5)):</strong> KVKK'yı (Kişisel Verileri Koruma Kurumu) ve etkilenen veri sahiplerini keşiften itibaren 72 saat içinde bilgilendireceğiz.</li>
</ul>

<h2>10. Veri Sahibi Hakları</h2>
<h3>10.1 GDPR Kapsamındaki Haklar (AB Kullanıcıları)</h3>
<ul>
<li><strong>Erişim Hakkı (Md. 15):</strong> tüm temel veriler tarayıcınızda yerel olarak saklanır — Eklenti arayüzü üzerinden doğrudan erişiminiz vardır.</li>
<li><strong>Düzeltme Hakkı (Md. 16):</strong> marka bilgilerinizi, ayarlarınızı ve güvenilir liste girişlerinizi doğrudan Eklentide düzeltin.</li>
<li><strong>Silme Hakkı (Md. 17):</strong> "Tüm Verileri Sil" seçeneğini kullanarak veya Eklentiyi kaldırarak tüm verileri silin.</li>
<li><strong>Veri Taşınabilirliği Hakkı (Md. 20):</strong> delil ve tarama geçmişinizi Eklentinin dışa aktarma işlevi aracılığıyla CSV veya JSON formatında dışa aktarın.</li>
<li><strong>İtiraz Hakkı (Md. 21):</strong> belirli özellikleri devre dışı bırakarak veya Eklentiyi kaldırarak işlemeye itiraz edin.</li>
<li><strong>Şikayet Hakkı:</strong> CNPD'ye (www.cnpd.pt) veya yerel AB denetim otoritenize şikayet başvurusunda bulunun.</li>
</ul>

<h3>10.2 KVKK Kapsamındaki Haklar (Türk Kullanıcılar)</h3>
<p>KVKK'nın 11. Maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
<ul>
<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
<li>İşleme hakkında bilgi talep etme.</li>
<li>İşlemenin amacını ve verilerin amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
<li>Verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü tarafları bilme.</li>
<li>Eksik veya yanlış verilerin düzeltilmesini talep etme.</li>
<li>KVKK'nın 7. Maddesi kapsamında kişisel verilerin silinmesini veya yok edilmesini talep etme.</li>
<li>Yalnızca otomatik işleme yoluyla aleyhinize ortaya çıkan sonuçlara itiraz etme.</li>
<li>Hukuka aykırı işlemeden kaynaklanan zararların tazminini talep etme.</li>
</ul>
<p><strong>KVKK başvuruları:</strong> "KVKK Veri Sahibi Başvurusu" konulu olarak <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> adresine gönderin. Ayrıca KVKK'ya (www.kvkk.gov.tr) şikayette bulunabilirsiniz.</p>

<h3>10.3 Yanıt Süreleri</h3>
<p>GDPR: alındığından itibaren 30 gün (karmaşık talepler için bildirimle 90 güne uzatılabilir).<br/>
KVKK: alındığından itibaren 30 gün.</p>

<h2>11. Çocuklara Ait Veriler</h2>
<p>Eklenti, 18 yaşından küçük bireylerin kullanımına yönelik değildir. Küçüklerden bilerek veri toplamıyoruz. Bir küçüğün Eklentiyi kullandığından haberdar olursanız, <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> adresinden bizimle iletişime geçin.</p>

<h2>12. Veri Güvenliği</h2>
<p>Aşağıdaki güvenlik önlemlerini uyguluyoruz:</p>
<ul>
<li><strong>API anahtarları:</strong> PBKDF2 anahtar türetmesi (100.000 iterasyon, SHA-256) ile AES-256-GCM şifreleme.</li>
<li>Kurulum başına benzersiz 16 baytlık kriptografik tuz.</li>
<li>Şifreleme işlemi başına benzersiz 12 baytlık başlatma vektörü.</li>
<li><strong>Delil bütünlüğü:</strong> OpenTimestamps aracılığıyla isteğe bağlı Bitcoin blok zinciri sabitleme ile SHA-256 hashleme.</li>
<li>Tüm harici API iletişimleri yalnızca HTTPS kullanır.</li>
<li><strong>Arka uç altyapısı yok:</strong> tehlikeye atılabilecek merkezi bir sunucu bulunmamaktadır.</li>
<li><strong>Ödeme güvenliği:</strong> tüm ödeme işlemleri Stripe (PCI-DSS Seviye 1 sertifikalı) tarafından yürütülür.</li>
</ul>

<h2>13. AB Yapay Zeka Yasası Şeffaflık Bildirimi</h2>
<p>2 Ağustos 2026 tarihinden itibaren geçerli olan AB Yapay Zeka Yasası'nın (Tüzük (AB) 2024/1689) 50. Maddesi, yapay zeka sistemlerine şeffaflık yükümlülükleri getirmektedir. SahteAvcı'nın yapay zeka destekli özellikleri:</p>
<ul>
<li>Yalnızca potansiyel olarak sahte ürün listelerinin belirlenmesine yardımcı olmak için kullanılır. Tüm sonuçlar tavsiye niteliğindedir ve incelemenizi gerektirir.</li>
<li>Verileriniz üzerinde eğitilmemiştir.</li>
<li>0 ile 100 arasında olasılıksal bir gösterge olarak risk puanı üretir, sahtecilik konusunda kesin bir belirleme değildir.</li>
<li>Nihai karar veren her zaman sizsiniz.</li>
</ul>

<h2>14. Portekiz Elektronik Şikayet Defteri</h2>
<p>Portekiz yasalarının (değiştirilmiş haliyle Decreto-Lei n.º 156/2005) gerektirdiği üzere, tüketiciler <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a> adresinden elektronik şikayet defteri aracılığıyla şikayette bulunabilirler.</p>

<h2>15. Bu Politikadaki Değişiklikler</h2>
<p>Bu Politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikler, Eklentinin güncelleme notları ve/veya web sitemiz aracılığıyla bildirilecektir. Değişikliklerden sonra Eklentiyi kullanmaya devam etmeniz, kabul anlamına gelir.</p>
<p><strong>Son Güncelleme:</strong> 1 Nisan 2026</p>

<h2>16. İletişim Bilgileri</h2>
<ul>
<li><strong>Gizlilik İrtibat:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>Genel Destek:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>Veri Sorumlusu:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</li>
<li><strong>Portekiz VKK:</strong> CNPD (Comissão Nacional de Proteção de Dados) — <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a></li>
<li><strong>Türkiye VKK:</strong> KVKK (Kişisel Verileri Koruma Kurumu) — <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer">www.kvkk.gov.tr</a></li>
<li><strong>AB ÇUP Platformu:</strong> <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a></li>
<li><strong>Portekiz Şikayet Defteri:</strong> <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a></li>
</ul>
`;

const contentEN = `
<h2>1. Introduction and Data Controller</h2>
<p>This Privacy Policy ("Policy") describes how VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("we," "us," or "our"), a company registered under the laws of Portugal, collects, uses, stores, and protects information in connection with the SahteAvcı Chrome browser extension ("Extension" or "Service"). SahteAvcı is a brand protection and counterfeit detection tool designed for Turkish e-commerce marketplaces.</p>
<p><strong>Data Controller:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA, registered in Portugal.<br/>
<strong>Privacy Contact:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a><br/>
<strong>General Support:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></p>
<p>This Policy applies to all users of the Extension, including users located in the European Union (protected under the General Data Protection Regulation, "GDPR"), Turkey (protected under the Personal Data Protection Law No. 6698, "KVKK"), and all other jurisdictions. Where local law provides greater protection than this Policy, the higher standard shall apply.</p>

<h2>2. Data We Collect</h2>
<h3>2.1 Data You Provide Directly</h3>
<ul>
<li><strong>Brand Information:</strong> brand names, keywords, average prices, official website URLs, official product images (up to 3 per brand, stored as compressed base64 JPEG, max 300px), and logo images.</li>
<li><strong>API Keys (BYOK Model):</strong> if you choose to use AI-powered analysis, you provide your own API keys for OpenAI, Anthropic, and/or Hugging Face. These keys are encrypted using AES-256-GCM with PBKDF2 key derivation (100,000 iterations) before storage.</li>
<li><strong>Whitelisted Sellers:</strong> seller names you manually add to the trusted seller list.</li>
<li><strong>Preferences:</strong> language, AI provider selection, notification preferences, and display theme.</li>
<li><strong>Email Address (for paid subscriptions):</strong> when you subscribe to a paid plan, your email address is collected and processed by ExtensionPay and Stripe for subscription management, billing communications, and payment receipts. We receive your email address and subscription status from ExtensionPay to verify your plan.</li>
</ul>

<h3>2.2 Data Collected Automatically</h3>
<ul>
<li><strong>Usage Statistics:</strong> aggregate scan counts, detection counts, and per-platform scan statistics. These statistics are stored exclusively in your browser (chrome.storage.local) and are never transmitted to any server.</li>
<li><strong>Installation Timestamp:</strong> the date and time of Extension installation, used solely for trial period calculation.</li>
<li><strong>Subscription Status:</strong> your current subscription plan and expiration date, synchronized with ExtensionPay servers to verify license validity.</li>
<li><strong>Product Page Data:</strong> when you visit a product page on one of the six supported Turkish marketplaces (Trendyol, Hepsiburada, n11, Amazon.com.tr, Dolap, and Çiçeksepeti), the Extension reads publicly available product information including: product title, price, seller name, product images (URLs only), brand field, description text, and product ID from the URL. This data is processed locally in your browser for counterfeit detection analysis.</li>
</ul>

<h3>2.3 Data We Do NOT Collect</h3>
<ul>
<li>We do not collect your name, phone number, physical address, or identity documents through the Extension.</li>
<li>We do not collect or access your browsing history outside of the six supported marketplace domains.</li>
<li>We do not use cookies, tracking pixels, or web beacons in the Extension.</li>
<li>We do not deploy any analytics services (no Google Analytics, Mixpanel, Amplitude, or similar).</li>
<li>We do not collect device fingerprints, IP addresses, or browser/device information.</li>
<li>We do not have any telemetry or data collection backend server.</li>
<li>We do not collect or process payment card details — all payment processing is handled entirely by Stripe.</li>
</ul>

<h2>3. Legal Basis for Processing</h2>
<h3>3.1 Under GDPR (EU Users)</h3>
<p>We process data on the following legal bases under Article 6 of the GDPR:</p>
<ul>
<li><strong>Contractual Necessity (Art. 6(1)(b)):</strong> processing product page data, brand information, and subscription data is necessary to provide the counterfeit detection service you have requested.</li>
<li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> aggregate usage statistics help us improve the Extension. These statistics contain no personal data.</li>
<li><strong>Consent (Art. 6(1)(a)):</strong> where you voluntarily provide API keys and choose to use AI-powered analysis features, processing occurs based on your explicit consent. Email marketing communications, if offered, require separate opt-in consent.</li>
</ul>

<h3>3.2 Under KVKK (Turkish Users)</h3>
<p>For users located in Turkey, we process data in accordance with Article 5 of KVKK:</p>
<ul>
<li><strong>Performance of Contract (Art. 5(2)(c)):</strong> processing is necessary for the performance of the Extension's core functionality and subscription management.</li>
<li><strong>Legitimate Interest (Art. 5(2)(f)):</strong> aggregate, non-personal statistics for service improvement, provided that this does not harm your fundamental rights and freedoms.</li>
<li><strong>Explicit Consent (Art. 5(1)):</strong> for optional AI analysis features requiring third-party API communication.</li>
</ul>

<h2>4. How We Use Data</h2>
<p>All core data processing occurs locally within your browser. We use the collected information for:</p>
<ol>
<li>Performing counterfeit detection analysis on product listings across the six supported Turkish marketplaces.</li>
<li>Generating and storing evidence packages (SHA-256 hashed records, screenshots, product data) for your brand protection activities.</li>
<li>Providing blockchain-anchored timestamps via OpenTimestamps for evidence integrity verification.</li>
<li>Enabling AI-powered analysis through your own API keys (BYOK model) when you choose to activate this feature.</li>
<li>Managing your subscription status, verifying your plan tier, and calculating trial period duration via ExtensionPay/Stripe.</li>
<li>Sending transactional emails related to your subscription (payment receipts, renewal reminders, cancellation confirmations) via Stripe/ExtensionPay.</li>
<li>Displaying notifications when potential counterfeits are detected (risk score exceeding 70).</li>
</ol>

<h2>5. BYOK (Bring Your Own Key) Model</h2>
<p><strong>IMPORTANT:</strong> SahteAvcı operates on a Bring Your Own Key (BYOK) model for AI functionality. This means:</p>
<ul>
<li>You provide and manage your own API keys for OpenAI, Anthropic, and/or Hugging Face.</li>
<li>When you use AI analysis features, product text data (title and description) is transmitted directly from your browser to the AI provider you have selected. We do not route, intercept, store, or have access to this data in transit.</li>
<li>Your API keys are encrypted locally using AES-256-GCM before storage. The encryption uses PBKDF2 with 100,000 iterations for key derivation, a unique 16-byte salt per installation, and a unique 12-byte IV per encryption operation.</li>
<li>You are solely responsible for maintaining the security of your API keys, complying with the terms of service of your chosen AI provider, and any costs incurred through the use of your API keys.</li>
<li>We have no contractual or agency relationship with OpenAI, Anthropic, or Hugging Face regarding your use of their services through the Extension.</li>
</ul>

<h2>6. Third-Party Data Sharing</h2>
<p>We do not sell, rent, or share your data with third parties for marketing purposes. Data leaves your browser only in the following circumstances:</p>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b border-border"><th class="text-left p-2 font-semibold">Service</th><th class="text-left p-2 font-semibold">Data Transmitted</th><th class="text-left p-2 font-semibold">Purpose</th><th class="text-left p-2 font-semibold">Control</th></tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="p-2">OpenAI API (BYOK)</td><td class="p-2">Product title + description text</td><td class="p-2">AI counterfeit analysis</td><td class="p-2">User-initiated; user's own API key</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Anthropic API (BYOK)</td><td class="p-2">Product title + description text</td><td class="p-2">AI counterfeit analysis</td><td class="p-2">User-initiated; user's own API key</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Hugging Face API (BYOK)</td><td class="p-2">Image data for CLIP inference</td><td class="p-2">Visual similarity analysis</td><td class="p-2">User-initiated; user's own API key</td></tr>
<tr class="border-b border-border/50"><td class="p-2">OpenTimestamps</td><td class="p-2">SHA-256 hash only (32 bytes)</td><td class="p-2">Blockchain timestamp proof</td><td class="p-2">Automatic for evidence; no personal data</td></tr>
<tr class="border-b border-border/50"><td class="p-2">ExtensionPay</td><td class="p-2">Email, subscription plan, payment status</td><td class="p-2">Subscription management and license verification</td><td class="p-2">User-initiated at checkout; periodic license checks</td></tr>
<tr class="border-b border-border/50"><td class="p-2">Stripe (via ExtensionPay)</td><td class="p-2">Email, payment card details (processed by Stripe), billing address</td><td class="p-2">Payment processing</td><td class="p-2">User-initiated; handled entirely by Stripe's PCI-DSS certified infrastructure</td></tr>
</tbody>
</table>
</div>

<p><strong>Payment Data Note:</strong> Payment card details are entered directly on Stripe's hosted checkout page. We never receive, access, process, or store your payment card information. Stripe is PCI-DSS Level 1 certified.</p>
<p><strong>OpenTimestamps Note:</strong> Only a 32-byte SHA-256 hash is transmitted to OpenTimestamps calendar servers. No product content, URLs, personal data, or any identifiable information is included.</p>

<h2>7. International Data Transfers</h2>
<p>Data may be transferred internationally in the following cases:</p>
<ul>
<li><strong>BYOK AI Providers:</strong> when you use AI features, data is transmitted to servers in the United States operated by OpenAI, Anthropic, or Hugging Face. These transfers are initiated directly by you through the use of your own API keys.</li>
<li><strong>Stripe/ExtensionPay:</strong> subscription and payment data is processed by Stripe, Inc. (USA) and ExtensionPay. Stripe maintains compliance with GDPR through Standard Contractual Clauses (SCCs) and participates in the EU-US Data Privacy Framework.</li>
</ul>
<p>For EU users, transfers to the USA are governed by the EU-US Data Privacy Framework and/or Standard Contractual Clauses (SCCs). For Turkish users, cross-border data transfers comply with Article 9 of KVKK.</p>

<h2>8. Data Storage and Retention</h2>
<h3>8.1 Storage Location</h3>
<p>Core Extension data is stored exclusively within your browser using:</p>
<ul>
<li><strong>chrome.storage.local:</strong> brand information, settings, encrypted API keys, subscription status, whitelisted sellers, and usage statistics.</li>
<li><strong>IndexedDB (database: sahteavci_db):</strong> evidence records (with SHA-256 hashes and OTS proofs), scan history, and AI embeddings.</li>
<li><strong>chrome.storage.session:</strong> temporary notification data (cleared when browser closes).</li>
</ul>
<p><strong>ExtensionPay/Stripe:</strong> your email address and subscription information are stored by ExtensionPay and Stripe on their servers in accordance with their respective privacy policies.</p>

<h3>8.2 Retention Period</h3>
<p>Local browser data is retained indefinitely until you choose to delete it. We do not automatically purge local data. Subscription data held by ExtensionPay/Stripe is retained in accordance with their privacy policies and applicable legal requirements.</p>

<h3>8.3 Data Deletion</h3>
<p>You can delete all local Extension data at any time through:</p>
<ul>
<li>The Extension's built-in "Tüm Verileri Sil" (Delete All Data) button in Options.</li>
<li>Uninstalling the Extension.</li>
<li>Clearing browser data through your browser's settings.</li>
</ul>
<p><strong>Note:</strong> Deleting local data does not delete your subscription information held by ExtensionPay/Stripe. To request deletion of payment-related data, contact <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a>.</p>

<h2>9. Data Breach Notification</h2>
<p>Because SahteAvcı stores data locally and does not operate a backend server, the risk of a centralized data breach is extremely low. However, in the unlikely event of a security incident:</p>
<ul>
<li><strong>GDPR (Art. 33-34):</strong> we will notify CNPD (Comissão Nacional de Proteção de Dados) within 72 hours. If the breach is likely to result in high risk to your rights and freedoms, we will also notify affected users without undue delay.</li>
<li><strong>KVKK (Art. 12(5)):</strong> we will notify KVKK (Kişisel Verileri Koruma Kurumu) and affected data subjects within 72 hours of discovery.</li>
</ul>

<h2>10. Data Subject Rights</h2>
<h3>10.1 Rights Under GDPR (EU Users)</h3>
<ul>
<li><strong>Right of Access (Art. 15):</strong> all core data is stored locally in your browser — you have direct access through the Extension interface.</li>
<li><strong>Right to Rectification (Art. 16):</strong> correct your brand information, settings, and whitelist entries directly in the Extension.</li>
<li><strong>Right to Erasure (Art. 17):</strong> delete all data using "Tüm Verileri Sil" or by uninstalling the Extension.</li>
<li><strong>Right to Data Portability (Art. 20):</strong> export your evidence and scan history in CSV or JSON format through the Extension's export function.</li>
<li><strong>Right to Object (Art. 21):</strong> object to processing by disabling specific features or uninstalling the Extension.</li>
<li><strong>Right to Lodge a Complaint:</strong> file a complaint with CNPD (www.cnpd.pt) or your local EU supervisory authority.</li>
</ul>

<h3>10.2 Rights Under KVKK (Turkish Users)</h3>
<p>Under Article 11 of KVKK, you have the right to:</p>
<ul>
<li>Learn whether your personal data is processed.</li>
<li>Request information about processing.</li>
<li>Learn the purpose of processing and whether data is used in accordance with its purpose.</li>
<li>Know the third parties to whom your data is transferred domestically or internationally.</li>
<li>Request rectification of incomplete or incorrect data.</li>
<li>Request deletion or destruction of personal data under Article 7 of KVKK.</li>
<li>Object to outcomes reached exclusively through automated processing that are to your detriment.</li>
<li>Claim compensation for damages arising from unlawful processing.</li>
</ul>
<p><strong>KVKK requests:</strong> send to <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a> with subject "KVKK Veri Sahibi Başvurusu." You may also file a complaint with KVKK (www.kvkk.gov.tr).</p>

<h3>10.3 Response Timeframes</h3>
<p>GDPR: 30 days from receipt (extendable to 90 days for complex requests, with notice).<br/>
KVKK: 30 days from receipt.</p>

<h2>11. Children's Data</h2>
<p>The Extension is not intended for use by individuals under 18. We do not knowingly collect data from minors. If you become aware that a minor is using the Extension, contact us at <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a>.</p>

<h2>12. Data Security</h2>
<p>We implement the following security measures:</p>
<ul>
<li><strong>API keys:</strong> AES-256-GCM encryption with PBKDF2 key derivation (100,000 iterations, SHA-256).</li>
<li>Unique 16-byte cryptographic salt per installation.</li>
<li>Unique 12-byte initialization vector per encryption operation.</li>
<li><strong>Evidence integrity:</strong> SHA-256 hashing with optional Bitcoin blockchain anchoring via OpenTimestamps.</li>
<li>All external API communications use HTTPS exclusively.</li>
<li><strong>No backend infrastructure:</strong> no centralized server that could be compromised.</li>
<li><strong>Payment security:</strong> all payment processing handled by Stripe (PCI-DSS Level 1 certified).</li>
</ul>

<h2>13. EU AI Act Transparency Notice</h2>
<p>Effective August 2, 2026, Article 50 of the EU AI Act (Regulation (EU) 2024/1689) imposes transparency obligations on AI systems. SahteAvcı's AI-powered features:</p>
<ul>
<li>Are used exclusively to assist in identifying potentially counterfeit product listings. All results are advisory and require your review.</li>
<li>Are not trained on your data.</li>
<li>Produce a risk score from 0 to 100 as a probabilistic indicator, not a definitive determination of counterfeiting.</li>
<li>You are always the final decision-maker.</li>
</ul>

<h2>14. Portuguese Electronic Complaints Book</h2>
<p>As required by Portuguese law (Decreto-Lei n.º 156/2005, as amended), consumers may submit complaints through the electronic complaints book at <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a>.</p>

<h2>15. Changes to This Policy</h2>
<p>We may update this Policy from time to time. Material changes will be communicated through the Extension's update notes and/or on our website. Continued use of the Extension after changes constitutes acceptance.</p>
<p><strong>Last Updated:</strong> April 1, 2026</p>

<h2>16. Contact Information</h2>
<ul>
<li><strong>Privacy Contact:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>General Support:</strong> <a href="mailto:destek@sahteavci.com">destek@sahteavci.com</a></li>
<li><strong>Data Controller:</strong> VENTOS ARQUEÁVEIS UNIPESSOAL LDA</li>
<li><strong>Portuguese DPA:</strong> CNPD (Comissão Nacional de Proteção de Dados) — <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a></li>
<li><strong>Turkish DPA:</strong> KVKK (Kişisel Verileri Koruma Kurumu) — <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer">www.kvkk.gov.tr</a></li>
<li><strong>EU ODR Platform:</strong> <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a></li>
<li><strong>Portuguese Complaints Book:</strong> <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a></li>
</ul>
`;

export default function PrivacyPage() {
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
          {isTR ? "Gizlilik Politikası" : "Privacy Policy"}
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
