import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";
import projectHandwriting from "@/assets/project-handwriting.png";
import projectVoice from "@/assets/project-voice.png";
import projectCrime from "@/assets/project-crime.png";

const projects = [
  {
    title: "AI Handwriting Generator",
    category: "AI & Automation",
    description: "Built a system that extracts text from PDFs/images using AI and recreates it in custom handwriting style, generating realistic handwritten PDFs.",
    tags: ["AI", "Python", "PDF Generation", "Computer Vision"],
    color: "from-accent/20 to-cta/20",
    image: projectHandwriting,
  },
  {
    title: "Audiora AI",
    category: "AI Podcast Generation",
    description: "AI-powered podcast generation meets audio social media. Create, discover, and share audio content in any language.",
    tags: ["AI", "Next.js", "Podcast Generation", "Social Audio"],
    color: "from-accent/10 to-cta/20",
    image: projectVoice,
    link: "https://audiora-ai.vercel.app/",
  },
  {
    title: "Predictive Crime Analysis Agent",
    category: "AI & Intelligence",
    description: "Designing an AI system that forecasts possible crime locations and patterns using spatio-temporal data and intelligent reasoning.",
    tags: ["AI", "Predictive Modeling", "Data Analysis", "Python"],
    color: "from-accent/20 to-cta/10",
    image: projectCrime,
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
                onClick={() => project.link && window.open(project.link, "_blank")}
                className={`group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 cursor-pointer ${hoveredIndex === i ? "shadow-xl shadow-accent/10 -translate-y-1" : ""
                  }`}
              >
                {/* Image / Gradient header */}
                <div className="h-64 relative overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="relative z-10 text-6xl opacity-20 font-heading font-bold text-white">
                    0{i + 1}
                  </div>
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
