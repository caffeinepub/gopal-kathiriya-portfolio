import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    name: "Foltric",
    domain: "SaaS",
    tagline: "SaaS Startup Builder Platform",
    tech: ["Angular 19", "Firebase", "Stripe", "Zapier", "Google Meet API"],
    bullets: [
      "Led frontend team",
      "Built chat system, sales page, pitch deck modules",
      "Integrated subscription payments and scheduling",
    ],
    gradient: "from-purple-900 to-blue-900",
  },
  {
    name: "PharmAssess",
    domain: "Healthcare",
    tagline: "Digital Healthcare Solution",
    tech: ["Angular 14", "Apache ECharts", "Asepha"],
    bullets: [
      "Analytics dashboards and role-based tracking",
      "Implemented QR appointment system",
    ],
    gradient: "from-teal-900 to-cyan-900",
  },
  {
    name: "Portefrio",
    domain: "Supply Chain",
    tagline: "Wholesale Supply Chain Platform",
    tech: ["Angular 17", "Firebase", "NGRX"],
    bullets: [
      "Migrated Angular versions",
      "Optimized performance",
      "Implemented real-time updates",
    ],
    gradient: "from-orange-900 to-amber-900",
  },
  {
    name: "Aldar",
    domain: "Real Estate",
    tagline: "Real Estate Management System",
    tech: ["Angular", "React", "Node.js"],
    bullets: [
      "Dashboards, filters, reporting tools",
      "Worked in large Agile team",
    ],
    gradient: "from-rose-900 to-pink-900",
  },
  {
    name: "Alisos",
    domain: "E-commerce",
    tagline: "E-commerce Platform",
    tech: ["Angular", "Microfrontend"],
    bullets: ["Performance improvements", "Page load speed optimization"],
    gradient: "from-indigo-900 to-violet-900",
  },
  {
    name: "Alivebeam",
    domain: "Healthcare",
    tagline: "Doctor Appointment App",
    tech: ["Angular", "React", "Node.js"],
    bullets: ["Scheduling module", "Client-facing features"],
    gradient: "from-green-900 to-emerald-900",
  },
  {
    name: "SNBL",
    domain: "Library",
    tagline: "Web Component Library",
    tech: ["Angular Elements"],
    bullets: ["Reusable components for external integration"],
    gradient: "from-slate-800 to-gray-900",
  },
];

const domainColors: Record<string, string> = {
  SaaS: "text-purple-300 bg-purple-900/40 border-purple-700/50",
  Healthcare: "text-teal-300 bg-teal-900/40 border-teal-700/50",
  "Supply Chain": "text-orange-300 bg-orange-900/40 border-orange-700/50",
  "Real Estate": "text-rose-300 bg-rose-900/40 border-rose-700/50",
  "E-commerce": "text-indigo-300 bg-indigo-900/40 border-indigo-700/50",
  Library: "text-gray-300 bg-gray-800/40 border-gray-600/50",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-dark py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              data-ocid={`projects.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-dark overflow-hidden hover-lift group flex flex-col"
            >
              {/* Gradient header */}
              <div
                className={`bg-gradient-to-br ${p.gradient} p-5 flex items-start justify-between`}
              >
                <div>
                  <div className="font-display font-bold text-white text-xl">
                    {p.name}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">
                    {p.tagline}
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${domainColors[p.domain] || "text-gray-300 bg-gray-800 border-gray-600"}`}
                >
                  {p.domain}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <ul className="space-y-1.5 mb-4 flex-1">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[#9AA3AB] text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "var(--dark-card-inner)",
                        color: "var(--dark-muted)",
                        border: "1px solid var(--dark-border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
