export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Usman Shoukat</span>.
          Crafted with care.
        </p>
        <p className="text-xs">Designed & built from scratch · Front-End Developer</p>
      </div>
    </footer>
  );
}
