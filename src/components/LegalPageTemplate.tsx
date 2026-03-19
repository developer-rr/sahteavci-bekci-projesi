import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface LegalSection {
  title: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  sections: LegalSection[];
}

export default function LegalPageTemplate({ title, sections }: LegalPageProps) {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm mb-3">Son güncelleme: Mart 2026</p>
        <p className="text-muted-foreground text-xs mb-10 italic">
          Bu sayfa nihai yasal metin hazırlanana kadar yer tutucu içerik içermektedir. Güncel ve bağlayıcı metin ayrıca yayınlanacaktır.
        </p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{i + 1}. {s.title}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed text-sm mb-3">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4">Sorularınız için: destek@sahteavci.com</p>
          <Button variant="outline" asChild>
            <Link to="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
