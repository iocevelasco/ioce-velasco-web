import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratis",
    description: "Revisamos tu negocio y detectamos qué automatizar primero.",
  },
  {
    number: "02",
    title: "Propuesta clara",
    description: "Te paso alcance, precio y tiempos por escrito. Sin sorpresas.",
  },
  {
    number: "03",
    title: "Entrega y soporte",
    description: "Lanzamos, medimos resultados y te acompaño después.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-trabajo"
      className="py-28 bg-background relative overflow-hidden"
      aria-label="Cómo trabajo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-brand-mint text-sm font-semibold tracking-widest uppercase mb-3">
            Proceso
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Así de simple trabajamos juntos
          </h2>
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
            style={{ background: "linear-gradient(90deg, #00DF81, #03624C, #00DF81)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center md:items-center"
            >
              {/* Circle */}
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-caribbean bg-background shadow-lg">
                <span className="text-xl font-semibold gradient-text">{step.number}</span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
