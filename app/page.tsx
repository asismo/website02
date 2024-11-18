import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Briefcase, Book, Code } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Case Studies",
      description: "Explore detailed case studies of my most impactful projects",
      icon: Briefcase,
      href: "/case-studies",
    },
    {
      title: "Methodology",
      description: "Learn about my approach to product design and problem-solving",
      icon: Book,
      href: "/methodology",
    },
    {
      title: "About",
      description: "Get to know more about my journey and expertise",
      icon: ArrowRight,
      href: "/about",
    },
    {
      title: "AI Lab",
      description: "Discover experimental projects and AI innovations",
      icon: Code,
      href: "/ai-lab",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Product Design &{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Crafting meaningful digital experiences through thoughtful design and
          innovative solutions.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:border-foreground"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <section.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 h-6 w-6 opacity-0 transition-all group-hover:opacity-100" />
          </Link>
        ))}
      </section>

      <section className="mt-16 text-center">
        <div className="inline-flex items-center rounded-full border bg-muted px-4 py-1.5">
          <span className="flex items-center text-sm font-medium">
            <Lightbulb className="mr-2 h-4 w-4" />
            Latest AI Experiments
          </span>
        </div>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/ai-lab">
              Explore AI Lab
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}