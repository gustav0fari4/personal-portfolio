export function Navbar() {
  const items = [
    { label: "About", href: "/#about" },
    { label: "Highlights", href: "/#highlights" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="/" className="font-semibold tracking-tight">
          Gustavo Faria
        </a>

        <nav className="flex gap-4 text-sm text-white/80">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-white">
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}