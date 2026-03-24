import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Scriptus Solutions",
    period: "May 2023 – Present",
    type: "Current",
    bullets: [
      "Leading frontend development using Angular and Firebase",
      "Mentoring junior developers and ensuring code quality",
      "Implementing scalable architecture and API integrations",
      "Working in Agile and TDD environments",
    ],
  },
  {
    role: "Software Engineer",
    company: "LogwinTech",
    period: "Jan 2022 – May 2023",
    type: "Past",
    bullets: [
      "Developed multi-tier web applications",
      "Worked with Angular, React, and MVC frameworks",
      "Practiced TDD and mentored a small team",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Ajeevan Tech",
    period: "May 2020 – Jan 2022",
    type: "Past",
    bullets: [
      "Built and maintained Angular applications",
      "Participated in Agile workflows and code reviews",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            Career
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-6" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-6 pl-16"
              >
                {/* Green dot */}
                <div
                  className="absolute left-0 top-3 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-sm font-display"
                  style={{
                    background: "var(--brand-green)",
                    boxShadow: "0 0 0 4px white, 0 0 0 6px var(--brand-green)",
                  }}
                >
                  0{i + 1}
                </div>

                <div className="flex-1 rounded-2xl border border-gray-100 p-6 bg-gray-50 hover:border-green-200 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-gray-900 text-lg">
                        {exp.role}
                      </h3>
                      <div className="text-brand-green font-semibold text-sm">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white rounded-full px-3 py-1 border border-gray-200">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
