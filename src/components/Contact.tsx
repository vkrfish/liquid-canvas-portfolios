import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = ["AI Development", "Full-Stack Development", "Automation Systems", "Consulting", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "305fa677-5fc6-4617-8b40-161892865162",
          ...formData,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "", service: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
                  "Vasanth's ability to integrate complex AI models into seamless full-stack applications is truly impressive. He doesn't just build features; he builds intelligent systems that solve real problems."
                </p>
              </div>
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">James Smith</p>
                  <p className="text-primary-foreground/50 text-sm">Founder, AI-Solutions</p>
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
                        className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${formData.service === s
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
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-accent/50 flex items-center justify-center gap-2 ${isSubmitting ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-cta text-cta-foreground hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get Started"
                  )}
                </button>

                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-green-500 font-medium"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
