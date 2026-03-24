import {
  Code2,
  HeadphonesIcon,
  MapPin,
  Rocket,
  Search,
  TestTube,
} from "lucide-react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "Understanding goals, requirements, and technical constraints",
  },
  {
    num: "02",
    icon: MapPin,
    title: "Planning",
    desc: "Architecture design, tech stack selection, and sprint planning",
  },
  {
    num: "03",
    icon: Code2,
    title: "Development",
    desc: "Agile sprints with clean code and regular demos",
  },
  {
    num: "04",
    icon: TestTube,
    title: "Testing",
    desc: "TDD approach with unit, integration, and e2e tests",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Deployment",
    desc: "CI/CD pipelines to Netlify, Vercel, or Firebase",
  },
  {
    num: "06",
    icon: HeadphonesIcon,
    title: "Support",
    desc: "Post-launch monitoring, bug fixes, and feature updates",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-dark-alt py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            How I Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            My Process
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{
              background: "var(--dark-border)",
              marginLeft: "8.33%",
              marginRight: "8.33%",
            }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                data-ocid={`process.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div
                  className="w-16 h-16 rounded-full border-2 border-[var(--brand-green)] flex items-center justify-center mx-auto mb-4 relative"
                  style={{ background: "var(--dark-card)" }}
                >
                  <step.icon size={24} className="text-brand-green" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-black flex items-center justify-center"
                    style={{ background: "var(--brand-green)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-dark-muted text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
