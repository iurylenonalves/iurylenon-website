import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />      
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      <Footer />
    </>
  );
}