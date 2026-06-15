import { motion } from "framer-motion"

const metrics = [
  { value: "+[placeholder: 20]", suffix: "", label: "Proyectos entregados" },
  { value: "Negocios reales", suffix: "", label: "que crecen" },
  { value: "<24", suffix: "h", label: "Respuesta garantizada" },
]

export default function SocialProof() {
  return (
    <section
      className="section-dark py-16 relative overflow-hidden"
      aria-label="Métricas"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(3,98,76,0.4) 50%, transparent 100%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-bangladesh/40">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center py-6 sm:px-8"
            >
              <span className="text-5xl md:text-6xl font-semibold gradient-text leading-none mb-2">
                {m.value}<span className="text-3xl md:text-4xl">{m.suffix}</span>
              </span>
              <span className="text-sm text-brand-pistachio">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
