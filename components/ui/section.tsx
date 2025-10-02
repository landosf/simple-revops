import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "dark";
  padding?: "default" | "large" | "small";
}

export function Section({ 
  children, 
  className, 
  id, 
  background = "white",
  padding = "default" 
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900"
  };

  const paddingClasses = {
    default: "py-16 lg:py-24",
    large: "py-20 lg:py-32",
    small: "py-12 lg:py-16"
  };

  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
