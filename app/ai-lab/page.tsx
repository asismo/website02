import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Sparkles, Workflow } from "lucide-react";

export default function AILab() {
  const projects = [
    {
      title: "AI Design Assistant",
      description: "Exploring how AI can augment the design process through automated suggestions and pattern recognition.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      tags: ["Machine Learning", "UI Design", "Automation"],
      status: "In Progress",
    },
    {
      title: "Generative UI Patterns",
      description: "Using AI to generate and test different UI patterns based on user behavior and preferences.",
      image: "https://images.unsplash.com/photo-1676299081847-824916de7c40?auto=format&fit=crop&q=80",
      tags: ["Generative AI", "Pattern Design", "User Testing"],
      status: "Completed",
    },
    {
      title: "Adaptive Interfaces",
      description: "Research into AI-powered interfaces that adapt to individual user needs and contexts.",
      image: "https://images.unsplash.com/photo-1675426513824-97304dd3f761?auto=format&fit=crop&q=80",
      tags: ["Adaptive UI", "Personalization", "UX Research"],
      status: "Planning",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          Experimental Projects
        </span>
        <h1 className="mb-4 mt-4 text-4xl font-bold">AI Lab</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Exploring the intersection of artificial intelligence and design through
          experimental projects and research.
        </p>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        <Card className="bg-primary/5">
          <CardHeader>
            <Bot className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">AI Integration</CardTitle>
          </CardHeader>
          <CardContent>
            Exploring ways to integrate AI capabilities into design workflows and
            tools.
          </CardContent>
        </Card>
        <Card className="bg-primary/5">
          <CardHeader>
            <Brain className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Machine Learning</CardTitle>
          </CardHeader>
          <CardContent>
            Utilizing ML models to understand and predict user behavior patterns.
          </CardContent>
        </Card>
        <Card className="bg-primary/5">
          <CardHeader>
            <Workflow className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Automation</CardTitle>
          </CardHeader>
          <CardContent>
            Automating repetitive design tasks while maintaining quality and
            consistency.
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="aspect-video md:aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}