import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary";
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-secondary/30",
    primary: "bg-gradient-to-br from-primary to-primary/80"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-20 lg:py-32",
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
