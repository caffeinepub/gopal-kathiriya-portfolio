import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            Academic Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="card-dark p-8 flex flex-col sm:flex-row items-start gap-6"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(0.72 0.19 145 / 0.15)" }}
          >
            <GraduationCap size={28} className="text-brand-green" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xl mb-1">
              Bachelor of Engineering in Information Technology
            </h3>
            <div className="text-brand-green font-semibold mb-3">
              Silver Oak University
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-dark-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> Ahmedabad, India
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> 2016 – 2020
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
