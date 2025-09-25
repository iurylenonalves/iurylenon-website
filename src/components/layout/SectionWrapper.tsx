import { cn } from "@/lib/utils"; // Importa a função utilitária do shadcn

// Definimos as propriedades que o nosso Wrapper pode receber
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    // A classe `container` garante a largura máxima e centralização.
    // As classes `px-*` garantem o espaçamento lateral consistente.
    // `cn` junta as classes padrão com qualquer classe extra que passarmos (como o padding vertical).
    <div className={cn("container mx-auto px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}