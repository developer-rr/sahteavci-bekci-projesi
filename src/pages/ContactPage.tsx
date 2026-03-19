import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero title="İletişim" subtitle="Bizimle iletişime geçin." />
      <Section variant="alt">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card rounded-lg border border-border p-6 flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
              <p className="text-muted-foreground text-sm">destek@sahteavci.com</p>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 flex items-start gap-4">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Adres</h3>
              <p className="text-muted-foreground text-sm">İçerik hazırlanıyor.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
