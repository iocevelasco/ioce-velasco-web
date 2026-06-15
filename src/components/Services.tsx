import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, MessageCircle, BarChart2, Globe, Star, CalendarCheck } from "lucide-react"

type Audience = "negocios" | "profesionales"

const servicesByAudience: Record<Audience, { icon: React.ElementType; title: string; description: string; highlight: string }[]> = {
  negocios: [
    {
      icon: TrendingUp,
      title: "Tu web o tu app",
      description: "La construyo a mano, rápida y bien hecha, según lo que tu negocio o tu marca necesite.",
      highlight: "Web + App",
    },
    {
      icon: MessageCircle,
      title: "Que trabaje por ti",
      description: "Automatizo lo repetitivo: un asistente que responde, agenda y atiende, 24/7.",
      highlight: "Automatización",
    },
    {
      icon: BarChart2,
      title: "Tus datos, claros",
      description: "Un panel simple que te muestra qué funciona, cuándo y para quién.",
      highlight: "Dashboard",
    },
  ],
  profesionales: [
    {
      icon: Globe,
      title: "Tu perfil en línea",
      description: "Una web que transmite quién sos y qué hacés, desde el primer clic.",
      highlight: "Web profesional",
    },
    {
      icon: Star,
      title: "Imagen que convence",
      description: "Diseño a mano, sin plantillas. Que un cliente o empleador te tome en serio.",
      highlight: "Sin plantillas",
    },
    {
      icon: CalendarCheck,
      title: "Menos trabajo manual",
      description: "Formularios, agenda y seguimiento automático. Te enfocás en tu práctica.",
      highlight: "Automatización",
    },
  ],
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Services() {
  const [audience, setAudience] = useState<Audience>("negocios")
  const services = servicesByAudience[audience]

  return (
    <section
      id="servicios"
      className="py-28 section-dark relative overflow-hidden dot-grid"
      aria-label="Servicios"
    >
      {/* Orb accent */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(3,98,76,0.25), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-brand-caribbean text-sm font-semibold tracking-widest uppercase mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-white leading-tight max-w-2xl mx-auto mb-8">
            Lo que puedo construir contigo
          </h2>

          {/* Audience toggle */}
          <div
            role="group"
            aria-label="Seleccionar tipo de cliente"
            className="inline-flex items-center gap-1 rounded-full border border-brand-bangladesh/50 bg-brand-dark p-1"
          >
            {(["negocios", "profesionales"] as Audience[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setAudience(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-caribbean ${
                  audience === tab
                    ? "bg-brand-caribbean text-brand-black shadow"
                    : "text-brand-pistachio hover:text-brand-white"
                }`}
              >
                {tab === "negocios" ? "Para tu negocio" : "Para tu perfil profesional"}
              </button>
            ))}
          </div>

          {/* Audience subtitle */}
          <p className="mt-4 text-sm text-brand-pistachio/70">
            {audience === "negocios"
              ? "Gimnasios, restaurantes, comercios — más clientes y menos trabajo manual."
              : "Abogados, ingenieros, consultores — imagen sólida y confianza desde el primer clic."}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 sm:grid-cols-3"
          >
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }}
                >
                  <div className="glass-card h-full rounded-2xl p-7 transition-all duration-300 group cursor-default">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-caribbean/10 border border-brand-caribbean/20 group-hover:bg-brand-caribbean/20 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-brand-caribbean" aria-hidden />
                    </div>
                    <span className="inline-block text-[10px] font-semibold text-brand-caribbean tracking-widest uppercase mb-3">
                      {service.highlight}
                    </span>
                    <h3 className="text-lg font-semibold text-brand-white mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-pistachio leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
