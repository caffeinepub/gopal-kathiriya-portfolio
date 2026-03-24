import { Cloud, Code2, FlaskConical, Users } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Angular Expert",
    desc: "Deep expertise in Angular v9–v19, TypeScript, RxJS, and NGRX",
  },
  {
    icon: Cloud,
    title: "Firebase & Cloud",
    desc: "Firestore, Realtime DB, Cloud Functions, and serverless patterns",
  },
  {
    icon: FlaskConical,
    title: "Agile & TDD",
    desc: "Test-driven development with Jasmine, Karma, and CI/CD pipelines",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc: "Mentoring developers and driving code quality standards",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: "var(--dark-card)" }}
            >
              <img
                src="/assets/uploads/8w5a3382.jpg-019d1fa0-0788-738d-b306-7146be6be96f-1.jpeg"
                alt="Gopal Kathiriya"
                className="w-full object-cover object-top rounded-2xl"
                style={{ maxHeight: 460 }}
              />
              {/* Overlay card */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
                style={{
                  background: "rgba(11,13,14,0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--dark-border)",
                }}
              >
                <div className="font-display font-bold text-white text-lg">
                  Gopal Kathiriya
                </div>
                <div className="text-brand-green text-sm">
                  Senior Software Engineer
                </div>
                <div className="text-[#9AA3AB] text-xs mt-1">
                  📍 Surat, India · Available Remotely
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Results-Driven
              <br />
              <span className="text-brand-green">Frontend Specialist</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Results-driven Senior Software Engineer with 5+ years of
              experience in front-end development. Expert in{" "}
              <strong>Angular (v9–19)</strong>, TypeScript, RxJS, Firebase,
              NGRX, and Material UI. Strong background in building scalable
              architectures, optimizing performance, implementing multi-language
              functionality, and integrating complex third-party APIs.
              Experienced in Agile environments, TDD, CI/CD pipelines, and
              mentoring teams to deliver user-centric solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.72 0.19 145 / 0.1)" }}
                  >
                    <h.icon size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {h.title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                      {h.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
