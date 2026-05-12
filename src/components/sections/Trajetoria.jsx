import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    titulo: 'Evento solidário no projeto Mesa Brasil, no Moinho Zona Norte com o Pagodão Só Love',
    data: '01-01-2024'
  }
  // {
  //   ano: '2024',
  //   eventos: [
      
  //     'Autoria Casa de Cultura',
  //     'Espeto Du Cheff',
  //     'Colegial Sucos e Lanches',
  //     '5ª edição da Feira Desapego',
  //     'Julho das Pretas, na Festa Soul Charme',
  //     'Julho das Pretas, no movimento cultural O Cometa',
  //     'Arraiá do Brejô JF, coletivo lésbico de Juiz de Fora',
  //     'Evento Churrasquinho do Bob, no Tenetehara Instituto Cultural',
  //     'Aniversário do Aero Beach JF',
  //     'Samba da Laje',
  //     'Evento JF Brasil no espaço Ziriguidum e Beberico',
  //     'Beco da Cultura',
  //     'Uai Feira',
  //     'Bar Pão Moiado',
  //   ],
  // },
  // {
  //   ano: '2025',
  //   eventos: [
  //     'Abertura do pré-carnaval de Juiz de Fora 2025',
  //     'Carnaval do Parrilla Bela Vista',
  //     'Carnaval do Autoria Casa de Cultura',
  //     'Bloco do Santo',
  //     'Samba do Muzik',
  //   ],
  // },
]

const cores = ['#e99300', '#0096a3', '#c30d09', '#01582b']

function agruparPorAno(eventos) {
  const map = {}
  eventos.forEach((e) => {
    const ano = e.data ? new Date(e.data).getFullYear().toString() : 'Sem data'
    if (!map[ano]) map[ano] = []
    map[ano].push(e.titulo)
  })
  return Object.keys(map)
    .sort()
    .reverse()
    .map((ano, i) => ({ ano, cor: cores[i % cores.length], eventos: map[ano] }))
}

function Trajetoria() {
  const [anos, setAnos] = useState(agruparPorAno(fallback))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase
        .from('eventos')
        .select('titulo, data')
        .order('data')
      if (!error && data?.length) setAnos(agruparPorAno(data))
    }
    buscar()
  }, [])

  return (
    <section id="trajetoria" className="section-container bg-background" ref={ref}>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold text-sm uppercase tracking-wider"
        >
          Nossa história
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title mt-2"
        >
          Trajetória
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle mx-auto"
        >
          Cada apresentação é uma celebração da música brasileira e da força feminina.
        </motion.p>
      </div>

      <div className="text-center mb-12">
        <div className="rounded-2xl overflow-hidden shadow-medium">
          <picture>
            <source srcSet="img/integrantes.webp" type="image/webp" />
            <img
              src="img/integrantes.jpg"
              loading="lazy"
              alt="Foto do Grupo de Samba Flor de Samambaia"
              className="w-full object-cover"
            />
          </picture>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {anos.map((a, yearIndex) => (
          <motion.div
            key={a.ano}
            initial={{ opacity: 0, x: yearIndex % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * yearIndex }}
            className="relative mb-12 last:mb-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-display font-bold text-xl">
                <Calendar size={20} />
                {a.ano}
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {a.eventos.map((evento, eventIndex) => (
                <motion.div
                  key={evento}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.05 * eventIndex }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-soft transition-all"
                >
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{evento}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        <div className="text-center p-6 bg-gradient-hero rounded-2xl text-primary-foreground">
          <p className="text-4xl font-display font-bold">19+</p>
          <p className="text-sm opacity-90">Shows realizados</p>
        </div>
        <div className="text-center p-6 bg-accent rounded-2xl text-accent-foreground">
          <p className="text-4xl font-display font-bold">2</p>
          <p className="text-sm opacity-90">Anos de história</p>
        </div>
        <div className="text-center p-6 bg-secondary rounded-2xl text-secondary-foreground">
          <p className="text-4xl font-display font-bold">5</p>
          <p className="text-sm opacity-90">Integrantes</p>
        </div>
        <div className="text-center p-6 bg-destructive rounded-2xl text-destructive-foreground">
          <p className="text-4xl font-display font-bold">∞</p>
          <p className="text-sm opacity-90">Paixão pela música brasileira</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Trajetoria
