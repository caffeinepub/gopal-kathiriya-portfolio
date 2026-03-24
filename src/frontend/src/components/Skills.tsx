import {
  GitBranch,
  Monitor,
  Puzzle,
  Rocket,
  Server,
  TestTube,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "#61dafb",
    skills: [
      "Angular (v9–19)",
      "React.js",
      "Redux",
      "TypeScript",
      "RxJS",
      "NGRX",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Material UI",
    ],
  },
  {
    icon: Server,
    title: "Backend & Cloud",
    color: "#68a063",
    skills: [
      "Firebase (Firestore)",
      "Realtime DB",
      "Cloud Functions",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    icon: TestTube,
    title: "Testing",
    color: "#f97316",
    skills: ["Jasmine", "Karma", "TDD", "Firebase App Check"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    color: "#a855f7",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "Webpack",
      "GitHub Actions",
      "Bitbucket Pipelines",
    ],
  },
  {
    icon: Puzzle,
    title: "Integrations",
    color: "#eab308",
    skills: [
      "Stripe",
      "Zapier",
      "Google Meet API",
      "Chart.js",
      "Apache ECharts",
      "ApexCharts",
      "Formik",
      "Axios",
      "React Router",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment",
    color: "#22c55e",
    skills: ["Netlify", "Vercel", "Firebase Hosting"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-dark py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-dark p-6 hover-lift group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${group.color}20` }}
                >
                  <group.icon size={20} style={{ color: group.color }} />
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "var(--dark-card-inner)",
                      color: "var(--dark-text)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
