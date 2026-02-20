import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "",
  });

  const services = ["Website Design", "Web Development", "UI/UX Design", "Consulting", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – would integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "", service: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left – testimonial highlight */}
          <ScrollReveal>
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-primary p-10 flex flex-col justify-between">
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/15 animate-blob"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              />
              <div className="relative">
                <p className="text-primary-foreground/70 text-lg leading-relaxed italic mb-8">
                  "Alex provided us with a complete design system and made sure that none of our processes were lousy. I would gladly reach out to him again for future projects."
                </p>
              </div>
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold">
                  EM
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Emily Manekshaw</p>
                  <p className="text-primary-foreground/50 text-sm">COO, Prime Inc.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right – form */}
          <ScrollReveal delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Let's work together and<br />
                <span className="gradient-text">plan your project.</span>
              </h2>
              <p className="text-muted-foreground mb-8">Reach out to me anytime.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Service</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: s })}
                        className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                          formData.service === s
                            ? "bg-cta text-cta-foreground border-cta"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 resize-none"
                    placeholder="Leave a message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-cta text-cta-foreground font-semibold text-sm transition-all duration-200 hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-3 focus:ring-accent/50"
                >
                  Get Started
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
