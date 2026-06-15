import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

const cases = [
  {
    category: "[placeholder: caso de cliente]",
    emoji: "🏋️",
    before: "Agendaba a mano por DM.",
    after: "El asistente llena las reservas solo.",
    metric: "[placeholder: +30%]",
    metricLabel: "de reservas",
  },
]

export default function Cases() {
  return (
    <section
      id="casos"
      className="py-28 section-dark-green relative overflow-hidden"
      aria-label="Casos de éxito"
    >
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
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
            Casos reales
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-white leading-tight">
            Resultados reales
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 25 } }}
            >
              <div className="glass-card h-full rounded-2xl p-7 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={c.category}>{c.emoji}</span>
                    <span className="text-xs font-semibold text-brand-caribbean tracking-widest uppercase">
                      {c.category}
                    </span>
                  </div>
                  <TrendingUp className="h-5 w-5 text-brand-caribbean opacity-60" aria-hidden />
                </div>

                {/* Before / After */}
                <div className="space-y-4 mb-6">
                  <div className="rounded-xl bg-brand-black/40 border border-brand-bangladesh/30 px-4 py-3">
                    <p className="text-[10px] font-semibold text-brand-pistachio/50 uppercase tracking-widest mb-1">Antes</p>
                    <p className="text-sm text-brand-pistachio">{c.before}</p>
                  </div>
                  <div className="rounded-xl bg-brand-bangladesh/30 border border-brand-caribbean/20 px-4 py-3">
                    <p className="text-[10px] font-semibold text-brand-caribbean uppercase tracking-widest mb-1">Después</p>
                    <p className="text-sm text-brand-white font-medium">{c.after}</p>
                  </div>
                </div>

                {/* Metric */}
                <div className="flex items-end gap-2 pt-5 border-t border-brand-bangladesh/30">
                  <span className="text-4xl font-semibold gradient-text leading-none">
                    {c.metric}
                  </span>
                  <span className="text-sm text-brand-pistachio mb-1">{c.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
