import Link from "next/link";
    import { PenSquare } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card";
    import { SectionWrapper } from "@/components/layout/SectionWrapper";

    export function BlogComingSoon() {
      return (
        <SectionWrapper className="flex items-center justify-center py-20 md:py-28">
          <Card className="w-full max-w-lg text-center shadow-lg">
            <CardHeader>
              <div className="mx-auto bg-slate-100 p-3 rounded-full w-fit">
                <PenSquare className="h-8 w-8 text-[#000037]" />
              </div>
              <CardTitle className="font-heading text-3xl mt-4">
                New Content Coming Soon!
              </CardTitle>
              <CardDescription className="text-base">
                I'm currently working on creating insightful articles about web development,
                technology, and project case studies. Stay tuned!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                In the meantime, feel free to check out my projects or get in touch.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </CardFooter>
          </Card>
        </SectionWrapper>
      );
    }