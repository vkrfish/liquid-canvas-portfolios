const Footer = () => {
  const columns = [
    {
      title: "Services",
      links: ["Web Development", "UI/UX Design", "Consulting", "Open Source"],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Resume", "GitHub"],
    },
    {
      title: "Connect",
      links: ["Twitter/X", "LinkedIn", "GitHub", "Email"],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <p className="font-heading text-xl font-bold text-foreground mb-3">
              Alex<span className="gradient-text">Dev</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Student & freelance developer crafting beautiful digital experiences.
            </p>
            <div className="flex gap-4">
              {["X", "In", "GH"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200 text-xs font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© 2026 AlexDev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-xs hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground text-xs hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
