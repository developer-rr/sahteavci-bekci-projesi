import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent";
}

export default function Pill({ children, className, variant = "default" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "accent" && "bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
