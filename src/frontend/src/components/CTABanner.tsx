import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.72 0.19 145), oklch(0.55 0.17 145))",
      }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
            Available for freelance projects, remote roles, and technical
            consulting. Let's create high-impact digital products together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              data-ocid="cta.primary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <a
              href="mailto:kathiriyagopal29@gmail.com"
              data-ocid="cta.secondary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all hover:-translate-y-0.5"
            >
              <CalendarDays size={16} /> Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
