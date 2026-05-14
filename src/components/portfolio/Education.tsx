import { Reveal, SectionTitle } from "./Reveal";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import vulogo from "../../assets/vulogo.png";

export function Education() {
  return (
    <section id="education" className="py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle eyebrow="Academic Background" title="Education" />

        <Reveal>
          <div className="card-elev rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:ring-glow transition-all duration-500">
            <div className="shrink-0">
              <div className="size-32 rounded-2xl gradient-bg p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center p-4">
                  <img
                    src={vulogo}
                    alt="Virtual University of Pakistan"
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-3">
                <GraduationCap className="size-4" /> Degree
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                BS in Computer Science
              </h3>
              <p className="text-lg text-foreground/80 mb-4">
                Virtual University of Pakistan
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4 text-primary" /> Bachelor's Degree
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" /> Pakistan
                </span>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Strong foundations in algorithms, data structures, databases and
                modern web development — the backbone of everything I ship today.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
