import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="container py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">{study.title}</h1>
          <p className="text-lg text-muted-foreground">{study.excerpt}</p>
        </header>

        <div className="mb-12 aspect-video overflow-hidden rounded-lg">
          <img
            src={study.image}
            alt={study.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert mx-auto max-w-none">
          <div dangerouslySetInnerHTML={{ __html: study.content }} />
        </div>
      </div>
    </article>
  );
}