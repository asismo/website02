import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCaseStudies } from "@/lib/case-studies";

export default function CaseStudies() {
  const caseStudies = getCaseStudies();

  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Case Studies</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore detailed case studies of projects that showcase my approach to
          solving complex design challenges.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`}>
            <Card className="h-full overflow-hidden transition-colors hover:bg-muted/50">
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{study.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}