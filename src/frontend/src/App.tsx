import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Process />
          <SoftSkills />
          <Education />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
        <Toaster richColors />
      </div>
    </QueryClientProvider>
  );
}
