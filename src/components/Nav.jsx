const sections = [
  { title: 'Sobre o grupo', id: 'sobre.html' },
  { title: 'Integrantes', id: 'integrantes.html' },
  { title: 'Trajetória', id: 'trajetoria.html' },
  { title: 'Clipping', id: 'clipping.html' },
  { title: 'Entrevista', id: 'entrevista.html' },
  { title: 'Contato', id: 'contato.html' },
]

function Nav() {
  return (
    <nav id="nav">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`}>{s.title}</a>
      ))}
    </nav>
  )
}

export default Nav
