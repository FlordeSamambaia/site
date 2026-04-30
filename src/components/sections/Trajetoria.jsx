import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const fallback = [
  {
    ano: '2024',
    cor: '#e99300',
    eventos: [
      'Evento solidário no projeto Mesa Brasil, no Moinho Zona Norte com o Pagodão Só Love',
      'Autoria Casa de Cultura',
      'Espeto Du Cheff',
      'Colegial Sucos e Lanches',
      '5ª edição da Feira Desapego',
      'Julho das Pretas, na Festa Soul Charme',
      'Julho das Pretas, no movimento cultural O Cometa',
      'Arraiá do Brejô JF, coletivo lésbico de Juiz de Fora',
      'Evento Churrasquinho do Bob, no Tenetehara Instituto Cultural',
      'Aniversário do Aero Beach JF',
      'Samba da Laje',
      'Evento JF Brasil no espaço Ziriguidum e Beberico',
      'Beco da Cultura',
      'Uai Feira',
      'Bar Pão Moiado',
    ],
  },
  {
    ano: '2025',
    cor: '#0096a3',
    eventos: [
      'Abertura do pré-carnaval de Juiz de Fora 2025',
      'Carnaval do Parrilla Bela Vista',
      'Carnaval do Autoria Casa de Cultura',
      'Bloco do Santo',
      'Samba do Muzik',
    ],
  },
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
    .map((ano, i) => ({ ano, cor: cores[i % cores.length], eventos: map[ano] }))
}

function Trajetoria() {
  const [anos, setAnos] = useState(fallback)

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
    <section id="trajetoria.html" className="section">
      <h2>Trajetória</h2>
      <picture>
        <source srcSet="img/integrantes.webp" type="image/webp" />
        <img src="img/integrantes.jpg" loading="lazy" alt="Foto do Grupo de Samba Flor de Samambaia" style={{ width: '100%', borderRadius: '10px', margin: '20px 0' }} />
      </picture>
      {anos.map((a) => (
        <div key={a.ano}>
          <h3 style={{ color: a.cor }}>{a.ano}</h3>
          <ul>
            {a.eventos.map((evento) => (
              <li key={evento}>{evento}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Trajetoria
