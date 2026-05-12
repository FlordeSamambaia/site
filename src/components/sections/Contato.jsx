import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import InstagramIcon from '../InstagramIcon'

function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    e.target.reset()
    alert('Mensagem enviada! Entraremos em contato em breve.')
  }

  return (
    <section id="contato" className="section-container bg-primary text-primary-foreground" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Vamos conversar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-6">
            Contrate o Flor de Samambaia
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Quer levar a energia do samba para o seu evento? Entre em contato para solicitar um orçamento personalizado. Atendemos eventos públicos, privados, casas de show e produções culturais.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:sambaflordesamambaia@gmail.com"
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-medium">E-mail</p>
                <p className="text-primary-foreground/70 text-sm">sambaflordesamambaia@gmail.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/sambaflordesamambaia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <InstagramIcon size={22} className="text-secondary-foreground" />
              </div>
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-primary-foreground/70 text-sm">@sambaflordesamambaia</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-destructive-foreground" />
              </div>
              <div>
                <p className="font-medium">Localização</p>
                <p className="text-primary-foreground/70 text-sm">Juiz de Fora, MG</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card text-card-foreground p-6 md:p-8 rounded-2xl shadow-medium"
          >
            <h3 className="font-display font-bold text-xl mb-6">Solicitar Orçamento</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome *</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium mb-2">Tipo de Evento</label>
                  <input
                    id="eventType"
                    name="eventType"
                    placeholder="Ex: Aniversário"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">Cidade</label>
                  <input
                    id="city"
                    name="city"
                    placeholder="Sua cidade"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">Data do Evento</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte-nos mais sobre seu evento..."
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cta w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contato
