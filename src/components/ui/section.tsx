import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt";
  id?: string;
}

export default function Section({ children, className, variant = "default", id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 px-4 md:px-8", variant === "alt" && "section-alt", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
