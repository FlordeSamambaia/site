import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'
import InstagramIcon from '../InstagramIcon'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(img/sobre.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-creme mb-6 text-balance drop-shadow-lg"
        >
          Flor de Samambaia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-creme/90 max-w-3xl mx-auto mb-8 drop-shadow"
        >
          O som da brasilidade feito por mulheres
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contato" className="btn-cta flex items-center gap-2">
            <MessageCircle size={20} />
            Solicitar Orçamento
          </a>
          <a
            href="https://instagram.com/sambaflordesamambaia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-creme/10 backdrop-blur-sm text-creme rounded-full font-medium hover:bg-creme/20 transition-colors border border-creme/20"
          >
            <InstagramIcon size={20} />
            @sambaflordesamambaia
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-creme/70 hover:text-creme transition-colors"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  )
}

export default Hero
