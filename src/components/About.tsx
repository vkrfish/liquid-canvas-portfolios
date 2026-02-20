import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-portrait.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "4.9", label: "Avg. Rating" },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-16">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img src={heroImg} alt="About Alex" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl bg-card shadow-lg">
                <p className="text-2xl font-heading font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Years of Freelancing</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a Computer Science student with a passion for building beautiful, functional web applications. As a freelancer, I've had the privilege of working with startups and businesses across the globe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines clean code with stunning design. I believe every pixel matters and every interaction should feel intentional. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sketching UI concepts.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="text-2xl font-heading font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
