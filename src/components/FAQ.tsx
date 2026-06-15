import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de lo que tu negocio necesite. Por eso el primer paso es el diagnóstico gratis: con eso te doy un precio claro y cerrado, sin sorpresas.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "La mayoría de proyectos están listos en 2 a 4 semanas. En el diagnóstico te doy una fecha concreta.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Yo me encargo de todo y te lo explico en simple. Tú solo te ocupas de tu negocio.",
  },
  {
    q: "¿Qué pasa después de entregar?",
    a: "Te acompaño con soporte y ajustes. No desaparezco al lanzar.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Lo que sueles preguntarte
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="border-border rounded-xl border px-5"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline hover:text-brand-caribbean transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
