import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail } from "lucide-react";

export default function About() {
  const skills = [
    "UI/UX Design",
    "Product Strategy",
    "User Research",
    "Design Systems",
    "Prototyping",
    "Figma",
    "Design Thinking",
    "Interaction Design",
    "Information Architecture",
    "Usability Testing",
    "Agile/Scrum",
    "Design Leadership",
  ];

  return (
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
        <div>
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Product Designer with over 8 years of experience crafting digital
            experiences that combine beauty with functionality.
          </p>

          <div className="prose prose-neutral dark:prose-invert mb-8">
            <p>
              I specialize in creating user-centered designs that solve complex
              problems while delivering measurable business results. My approach
              combines strategic thinking with hands-on design execution.
            </p>
            <p>
              Throughout my career, I've had the privilege of working with
              startups and enterprise companies across various industries,
              including fintech, healthcare, and e-commerce.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <Card className="p-6">
          <div className="mb-6 aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="font-medium">Experience</h3>
              <p className="text-sm text-muted-foreground">8+ Years</p>
            </div>
            <div>
              <h3 className="font-medium">Education</h3>
              <p className="text-sm text-muted-foreground">
                M.S. Human-Computer Interaction
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}