import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-lg">
       <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-2xl">{project.title}</CardTitle>
        <CardDescription className="h-24 overflow-y-auto text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4 flex items-center gap-4">
        {project.liveUrl ? (
          <Button asChild>
            <Link 
              href={project.liveUrl} 
              target={project.liveUrl.startsWith("/") ? "_self" : "_blank"}
              rel={project.liveUrl.startsWith("/") ? undefined : "noopener noreferrer"}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {project.liveUrl === '/contact' ? 'See it in action' : 'Live Project'}
            </Link>
          </Button>
        ) : (
            <Button 
              disabled 
              variant="outline" 
              className="w-full opacity-50 cursor-not-allowed"
            >
              In Progress
            </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="secondary">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}