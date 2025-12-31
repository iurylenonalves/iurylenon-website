import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TranslatedPathsProvider } from "@/context/TranslatedSlugsContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslatedPathsProvider>
      <div className="flex flex-col min-h-screen">
        <Header />      
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
    </TranslatedPathsProvider>
  );
}