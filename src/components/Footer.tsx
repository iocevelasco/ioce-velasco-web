import { ExternalLink } from "lucide-react"

const WA_NUMBER = "541121925253"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Casos", href: "#casos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Preguntas", href: "#faq" },
]

/* [placeholder: reemplaza # con URLs reales de redes sociales] */
const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
]

export default function Footer() {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero mi diagnóstico gratis."
  )}`

  return (
    <footer className="section-dark border-t border-brand-bangladesh/30" aria-label="Pie de página">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="text-brand-white font-semibold text-lg tracking-tight hover:text-brand-caribbean transition-colors"
            >
              {/* [placeholder: tu nombre o marca] */}
              ioce<span className="text-brand-caribbean">.</span>dev
            </a>
            <p className="mt-3 text-sm text-brand-pistachio max-w-xs leading-relaxed">
              Sitios web y automatización con IA para negocios que quieren más clientes y menos trabajo manual.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del pie">
            <ul className="space-y-2" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-pistachio hover:text-brand-caribbean transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-caribbean hover:text-brand-meadow transition-colors"
            >
              Pide tu diagnóstico gratis →
            </a>
            <div className="flex gap-4 mt-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-xs text-brand-pistachio hover:text-brand-caribbean transition-colors flex items-center gap-1"
                >
                  {label}
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-bangladesh/30 pt-6">
          <p className="text-xs text-brand-pistachio/60">
            {/* [placeholder: año] [placeholder: tu nombre]. */}
            © [placeholder: año] [placeholder: tu nombre]. Webs y apps hechas a mano.
          </p>
        </div>
      </div>
    </footer>
  )
}
