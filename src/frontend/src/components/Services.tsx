import {
  Cloud,
  Code2,
  Layers,
  Layout,
  Link,
  MessageSquare,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "High-performance Angular & React apps with clean architecture, reusable components, and exceptional UX.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    desc: "End-to-end solutions combining React/Angular frontend with Node.js, Firebase, and MongoDB backend.",
  },
  {
    icon: Cloud,
    title: "SaaS Application Development",
    desc: "Scalable multi-tenant SaaS platforms with subscription management, real-time features, and analytics.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Web vitals improvements, bundle optimization, lazy loading, and caching strategies for faster apps.",
  },
  {
    icon: Link,
    title: "API Integration",
    desc: "Seamless third-party API integrations including Stripe, Zapier, Google APIs, and custom REST/GraphQL.",
  },
  {
    icon: Layout,
    title: "UI/UX Implementation",
    desc: "Pixel-perfect implementation of design systems with responsive layouts and accessibility standards.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    desc: "Architecture reviews, tech stack guidance, and performance audits for startups and enterprises.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-[#F9FAFB]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            What I Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover-lift group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "oklch(0.72 0.19 145 / 0.1)" }}
              >
                <svc.icon size={22} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
