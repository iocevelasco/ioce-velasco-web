import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const WA_NUMBER = "<NUMERO>"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Casos", href: "#casos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Preguntas", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero mi diagnóstico gratis para mi negocio."
  )}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="text-brand-white font-semibold text-lg tracking-tight hover:text-brand-caribbean transition-colors"
        >
          {/* [placeholder: tu nombre o marca] */}
          ioce<span className="text-brand-caribbean">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-brand-pistachio hover:text-brand-caribbean transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-caribbean rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-brand-caribbean text-brand-black hover:bg-brand-meadow font-semibold rounded-xl"
          >
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              Pide tu diagnóstico
            </a>
          </Button>
        </div>

        {/* Mobile sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-brand-white hover:bg-brand-dark"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-black border-brand-dark w-72">
            <SheetTitle className="sr-only text-brand-white">Menú</SheetTitle>
            <nav className="mt-8 flex flex-col gap-4" aria-label="Menú móvil">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-brand-pistachio hover:text-brand-caribbean transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-caribbean rounded"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-brand-caribbean text-brand-black hover:bg-brand-meadow font-semibold rounded-xl"
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  Pide tu diagnóstico
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
