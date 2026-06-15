import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const WA_NUMBER = "541121925253"

const REQUIRED_MSG = "Necesito este dato para responderte."
const WA_INVALID_MSG = "Escribe un número de WhatsApp válido (con código de país)."

const schema = z.object({
  name: z.string().min(1, REQUIRED_MSG),
  business: z.string().min(1, REQUIRED_MSG),
  whatsapp: z
    .string()
    .min(1, REQUIRED_MSG)
    .regex(/^\+?[0-9\s\-()]{7,20}$/, WA_INVALID_MSG),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero mi diagnóstico gratis."
  )}`

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", business: "", whatsapp: "", message: "" },
  })

  async function onSubmit(_data: FormValues) {
    try {
      await new Promise((r) => setTimeout(r, 1200))
      toast.success("¡Listo! Te escribo por WhatsApp en menos de 24 h.")
      form.reset()
    } catch {
      toast.error(
        "No se pudo enviar. Revisa tu conexión e inténtalo de nuevo, o escríbeme directo por WhatsApp."
      )
    }
  }

  return (
    <section
      id="contacto"
      className="section-dark py-24"
      aria-label="Contacto y CTA final"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* CTA copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-white leading-tight mb-4">
              ¿Empezamos?
            </h2>
            <p className="text-brand-pistachio leading-relaxed mb-8">
              Pide tu diagnóstico gratis: en 15 minutos te digo por dónde
              empezar y qué podrías mejorar.
            </p>

            <div className="flex flex-col items-start gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-caribbean text-brand-black hover:bg-brand-meadow font-semibold rounded-xl group"
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  Pide tu diagnóstico gratis
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 bg-brand-dark rounded-2xl p-6 sm:p-8"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-pistachio text-sm">Tu nombre</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="María López"
                          {...field}
                          className="bg-brand-black/50 border-brand-bangladesh text-brand-white placeholder:text-brand-pistachio/40 focus-visible:ring-brand-caribbean"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="business"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-pistachio text-sm">Tu negocio o proyecto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Gym Élite / Estudio Jurídico López"
                          {...field}
                          className="bg-brand-black/50 border-brand-bangladesh text-brand-white placeholder:text-brand-pistachio/40 focus-visible:ring-brand-caribbean"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-pistachio text-sm">Tu WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+54 9 11 1234 5678"
                          type="tel"
                          {...field}
                          className="bg-brand-black/50 border-brand-bangladesh text-brand-white placeholder:text-brand-pistachio/40 focus-visible:ring-brand-caribbean"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-pistachio text-sm">
                        ¿Qué te gustaría hacer?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Me gustaría tener una web o automatizar las reservas..."
                          rows={3}
                          {...field}
                          className="bg-brand-black/50 border-brand-bangladesh text-brand-white placeholder:text-brand-pistachio/40 focus-visible:ring-brand-caribbean resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-brand-caribbean text-brand-black hover:bg-brand-meadow font-semibold rounded-xl disabled:opacity-60"
                >
                  {form.formState.isSubmitting ? "Enviando…" : "Quiero mi diagnóstico"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
