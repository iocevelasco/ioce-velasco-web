import { motion } from "framer-motion"
import { TrendingUp, MessageCircle, BarChart2 } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Atrae más clientes",
    description:
      "Una web rápida y profesional que aparece en Google y convierte visitas en reservas.",
    highlight: "Web + SEO",
  },
  {
    icon: MessageCircle,
    title: "Automatiza con IA",
    description:
      "Un asistente de WhatsApp que responde, agenda y vende por ti, 24/7.",
    highlight: "WhatsApp IA",
  },
  {
    icon: BarChart2,
    title: "Decide con tus datos",
    description:
      "Un panel simple que te muestra qué se vende, a qué hora y quién vuelve.",
    highlight: "Dashboard",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Services() {
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
          className="mb-16 text-center"
        >
          <p className="text-brand-caribbean text-sm font-semibold tracking-widest uppercase mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-white leading-tight max-w-2xl mx-auto">
            Lo que hago por tu negocio
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              >
                <div className="glass-card h-full rounded-2xl p-7 transition-all duration-300 group cursor-default">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-caribbean/10 border border-brand-caribbean/20 group-hover:bg-brand-caribbean/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-brand-caribbean" aria-hidden />
                  </div>

                  {/* Highlight tag */}
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
        </div>
      </div>
    </section>
  )
}
