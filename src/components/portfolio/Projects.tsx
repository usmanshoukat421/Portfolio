import { Reveal, SectionTitle } from "./Reveal";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "IT Services Site",
    description:
      "A modern IT Servies platform Empowering business growth through secure, scalable IT infrastructure.",
    tags: ["Laravel", "PHP", "JavaScript", "Bootstrap", "MySQL"],
    gradient: "from-cyan-500/30 to-fuchsia-500/30",
    accent: "🛍️",
    liveUrl: "https://capitol.technology/",
  },
  {
    title: "Donation Website",
    description:
      "A secure crowdfunding platform where individuals and communities raise funds for urgent personal and local needs.",
    tags: ["WordPress", "JavaScript", "HTML", "CSS"],
    gradient: "from-fuchsia-500/30 to-amber-500/30",
    accent: "✅",
    liveUrl: "https://www.kidpower.org/lander",
  },
  {
    title: "Digital Marketing Agency",
    description:
      "A full-service digital marketing agency helping businesses attract, engage, and convert their ideal customers.",
    tags: ["WordPress", "HTML", "CSS", "Bootstrap", "JavaScript"],
    gradient: "from-amber-500/30 to-cyan-500/30",
    accent: "✨",
    liveUrl: "https://skillbridgeservices.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Selected Work" title="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card-elev rounded-3xl overflow-hidden h-full flex flex-col group hover:translate-y-[-6px] transition-all duration-500">
                <div
                  className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {p.accent}
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 hover:text-primary transition"
                    >
                      Live <ArrowUpRight className="size-3.5" />
                    </a>
                    {/* <a href="#" className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition">
                      <Github className="size-3.5" /> Code
                    </a> */}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
