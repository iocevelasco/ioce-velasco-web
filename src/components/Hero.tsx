import { motion } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const WA_NUMBER = "<NUMERO>"
const EMAIL = "<EMAIL>"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const trust = ["Sin contratos largos", "Entrega en 2–4 semanas", "Soporte incluido"]

export default function Hero() {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero mi diagnóstico gratis para mi negocio."
  )}`

  return (
    <section
      id="inicio"
      className="section-dark min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden dot-grid"
      aria-label="Presentación"
    >
      {/* Orb top-right */}
      <div
        aria-hidden
        className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 40% 40%, rgba(0,223,129,0.13), transparent 65%)" }}
      />
      {/* Orb bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(3,98,76,0.35), transparent 70%)" }}
      />
      {/* Horizontal accent line */}
      <div
        aria-hidden
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,223,129,0.08) 30%, rgba(0,223,129,0.08) 70%, transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-bangladesh bg-brand-bangladesh/20 px-4 py-1.5 text-xs font-semibold text-brand-caribbean">
                <Sparkles className="h-3 w-3" aria-hidden />
                6+ años creando productos digitales · IA aplicada a tu negocio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold text-brand-white leading-[1.05] mb-6 tracking-tight"
            >
              Tu negocio,{" "}
              <span className="gradient-text">vendiendo</span>{" "}
              solo.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-lg text-brand-pistachio leading-relaxed mb-8 max-w-lg"
            >
              Sitios web y automatización con IA para gimnasios, restaurantes y
              negocios que quieren más clientes y menos trabajo manual.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              custom={0.25}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              {trust.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-brand-pistachio">
                  <CheckCircle2 className="h-4 w-4 text-brand-caribbean flex-shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col items-start gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-caribbean text-brand-black hover:bg-brand-meadow font-semibold rounded-xl h-12 px-7 text-base group glow-green"
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  Pide tu diagnóstico gratis
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Button>

              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-brand-pistachio/70 hover:text-brand-caribbean transition-colors underline underline-offset-4"
              >
                o escríbeme por email
              </a>

              <p className="text-xs text-brand-pistachio/40 mt-0.5">
                Gratis · 15 min por WhatsApp · sin compromiso
              </p>
            </motion.div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-caribbean animate-pulse" />
                  <span className="text-xs text-brand-pistachio font-medium tracking-wide">Asistente activo · 24/7</span>
                </div>
                {[
                  { emoji: "🏋️", msg: "¿Tienen clases de spinning los martes?", time: "09:14" },
                  { emoji: "🤖", msg: "¡Hola! Sí, a las 18:30 h. ¿Te anoto un lugar?", time: "09:14", green: true },
                  { emoji: "🏋️", msg: "Sí, por favor.", time: "09:15" },
                  { emoji: "🤖", msg: "¡Listo! Reserva confirmada. Te esperamos 🎉", time: "09:15", green: true },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                    className={`flex gap-3 ${m.green ? "justify-end" : ""}`}
                  >
                    {!m.green && <span className="text-xl">{m.emoji}</span>}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.green
                          ? "bg-brand-caribbean text-brand-black font-medium rounded-br-sm"
                          : "bg-brand-dark text-brand-white rounded-bl-sm border border-brand-bangladesh/50"
                      }`}
                    >
                      {m.msg}
                      <span className={`block text-[10px] mt-1 ${m.green ? "text-brand-black/50" : "text-brand-pistachio/50"}`}>
                        {m.time}
                      </span>
                    </div>
                    {m.green && <span className="text-xl">{m.emoji}</span>}
                  </motion.div>
                ))}
              </div>

              {/* Floating metric badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-5 py-3 glow-green"
              >
                <p className="text-2xl font-semibold text-brand-caribbean">+30%</p>
                <p className="text-xs text-brand-pistachio">reservas este mes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
