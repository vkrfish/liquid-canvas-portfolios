import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description: "A modern e-commerce platform with real-time inventory, payment integration, and an admin dashboard built for a fashion startup.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-accent/20 to-cta/20",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design & Development",
    description: "Complete redesign and development of an analytics dashboard serving 10K+ daily users with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    color: "from-cta/20 to-accent/10",
  },
  {
    title: "Mobile Banking App",
    category: "Product Design",
    description: "End-to-end design for a fintech startup's mobile banking application, from user research to high-fidelity prototypes.",
    tags: ["Figma", "User Research", "Prototyping"],
    color: "from-accent/10 to-cta/20",
  },
  {
    title: "Portfolio Generator",
    category: "Open Source",
    description: "An open-source tool that generates beautiful developer portfolios from GitHub data. 2K+ stars on GitHub.",
    tags: ["React", "GitHub API", "Vercel", "Open Source"],
    color: "from-cta/15 to-accent/15",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <motion.div
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 cursor-pointer ${
                  hoveredIndex === i ? "shadow-xl shadow-accent/10 -translate-y-1" : ""
                }`}
              >
                {/* Gradient header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <div className="text-6xl opacity-20 font-heading font-bold text-foreground/20">
                    0{i + 1}
                  </div>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: "radial-gradient(circle at 50% 50%, hsl(217 91% 60% / 0.3), transparent 70%)",
                    }}
                  />
                </div>

                <div className="p-8">
                  <p className="text-accent text-xs font-mono uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-xl font-heading font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
