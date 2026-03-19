import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface LegalPageProps {
  title: string;
  sections: string[];
}

export default function LegalPageTemplate({ title, sections }: LegalPageProps) {
  return (
    <>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground text-sm mb-10">Son güncelleme: Mart 2026</p>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{i + 1}. {s}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Bu bölüm, nihai yasal metin hazırlandığında güncellenecektir. Şu anda yer tutucu içerik görüntülenmektedir.
                  Lütfen güncel bilgiler için daha sonra tekrar kontrol edin veya destek@sahteavci.com adresinden bizimle iletişime geçin.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4">Sorularınız için: hukuk@sahteavci.com</p>
            <Button variant="outline" asChild>
              <Link to="/">Ana Sayfaya Dön</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
