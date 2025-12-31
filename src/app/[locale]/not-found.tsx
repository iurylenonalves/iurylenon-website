import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function NotFound() {
  return (
    <SectionWrapper className="h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="space-y-6 max-w-md mx-auto">
        {/* Icon and title */}
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 rounded-full bg-muted mb-4">
            <FileQuestion className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            404
          </h1>
          <h2 className="text-xl font-semibold text-primary">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          The digital path you are looking for doesn&apos;t exist or has been moved to a new infrastructure.
        </p>

        {/* Strategic Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="default" size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Operations
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}