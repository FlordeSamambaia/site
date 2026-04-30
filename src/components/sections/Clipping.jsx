import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    img: 'img/clipping/mgtv.jpg',
    alt: 'Grupo de Samba Flor de Samambaia no MGTV 1ª Edição – Zona da Mata (24/01/2025)',
    href: 'https://globoplay.globo.com/v/13286127/?s=58m45s',
    label: 'MGTV 1ª Edição – Zona da Mata (24/01/2025)',
  },
  {
    img: 'img/clipping/radio.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Rádio Transamérica (17/01/2025)',
    href: 'https://www.youtube.com/live/LDS4V_hOZBQ',
    label: 'Rádio Transamérica (17/01/2025)',
  },
  {
    img: 'img/clipping/urutu.jpg',
    alt: 'Grupo de Samba Flor de Samambaia em Entrevista Papo de Urutu (18/12/2024)',
    href: 'https://www.youtube.com/watch?v=jRQJGyQ0lXg',
    label: 'Entrevista Papo de Urutu (18/12/2024)',
  },
  {
    img: 'img/clipping/pjf.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Reportagem PJF, Beco da Cultura (06/12/2024)',
    href: 'https://www.pjf.mg.gov.br/noticias/view.php?modo=link2&idnoticia2=85137',
    label: 'Reportagem PJF, Beco da Cultura (06/12/2024)',
  },
  {
    img: 'img/clipping/tribuna.jpg',
    alt: 'Grupo de Samba Flor de Samambaia na Reportagem Tribuna de Minas (17/05/2024)',
    href: 'https://tribunademinas.com.br/noticias/cultura/17-05-2024/flor-de-samambaia-apresenta-se-nesta-sexta-na-autoria.html',
    label: 'Reportagem Tribuna de Minas (17/05/2024)',
  },
]

function Clipping() {
  const [clippings, setClippings] = useState(fallback)

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
    <section id="clipping.html" className="section">
      <h2>Clipping</h2>
      {clippings.map((c) => {
        const img = c.imagem_url || c.img
        const href = c.url || c.href
        const label = c.veiculo
          ? `${c.titulo} – ${c.veiculo}${c.data_publicacao ? ` (${new Date(c.data_publicacao).toLocaleDateString('pt-BR')})` : ''}`
          : c.label
        const alt = c.alt || `Grupo de Samba Flor de Samambaia - ${label}`
        return (
          <div key={href} className="clipping-item">
            <img src={img} loading="lazy" alt={alt} />
            <a target="_blank" rel="noreferrer" href={href}>{label}</a>
          </div>
        )
      })}
    </section>
  )
}

export default Clipping
