import { BookOpen, CheckCircle, Users, Lightbulb } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      icon: Users,
      title: "User-Centered Research",
      description: "Deep dive into user needs through interviews, surveys, and behavioral analysis to understand pain points and opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Ideation",
      description: "Collaborative brainstorming and concept development focused on solving core user problems while aligning with business goals.",
    },
    {
      icon: BookOpen,
      title: "Iterative Design",
      description: "Rapid prototyping and testing cycles to refine solutions based on user feedback and quantitative data.",
    },
    {
      icon: CheckCircle,
      title: "Measured Implementation",
      description: "Systematic rollout with continuous monitoring and optimization based on user analytics and feedback.",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Design Methodology</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          A systematic approach to creating impactful digital experiences through
          research, iteration, and validation.
        </p>
      </div>

      <div className="mt-16 grid gap-12">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <step.icon className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="mb-3 text-2xl font-semibold">{step.title}</h2>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8">
        <h2 className="mb-4 text-2xl font-semibold">Design Principles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-medium">User-First Design</h3>
            <p className="text-sm text-muted-foreground">
              Every decision is made with the user's needs and goals in mind,
              ensuring intuitive and valuable experiences.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Data-Driven Decisions</h3>
            <p className="text-sm text-muted-foreground">
              Utilizing analytics and user feedback to make informed design
              choices and validate solutions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Accessible by Default</h3>
            <p className="text-sm text-muted-foreground">
              Ensuring designs are inclusive and accessible to all users,
              regardless of their abilities.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Continuous Iteration</h3>
            <p className="text-sm text-muted-foreground">
              Embracing an agile approach to design, constantly improving based
              on new insights and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}