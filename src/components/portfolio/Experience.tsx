import { Reveal, SectionTitle } from "./Reveal";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Web Developer (PHP / Laravel)",
    company: "Capitol Technology",
    period: "2023 — Present",
    points: [
      "Built responsive marketing sites and dashboards using HTML, CSS, Bootstrap and modern JavaScript.",
      "Integrated REST APIs and crafted pixel-perfect UI from Figma designs.",
      "Collaborated with backend teams on Laravel-powered platforms.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Freelance",
    period: "2022 — 2023",
    points: [
      "Developed full-stack features in Laravel with Blade, MySQL and jQuery.",
      "Optimized page speed and improved Core Web Vitals across 10+ sites.",
      "Implemented authentication, dashboards and CRUD modules.",
    ],
  },
  {
    role: "Web Dev - Internship",
    company: "Capitol Technology",
    period: "2021 — 2022",
    points: [
      "Hands-on with HTML5, CSS3, Bootstrap and vanilla JavaScript.",
      "Shipped landing pages and small WordPress customizations.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle eyebrow="My Journey" title="Experience" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <Reveal key={it.role} delay={i * 0.05}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                    i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}>
                    <div className="card-elev rounded-2xl p-6 hover:translate-y-[-4px] transition-transform">
                      <div className="text-xs uppercase tracking-widest text-primary mb-2">
                        {it.period}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{it.role}</h3>
                      <p className="text-muted-foreground mb-4">{it.company}</p>
                      <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {it.points.map((p) => (
                          <li key={p}>• {p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block" />

                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 size-8 rounded-full gradient-bg flex items-center justify-center glow">
                    <Briefcase className="size-4 text-primary-foreground" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
