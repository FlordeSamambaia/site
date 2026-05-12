import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    imagem_url: 'img/clipping/mgtv.jpg',
    alt: 'Grupo de Samba Flor de Samambaia no MGTV 1ª Edição – Zona da Mata (24/01/2025)',
    url: 'https://globoplay.globo.com/v/13286127/?s=58m45s',
    veiculo: 'TV',
    titulo: 'MGTV 1ª Edição – Zona da Mata',
    data_publicacao: '2025-01-24'
  },
  {
    imagem_url: 'img/clipping/radio.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Rádio Transamérica (17/01/2025)',
    url: 'https://www.youtube.com/live/LDS4V_hOZBQ',
    veiculo: 'Rádio',
    titulo: 'Rádio Transamérica',
    data_publicacao: '2025-01-17'
  },
  {
    imagem_url: 'img/clipping/urutu.jpg',
    alt: 'Grupo de Samba Flor de Samambaia em Entrevista Papo de Urutu (18/12/2024)',
    url: 'https://www.youtube.com/watch?v=jRQJGyQ0lXg',
    veiculo: 'Youtube',
    titulo: 'Entrevista Papo de Urutu',
    data_publicacao: '2024-12-18'

  },
  {
    imagem_url: 'img/clipping/pjf.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Reportagem PJF, Beco da Cultura (06/12/2024)',
    url: 'https://www.pjf.mg.gov.br/noticias/view.php?modo=link2&idnoticia2=85137',
    veiculo: 'Notícia',
    titulo: 'Reportagem PJF, Beco da Cultura',
    data_publicacao: '2024-12-06'
  },
  {
    imagem_url: 'img/clipping/tribuna.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Reportagem Tribuna de Minas (17/05/2024)',
    url: 'https://tribunademinas.com.br/noticias/cultura/17-05-2024/flor-de-samambaia-apresenta-se-nesta-sexta-na-autoria.html',
    veiculo: 'Jornal',
    titulo: 'Reportagem Tribuna de Minas',
    data_publicacao: '2024-05-17'
  },
]

function Clipping() {
  const [clippings, setClippings] = useState(fallback)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase
        .from('clipping')
        .select('titulo, veiculo, url, imagem_url, data_publicacao')
        .eq('ativo', true)
        .order('data_publicacao', { ascending: false })
      if (!error && data?.length) setClippings(data)
    }
    buscar()
  }, [])

  return (
    <section id="clipping" className="section-container bg-muted/50" ref={ref}>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold text-sm uppercase tracking-wider"
        >
          Na mídia
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title mt-2"
        >
          Clipping / Imprensa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle mx-auto"
        >
          Acompanhe nossas aparições em jornais, rádios e programas de TV.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {clippings.map((c, index) => {
          const label = c.veiculo
            ? `${c.titulo} – ${c.veiculo}`
            : c.titulo
          const dataFormatada = c.data_publicacao
            ? new Date(c.data_publicacao).toLocaleDateString('pt-BR')
            : null

          return (
            <motion.a
              key={c.url}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary hover:shadow-medium transition-all"
            >
              {c.imagem_url && (
                <div className="rounded-xl overflow-hidden mb-4 aspect-video">
                  <img
                    src={c.imagem_url}
                    alt={`Flor de Samambaia - ${label}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {c.veiculo || 'Imprensa'}
                </span>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                />
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {c.titulo}
              </h3>

              {dataFormatada && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={14} />
                  {dataFormatada}
                </div>
              )}
            </motion.a>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground mb-4">
          Jornalista ou produtor cultural? Entre em contato para materiais de imprensa.
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Solicitar Material
        </a>
      </motion.div>
    </section>
  )
}

export default Clipping
