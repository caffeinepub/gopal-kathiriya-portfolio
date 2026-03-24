import {
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    mutate(
      {
        name: form.name,
        email: form.email,
        message: `Subject: ${form.subject}\n\n${form.message}`,
      },
      {
        onSuccess: () => {
          toast.success("Message sent! I'll get back to you soon.");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        onError: () => toast.error("Failed to send. Please try again."),
      },
    );
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kathiriyagopal29@gmail.com",
      href: "mailto:kathiriyagopal29@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6353661941",
      href: "tel:+916353661941",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gopalkathiriya",
      href: "https://www.linkedin.com/in/gopalkathiriya/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MRGops2912",
      href: "https://github.com/MRGops2912",
    },
  ];

  return (
    <section id="contact" className="section-dark py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-green mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-white text-xl mb-2">
              Let's Work Together
            </h3>
            <p className="text-dark-muted mb-8 leading-relaxed">
              Available for freelance projects, remote positions, and consulting
              engagements. Reach out and let's discuss your next project.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-ocid="contact.link"
                  className="flex items-center gap-4 p-4 card-dark hover:border-[var(--brand-green)] transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.19 145 / 0.1)" }}
                  >
                    <item.icon size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="text-dark-muted text-xs">{item.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-brand-green transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="card-dark p-10 flex flex-col items-center justify-center text-center h-full min-h-64"
              >
                <CheckCircle size={48} className="text-brand-green mb-4" />
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-dark-muted">
                  Thanks for reaching out. I'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.modal"
                className="card-dark p-6 space-y-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-dark-muted text-xs font-medium block mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#9AA3AB] outline-none focus:border-[var(--brand-green)] transition-colors"
                      style={{
                        background: "var(--dark-card-inner)",
                        border: "1px solid var(--dark-border)",
                      }}
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-dark-muted text-xs font-medium block mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      data-ocid="contact.input"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#9AA3AB] outline-none focus:border-[var(--brand-green)] transition-colors"
                      style={{
                        background: "var(--dark-card-inner)",
                        border: "1px solid var(--dark-border)",
                      }}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-dark-muted text-xs font-medium block mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    placeholder="Project inquiry, collaboration..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#9AA3AB] outline-none focus:border-[var(--brand-green)] transition-colors"
                    style={{
                      background: "var(--dark-card-inner)",
                      border: "1px solid var(--dark-border)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-dark-muted text-xs font-medium block mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#9AA3AB] outline-none focus:border-[var(--brand-green)] transition-colors resize-none"
                    style={{
                      background: "var(--dark-card-inner)",
                      border: "1px solid var(--dark-border)",
                    }}
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  className="w-full py-3 rounded-xl font-semibold text-black flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-70"
                  style={{ background: "var(--brand-green)" }}
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
