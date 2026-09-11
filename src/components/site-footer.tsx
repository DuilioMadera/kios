import { KiosLogo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <KiosLogo className="text-3xl text-brand" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Robótica educativa para escuelas técnicas, institutos y universidades de Argentina.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-medium text-ink">Sitio</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a href="#plataformas" className="hover:text-ink">
                  Plataformas
                </a>
              </li>
              <li>
                <a href="#guia" className="hover:text-ink">
                  Guía rápida
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-ink">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-ink">Para</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>Escuelas técnicas</li>
              <li>Institutos</li>
              <li>Universidades</li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-ink">Argentina</p>
            <p className="mt-3 leading-relaxed text-muted">
              La Rioja, Catamarca, Santiago del Estero y Córdoba.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} kios. Documento de presentación · robótica educativa.
        </p>
      </div>
    </footer>
  );
}
