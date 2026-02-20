import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "UI/UX Design", level: 90, icon: "🎨" },
  { name: "React / Next.js", level: 92, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "📘" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Product Design", level: 78, icon: "📐" },
  { name: "Figma / Framer", level: 88, icon: "🖌️" },
];

const tools = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Framer",
  "Node.js", "PostgreSQL", "Git", "VS Code", "Vercel", "Supabase",
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary-foreground">{name}</span>
        <span className="text-sm font-mono text-accent">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay / 1000, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  </ScrollReveal>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-primary relative overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 animate-blob"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">My Skills</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Background Skills &<br />
            <span className="gradient-text">Accomplishments</span>
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mb-16">
            Years of self-learning and freelancing have equipped me with a versatile skill set spanning design and development.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="space-y-8">
              <h3 className="text-xl font-heading font-semibold text-primary-foreground">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-primary-foreground/10 text-primary-foreground/70 hover:border-accent/50 hover:text-accent transition-all duration-200 hover:scale-[1.05] cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="glass-card-strong p-8 rounded-2xl mt-8">
                <p className="text-primary-foreground/60 text-sm font-mono mb-2">Currently Learning</p>
                <div className="flex flex-wrap gap-3">
                  {["Three.js", "Rust", "AI/ML", "Web3"].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
