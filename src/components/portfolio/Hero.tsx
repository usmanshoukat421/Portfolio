import { motion } from "motion/react";
import profile from "../../assets/profile.png";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="gradient-text">Usman Shoukat</span>
            <br />
            <span className="text-foreground/90">Front-End Developer</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I craft fast, accessible and visually striking web experiences with
            modern JavaScript, Laravel and a sharp eye for design.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground glow hover:scale-[1.03] transition"
            >
              View my work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold hover:bg-card transition"
            >
              <Download className="size-4" />
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="mailto:usmandotshoukat@gmail.com" className="hover:text-primary transition" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <a href="#" className="hover:text-primary transition" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href="#" className="hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <span className="h-px w-12 bg-border" />
            <span className="text-xs">Based in Pakistan</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full gradient-bg blur-2xl opacity-60" />
            <div className="absolute inset-0 rounded-full gradient-bg p-[3px]">
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img
                  src={profile}
                  alt="Usman Shoukat"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -right-4 glass rounded-2xl px-4 py-2 text-xs font-semibold"
            >
              ⚡ 3+ yrs
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-4 glass rounded-2xl px-4 py-2 text-xs font-semibold"
            >
              💻 Front-End
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
