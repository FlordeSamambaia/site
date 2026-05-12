import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Heart, Users } from 'lucide-react'

function Sobre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="section-container bg-background" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-medium"
        >
          <picture>
            <source srcSet="img/sobre.webp" type="image/webp" />
            <img
              src="img/sobre.jpg"
              loading="lazy"
              alt="Foto do Grupo de Samba Flor de Samambaia"
              className="w-full h-full object-cover"
            />
          </picture>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Sobre o Grupo
          </span>
          <h2 className="section-title mt-2">
            A força feminina no samba brasileiro
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              <strong className="text-foreground">Flor de Samambaia</strong> nasceu do encontro de cinco mulheres apaixonadas pela música brasileira, que se conectaram por meio de coletivos femininos e movimentos culturais em Juiz de Fora.
            </p>
            <p>
              Unidas pelo desejo de criar um trabalho autoral e autêntico, elas transformaram seu amor pelo samba e pelos ritmos brasileiros em um espaço de acolhimento, diversão e cultura.
            </p>
            <p>
              Inspiradas por grandes nomes da música, como Clara Nunes, Dona Ivone Lara e Alcione, o grupo resgata e celebra a força feminina no cenário musical, trazendo uma sonoridade envolvente e repleta de identidade. Com raízes no samba, o grupo também explora forró, MPB e outros ritmos que expressam a diversidade e a riqueza da cultura popular.
            </p>
            <p>
              No palco, o Flor de Samambaia não é apenas um show, mas uma experiência vibrante de conexão, ancestralidade e resistência. Cada apresentação é construída com cuidado, afeto e um olhar político sobre o papel das mulheres na música.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-muted rounded-xl">
              <Music className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Samba & MPB</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-xl">
              <Heart className="w-8 h-8 text-destructive mx-auto mb-2" />
              <p className="text-sm font-medium">Ancestralidade</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-xl">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-sm font-medium">Força Feminina</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sobre
