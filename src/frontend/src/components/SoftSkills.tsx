import {
  Brain,
  Crown,
  GraduationCap,
  MessageCircle,
  Repeat,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const softSkills = [
  {
    icon: Crown,
    title: "Leadership",
    desc: "Driving technical decisions and leading by example",
  },
  {
    icon: GraduationCap,
    title: "Mentoring",
    desc: "Guiding junior developers and sharing knowledge",
  },
  {
    icon: Brain,
    title: "Analytical Thinking",
    desc: "Breaking complex problems into clear solutions",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    desc: "Clear technical and non-technical communication",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Thriving in cross-functional Agile teams",
  },
  {
    icon: Repeat,
    title: "Adaptability",
    desc: "Quickly learning new tech and shifting priorities",
  },
];

export default function SoftSkills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            People & Growth
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Soft Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-gray-100 p-5 text-center hover-lift bg-gray-50 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "oklch(0.72 0.19 145 / 0.1)" }}
              >
                <skill.icon size={22} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-sm mb-1">
                {skill.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
