import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <nav
          className={`glass rounded-full px-2 py-2 flex items-center gap-1 transition-all ${
            scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          <a
            href="#home"
            className="px-4 py-1.5 rounded-full text-sm font-display font-semibold gradient-text"
          >
            US.
          </a>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`hidden md:inline-block px-4 py-1.5 rounded-full text-sm transition-colors ${
                active === l.id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 inline-flex md:ml-2 items-center rounded-full px-4 py-1.5 text-sm font-medium gradient-bg text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  );
}
