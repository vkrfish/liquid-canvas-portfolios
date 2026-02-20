import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/vasanth-portrait.jpg";

const About = () => {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "4.0", label: "Avg. Rating" },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-16">
            Building Intelligent <span className="gradient-text">Solutions</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img src={heroImg} alt="Vasanth - AI Developer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl bg-card shadow-lg">
                <p className="text-2xl font-heading font-bold text-foreground">AI</p>
                <p className="text-sm text-muted-foreground">Expertise</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a student and AI-focused builder passionate about creating real-world technology solutions. I specialize in developing AI-powered systems, automation tools, and scalable full-stack applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is not just on writing code, but on building complete, production-ready systems that solve meaningful problems. I enjoy combining artificial intelligence, backend architecture, and modern frontend frameworks to create impactful digital products.
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
