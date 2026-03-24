import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0B0D0E]/95 backdrop-blur-md shadow-lg border-b border-[#2A2F33]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          data-ocid="nav.link"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display font-bold text-sm text-black shadow-green group-hover:scale-105 transition-transform">
            GK
          </div>
          <span className="hidden sm:block font-display font-semibold text-white text-sm">
            Gopal Kathiriya
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className="px-3 py-2 text-sm text-[#9AA3AB] hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--brand-green)] text-[var(--brand-green)] text-sm font-medium hover:bg-[var(--brand-green)] hover:text-black transition-all duration-200"
          >
            <Download size={14} />
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          type="button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#0F1112] border-b border-[#2A2F33] px-4 pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                data-ocid="nav.link"
                className="block py-2.5 text-[#9AA3AB] hover:text-white border-b border-[#2A2F33] last:border-0 text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  window.location.hash = "#contact";
                }}
                className="w-full text-center px-4 py-2 rounded-full border border-[var(--brand-green)] text-[var(--brand-green)] text-sm font-medium"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
