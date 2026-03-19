import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" subtitle="Marka koruması ve dijital güvenlik hakkında yazılar." />
      <Section variant="alt">
        <div className="bg-card rounded-lg border border-border p-12 text-center">
          <p className="text-muted-foreground">İçerik hazırlanıyor.</p>
        </div>
      </Section>
    </>
  );
}
