import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KiosLogo } from "@/components/logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#guia", label: "Guía rápida" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#formacion", label: "Formación" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="text-[28px] text-ink" aria-label="kios, inicio">
          <KiosLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contacto">Escribinos</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className={cn(
          "border-t border-line bg-paper px-4 py-4 md:hidden",
          open && "block",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Móvil">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-ink hover:bg-brand-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#contacto" onClick={() => setOpen(false)}>
              Escribinos
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
