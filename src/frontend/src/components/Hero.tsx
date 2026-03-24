import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  MessageSquare,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const floatingBadges = [
  { label: "Angular 19", color: "#dd0031", delay: 0 },
  { label: "React.js", color: "#61dafb", delay: 0.5 },
  { label: "Firebase", color: "#ffca28", delay: 1 },
  { label: "TypeScript", color: "#3178c6", delay: 1.5 },
  { label: "Node.js", color: "#68a063", delay: 2 },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "7+", label: "Projects Shipped" },
  { value: "3", label: "Companies" },
  { value: "Remote", label: "Available" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative section-dark tech-grid min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.19 145 / 0.06)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.19 145 / 0.04)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[var(--brand-green)] text-brand-green mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                Available for Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4"
            >
              Gopal
              <span className="gradient-green-text block">Kathiriya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#9AA3AB] text-lg font-medium mb-4 leading-relaxed"
            >
              Senior Angular &amp; React Developer
              <span className="text-white"> | </span>
              Building Scalable SaaS &amp; Enterprise Applications
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#9AA3AB] text-base leading-relaxed mb-8 max-w-lg"
            >
              5+ years delivering high-performance web applications across
              <span className="text-white"> SaaS</span>,
              <span className="text-white"> healthcare</span>, and
              <span className="text-white"> real estate</span> domains. Expert
              in Angular, React, Firebase, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-black font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-green"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2A2F33] text-white font-semibold text-sm hover:border-[var(--brand-green)] hover:text-brand-green transition-all hover:-translate-y-0.5"
              >
                <MessageSquare size={16} /> Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Right — Avatar + Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Green ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[var(--brand-green)] opacity-20" />
              <div className="absolute inset-3 rounded-full border border-[var(--brand-green)] opacity-10" />

              {/* Avatar */}
              <div
                className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#2A2F33]"
                style={{ background: "var(--dark-card)" }}
              >
                <img
                  src="/assets/generated/gopal-profile-upright.jpeg"
                  alt="Gopal Kathiriya"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge, i) => {
                const angles = [0, 72, 144, 216, 288];
                const angle = (angles[i] - 90) * (Math.PI / 180);
                const radius = 155;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={badge.label}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: badge.delay,
                    }}
                  >
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap text-black"
                      style={{ background: badge.color }}
                    >
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card-dark p-4 text-center">
              <div className="font-display text-3xl font-bold text-brand-green">
                {stat.value}
              </div>
              <div className="text-dark-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
