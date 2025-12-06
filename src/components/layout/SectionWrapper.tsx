import { cn } from "@/lib/utils"; 

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    // The `container` class ensures maximum width and centering.
    // The `px-*` classes ensure consistent lateral spacing.
    // `cn` combines the default classes with any extra classes we pass (like vertical padding).
    <div className={cn("container mx-auto px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}