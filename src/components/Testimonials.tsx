import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "James Smith",
    role: "Founder, AI-Solutions",
    text: "Vasanth's ability to integrate complex AI models into seamless full-stack applications is truly impressive. He doesn't just build features; he builds intelligent systems that solve real problems.",
    avatar: "JS",
  },
  {
    name: "David Chen",
    role: "CTO, TechFlow",
    text: "Working with Vasanth was a game-changer. He automated our entire data processing pipeline using Generative AI, saving us hundreds of hours man-hours every month. Highly recommended!",
    avatar: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateApp",
    text: "The real-time dashboard Vasanth built for us is world-class. His technical expertise across the stack and his product-first thinking make him an invaluable partner for any startup.",
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary relative overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 animate-blob"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-primary-foreground/50 mt-4 max-w-md mx-auto">
              Discover what clients have to say about their experiences working with me.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div className="glass-card-strong p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                    <p className="text-primary-foreground/50 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
