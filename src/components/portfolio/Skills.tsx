import { Reveal, SectionTitle } from "./Reveal";

const skills = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 92 },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 90 },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 85 },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 80 },
  { name: "jQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", level: 85 },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 78 },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 82 },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 80 },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95 },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 75 },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="What I Use" title="Skills & Stack" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="card-elev rounded-2xl p-5 group hover:ring-glow transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="size-14 mb-3 flex items-center justify-center rounded-xl bg-background/40 group-hover:scale-110 transition-transform duration-300">
                    <img src={s.logo} alt={s.name} loading="lazy" className="size-10" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{s.name}</h4>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full gradient-bg rounded-full"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1.5">{s.level}%</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
