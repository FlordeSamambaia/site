import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    nome: 'Érica Marques',
    instrumento: 'Pandeirista',
    img: { webp: 'img/erica.webp', jpg: 'img/erica.jpg' },
    bio: 'Percussionista ágil e vibrante, já passou por diversos grupos como Margaridas Peludas e Batuque na Roda. Integra os arranjos e a construção rítmica do Flor de Samambaia com autenticidade e criatividade.',
  },
  {
    nome: 'Jéssica Braz',
    instrumento: 'Percussionista',
    img: { webp: 'img/jessica.webp', jpg: 'img/jessica.jpg' },
    bio: 'Natural da Zona Leste de Juiz de Fora, começou sua jornada na música ainda na escola. Percussionista e psicóloga, acredita na música como ferramenta terapêutica e de transformação social. Atua fortemente nos arranjos e repertórios do grupo.',
  },
  {
    nome: 'Josi Silva',
    instrumento: 'Cavaquinista',
    img: { webp: 'img/josi.webp', jpg: 'img/josi.jpg' },
    bio: 'Cavaquinista carismática e com vivência no samba carioca, Josi é a alma harmônica do grupo. Sua trajetória passa por coletivos como Guerreiras de Clara, trazendo força e brasilidade para cada acorde.',
  },
  {
    nome: 'Priscila Pinheiro',
    instrumento: 'Vocalista',
    img: { webp: 'img/priscila.webp', jpg: 'img/priscila.jpg' },
    bio: 'Formada em Comunicação e com mais de 20 anos de experiência em marketing, encontrou na música um refúgio e uma missão. Atua na organização do grupo, na identidade visual e na articulação profissional do projeto.',
  },
  {
    nome: 'Raquel Souza',
    instrumento: 'Violonista',
    img: { webp: 'img/raquel.webp', jpg: 'img/raquel.jpg' },
    bio: 'Multi-instrumentista com formação erudita, Raquel transita com maestria entre o violão, o canto e a direção musical. Já passou por orquestras e grupos de samba, unindo técnica e sensibilidade em cada acorde. Traz seu conhecimento técnico e seu violão firme para as construções harmônicas do grupo.',
  },
]

function Integrantes() {
  const [integrantes, setIntegrantes] = useState(fallback)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase
        .from('integrantes')
        .select('nome, instrumento, bio, foto_url')
        .eq('ativo', true)
        .order('ordem')
      if (!error && data?.length) setIntegrantes(data)
    }
    buscar()
  }, [])

  return (
    <section id="integrantes" className="section-container bg-muted/50" ref={ref}>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold text-sm uppercase tracking-wider"
        >
          Conheça as artistas
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title mt-2"
        >
          Integrantes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle mx-auto"
        >
          Cinco mulheres talentosas que unem suas vozes e instrumentos para celebrar a música brasileira.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {integrantes.map((integrante, index) => (
          <motion.div
            key={integrante.nome}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={integrante.foto_url||integrante.img.jpg}
                alt={`${integrante.nome} - ${integrante.instrumento}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                {integrante.instrumento}
              </span>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {integrante.nome}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {integrante.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Integrantes
