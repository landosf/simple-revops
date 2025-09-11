import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
  center?: boolean;
  gradient?: boolean;
}

export function Heading({ children, level, className, center = false, gradient = false }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight",
    2: "text-3xl lg:text-4xl font-bold",
    3: "text-2xl lg:text-3xl font-bold",
    4: "text-xl font-semibold"
  };

  return (
    <Component 
      className={cn(
        baseClasses[level],
        center && "text-center",
        gradient ? "gradient-text" : "text-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}
