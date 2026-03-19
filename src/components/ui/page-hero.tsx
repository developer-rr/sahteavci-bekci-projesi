import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <div className={cn("py-16 md:py-24 px-4 md:px-8 text-center", className)}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
