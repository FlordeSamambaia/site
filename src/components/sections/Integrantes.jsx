import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

// const fallback = [
//   {
//     nome: 'Érica Marques',
//     instrumento: 'Pandeirista',
//     img: { webp: 'img/erica.webp', jpg: 'img/erica.jpg' },
//     bio: 'Percussionista ágil e vibrante, já passou por diversos grupos como Margaridas Peludas e Batuque na Roda. Integra os arranjos e a construção rítmica do Flor de Samambaia com autenticidade e criatividade.',
//   },
//   {
//     nome: 'Jéssica Braz',
//     instrumento: 'Percussionista',
//     img: { webp: 'img/jessica.webp', jpg: 'img/jessica.jpg' },
//     bio: 'Natural da Zona Leste de Juiz de Fora, começou sua jornada na música ainda na escola. Percussionista e psicóloga, acredita na música como ferramenta terapêutica e de transformação social. Atua fortemente nos arranjos e repertórios do grupo.',
//   },
//   {
//     nome: 'Josi Silva',
//     instrumento: 'Cavaquinista',
//     img: { webp: 'img/josi.webp', jpg: 'img/josi.jpg' },
//     bio: 'Cavaquinista carismática e com vivência no samba carioca, Josi é a alma harmônica do grupo. Sua trajetória passa por coletivos como Guerreiras de Clara, trazendo força e brasilidade para cada acorde.',
//   },
//   {
//     nome: 'Priscila Pinheiro',
//     instrumento: 'Vocalista',
//     img: { webp: 'img/priscila.webp', jpg: 'img/priscila.jpg' },
//     bio: 'Formada em Comunicação e com mais de 20 anos de experiência em marketing, encontrou na música um refúgio e uma missão. Atua na organização do grupo, na identidade visual e na articulação profissional do projeto.',
//   },
//   {
//     nome: 'Raquel Souza',
//     instrumento: 'Violonista',
//     img: { webp: 'img/raquel.webp', jpg: 'img/raquel.jpg' },
//     bio: 'Multi-instrumentista com formação erudita, Raquel transita com maestria entre o violão, o canto e a direção musical. Já passou por orquestras e grupos de samba, unindo técnica e sensibilidade em cada acorde. Traz seu conhecimento técnico e seu violão firme para as construções harmônicas do grupo.',
//   },
// ]

function Integrantes() {
  const [integrantes, setIntegrantes] = useState([])

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
    <section id="integrantes.html" className="section">
      <h2>As Integrantes</h2>
      {integrantes.map((i) => {
        const src = i.foto_url || i.img?.jpg
        const srcWebp = i.img?.webp
        return (
          <div key={i.nome} className="profile">
            <picture>
              {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
              <img src={src} loading="lazy" alt={`Grupo de Samba Flor de Samambaia - Foto de ${i.nome} - ${i.instrumento}`} width="180" height="120" />
            </picture>
            <div>
              <h3>{i.nome}</h3>
              <h4>{i.instrumento}</h4>
              <p>{i.bio}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Integrantes
