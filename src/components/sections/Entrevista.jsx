import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    pergunta: '1. Como surgiu o grupo Flor de Samambaia?',
    resposta: 'O grupo surgiu da conexão entre mulheres que já participavam de coletivos femininos e musicais em Juiz de Fora, como Guerreiras de Clara, Samba das Mulheres na Praça e a Caminhada Lésbica. Todas já tocavam em outros projetos, mas sentiram a necessidade de criar um grupo com identidade própria, onde pudessem tocar as músicas que amam e expressar sua arte de forma autêntica.',
  },
  {
    pergunta: '2. Qual é a principal proposta do grupo?',
    resposta: 'Nossa proposta é valorizar e difundir o samba e outros ritmos brasileiros, trazendo uma sonoridade que represente a força e a essência feminina na música. Queremos proporcionar ao público uma experiência acolhedora, cheia de energia e identidade, celebrando a cultura popular e a ancestralidade do nosso som.',
  },
  {
    pergunta: '3. Quem são as principais inspirações do Flor de Samambaia?',
    resposta: 'Nossas referências vão desde grandes mulheres da música brasileira, como Elis Regina, Beth Carvalho, Clara Nunes, Dona Ivone Lara e Alcione, até artistas contemporâneas como Maria Rita, Mart\'nália, Marisa Monte, Liniker e Preta Gil. São mulheres que abriram caminho e nos inspiram com sua trajetória, talento e força.',
  },
  {
    pergunta: '4. Como o grupo define o seu estilo musical?',
    resposta: 'Nosso coração bate forte pelo samba, mas transitamos também por outros ritmos brasileiros, como choro, ijexá e MPB. Gostamos de misturar influências e trazer releituras com a nossa identidade, sempre respeitando a raiz da música e trazendo um toque contemporâneo.',
  },
  {
    pergunta: '5. O que o público pode esperar de um show do Flor de Samambaia?',
    resposta: 'Muita energia, emoção e conexão! Nossos shows são momentos de celebração, com um repertório que passeia por clássicos do samba e músicas que marcaram a história da MPB. Além disso, trazemos arranjos que refletem a força do nosso grupo e a paixão que temos pela música.',
  },
  {
    pergunta: '6. Como vocês enxergam a importância do samba no cenário feminino e contemporâneo?',
    resposta: 'O samba sempre foi um espaço de resistência e, historicamente, as mulheres precisaram lutar para ocupar esse lugar. Hoje, vemos cada vez mais mulheres protagonizando a cena do samba e trazendo novas narrativas. O Flor de Samambaia faz parte desse movimento, reafirmando o poder feminino na música e valorizando as raízes culturais brasileiras.',
  },
  {
    pergunta: '7. Quais são os próximos planos do grupo?',
    resposta: 'Estamos trabalhando para expandir nossos shows para outras cidades, produzir material autoral e gravar nosso primeiro EP. Queremos fortalecer nossa presença na cena musical e levar nossa música para mais pessoas, sempre com muito amor e dedicação ao que fazemos.',
  },
]

function AccordionItem({ pergunta, resposta, isOpen, onToggle }) {
  return (
    <div
      className={`bg-card border rounded-xl px-6 transition-shadow ${
        isOpen ? 'shadow-soft border-accent/50' : 'border-border'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left font-display font-semibold text-foreground hover:text-primary py-5 transition-colors"
      >
        <span>{pergunta}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 ml-4 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-5">
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Entrevista() {

  const [perguntas, setPerguntas] = useState(fallback)
  const [aberto, setAberto] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase
        .from('faq')
        .select('pergunta, resposta')
        .eq('ativo', true)
        .order('ordem')
      if (!error && data?.length) setPerguntas(data)
    }
    buscar()
  }, [])

  return (
    <section id="entrevista" className="section-container bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Perguntas frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mt-2"
          >
            Entrevista
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Conheça mais sobre o grupo através das nossas respostas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {perguntas.map((item, index) => (
            <AccordionItem
              key={index}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={aberto === index}
              onToggle={() => setAberto(aberto === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Entrevista
