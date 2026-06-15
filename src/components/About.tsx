import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 section-dark-green"
      aria-label="Sobre mí"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/profile.jpg"
              alt="Foto de perfil"
              className="w-full max-w-xs mx-auto md:mx-0 aspect-square rounded-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-white mb-6 leading-tight">
              Quién está detrás
            </h2>

            <div className="space-y-4 text-brand-pistachio leading-relaxed">
              <p>
                Llevo 6+ años creando productos digitales que la gente realmente
                usa. Hoy trabajo en IA en la empresa tech más grande de la
                región, donde integro machine learning en productos reales junto
                a equipos de datos, producto y negocio.
              </p>
              <p>
                Me importa que las cosas funcionen bien: que carguen rápido, que
                sean fáciles de usar y que cualquier persona pueda acceder a
                ellas. Ese mismo nivel lo traigo a tu proyecto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
