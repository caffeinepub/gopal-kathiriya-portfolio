import { Github, Heart, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="section-dark border-t"
      style={{ borderColor: "var(--dark-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display font-bold text-sm text-black">
                GK
              </div>
              <span className="font-display font-bold text-white">
                Gopal Kathiriya
              </span>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed">
              Senior Angular &amp; React Developer building scalable SaaS and
              enterprise applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Services",
                "Process",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  data-ocid="footer.link"
                  className="text-dark-muted text-sm hover:text-brand-green transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:kathiriyagopal29@gmail.com"
                className="flex items-center gap-2 text-dark-muted text-sm hover:text-brand-green transition-colors"
              >
                <Mail size={14} /> kathiriyagopal29@gmail.com
              </a>
              <a
                href="tel:+916353661941"
                className="flex items-center gap-2 text-dark-muted text-sm hover:text-brand-green transition-colors"
              >
                <Phone size={14} /> +91 6353661941
              </a>
              <a
                href="https://www.linkedin.com/in/gopalkathiriya/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-dark-muted text-sm hover:text-brand-green transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/MRGops2912"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-dark-muted text-sm hover:text-brand-green transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderColor: "var(--dark-border)" }}
        >
          <p className="text-dark-muted text-sm">
            © {year} Gopal Kathiriya. All rights reserved.
          </p>
          <p className="text-dark-muted text-sm flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-brand-green fill-current" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-green transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
